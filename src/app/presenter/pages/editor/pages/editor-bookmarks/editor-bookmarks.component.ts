import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom, from, map } from 'rxjs';

import { BookmarkInteractor } from 'src/app/data/interactors/implementations/bookmark.interactor';
import { BookmarFormProps, BookmarkFormComponent } from './../../components/bookmark-form/bookmark-form.component';
import { Table } from 'src/app/presenter/components/shared/table/table.component';
import { ToastService } from 'src/app/presenter/components/shared/toast/toast.service';
import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';
import { isFormInvalid, joinShorts, onHttpResponse, parseDate, removeItemFromListIfStatus, updateTags } from '../../editor.functions';
import { BookmarkRequest } from 'src/app/data/requests/bookmark.request';


@Component({
    selector: 'app-editor-bookmarks',
    templateUrl: './editor-bookmarks.component.html',
    styles: [
    ]
})
export class EditorBookmarksComponent implements OnInit {
    public tableData: Table<BookmarkRequest> = { cols: [{ title: 'Bookmark URL' }], alias: 'url' };
    public form: FormGroup = new FormGroup({});
    public isLoading = false;

    public constructor(
        private bookmarkInteractor: BookmarkInteractor,
        private modalService: ModalService<BookmarkFormComponent, BookmarFormProps>,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.setTableData();
    }

    public setTableData = () => {
        this.tableData.action = { onEdit: this.onEditPost, onRemove: this.onRemoveBookmark }
        this.tableData.data$ = this.bookmarkInteractor.getMany();
    }

    public openModal = async (): Promise<void> => {
        await this.modalService.open(
            { component: BookmarkFormComponent, modalTitle: 'Create Bookmark' },
            { inputTitle: 'defaultValue', inputValue: this.getModalProps(new BookmarkRequest()) }
        );
    }

    private onEditPost = async (id: string, post?: BookmarkRequest): Promise<void> => {
        await this.modalService.open(
            { component: BookmarkFormComponent, modalTitle: 'Update Bookmark' },
            { inputTitle: 'defaultValue', inputValue: this.getModalProps(post!) }
        );
    }

    private onRemoveBookmark = async (id: string, bookmarks?: BookmarkRequest[]): Promise<void> => {
        const result: boolean = confirm('Are you sure?');
        if (id && result) {
            const response = firstValueFrom(this.bookmarkInteractor.delete(id));
            const status = await onHttpResponse(response, this.toastService);
            removeItemFromListIfStatus(status.acknowledged, id, bookmarks);
        }
    }


    private onSaveBookmark = async () => {
        if (isFormInvalid(this.form)) return;

        this.isLoading = true;
        const formValues: BookmarkRequest = {
            ...this.form.value, tags: updateTags(this.form),
            short: joinShorts(this.form)
        };
        const response = firstValueFrom(this.bookmarkInteractor.save(formValues));
        await onHttpResponse(response, this.toastService, this.modalService);
        this.tableData.data$ = from(this.tableData?.data$!.pipe(map((stream) => stream)));
    }

    private setForm = (bookmark?: BookmarkRequest) => {
        this.isLoading = false;
        this.form = new FormGroup({
            _id: new FormControl(bookmark?._id),
            tags: new FormControl(bookmark?.tags?.toString(), [Validators.required]),
            short: new FormControl(bookmark?.short, [Validators.required]),
            url: new FormControl(bookmark?.url, [Validators.required]),
            date: new FormControl(parseDate(bookmark?.date), [Validators.required]),
        })
    }

    private getModalProps = (post: BookmarkRequest): BookmarFormProps => {
        this.setForm(post);
        return { form: this.form, action: this.onSaveBookmark, data: post, isLoading: this.isLoading };
    }

}
