import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { PostFormComponent, PostFormProps } from './../../components/post-form/post-form.component';
import { PostInteractor } from './../../../../../data/interactors/implementations/post.interactor';
import { PostRequest } from './../../../../../data/requests/posts.request';
import { Table } from 'src/app/presenter/components/shared/table/table.component';
import { ToastService, ToastType } from 'src/app/presenter/components/shared/toast/toast.service';
import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';
import { isFormInvalid, onHttpResponse, parseDate, updateTags } from '../../editor.functions';


@Component({
    selector: 'app-editor-posts',
    templateUrl: './editor-posts.component.html',
    styles: [
    ]
})
export class EditorPostsComponent implements OnInit {

    public postTable: Table<PostRequest> = { cols: [{ title: 'Post Title' }] };
    public form: FormGroup = new FormGroup({});
    public isLoading = false;

    public constructor(
        private postInteractor: PostInteractor,
        private modalService: ModalService<PostFormComponent, PostFormProps>,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.setTableData();
    }

    public setTableData = () => {
        this.postTable.action = { onEdit: this.onEditPost, onRemove: this.onRemovePost }
        this.postTable.data$ = this.postInteractor.getMany();
    }

    public openPostModal = async (): Promise<void> => {
        await this.modalService.open(
            { component: PostFormComponent, modalTitle: 'Create Post' },
            { inputTitle: 'defaultValue', inputValue: this.getModalProps(new PostRequest()) }
        );
    }

    private onEditPost = async (id: string, post?: PostRequest): Promise<void> => {
        await this.modalService.open(
            { component: PostFormComponent, modalTitle: 'Update Post' },
            { inputTitle: 'defaultValue', inputValue: this.getModalProps(post!) }
        );
    }

    private onRemovePost = (id: string): void => {
        const result: boolean = confirm('Are you sure?');
        if (id && result) {
            const response = firstValueFrom(this.postInteractor.delete(id));
            onHttpResponse(response, this.toastService);
            this.onRefreshComponent();
        }
    }

    private onSavePost = async () => {
        if (isFormInvalid(this.form)) return;

        this.isLoading = true;
        const formValues: PostRequest = { ...this.form.value, tags: updateTags(this.form) };
        const response = firstValueFrom(this.postInteractor.savePost(formValues));
        await onHttpResponse(response, this.toastService);
        this.modalService.close();
        this.onRefreshComponent();
    }

    private setForm = (data?: PostRequest) => {
        this.isLoading = false;
        this.form = new FormGroup({
            _id: new FormControl(data?._id),
            title: new FormControl(data?.title, [Validators.required]),
            date: new FormControl(parseDate(data?.date), [Validators.required]),
            tags: new FormControl(data?.tags?.toString(), [Validators.required]),
            content: new FormControl(data?.content, [Validators.required]),
            author: new FormControl(data?.author, []),
            excerpt: new FormControl(data?.excerpt, [Validators.required]),
        })

    }

    private getModalProps = (post: PostRequest): PostFormProps => {
        this.setForm(post);
        return { form: this.form, action: this.onSavePost, data: post, isLoading: this.isLoading };
    }

    private onRefreshComponent = () => {
        setTimeout(() => this.ngOnInit()), 2000;
    }

}


