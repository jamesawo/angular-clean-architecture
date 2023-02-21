import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { PostFormComponent, PostFormProps } from './../../components/post-form/post-form.component';
import { PostInteractor } from './../../../../../data/interactors/implementations/post.interactor';
import { PostRequest } from './../../../../../data/requests/posts.request';
import { Table } from 'src/app/presenter/components/shared/table/table.component';
import { ToastService } from 'src/app/presenter/components/shared/toast/toast.service';
import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';
import { isFormInvalid, onHttpResponse, updateTags } from '../../editor.functions';


@Component({
    selector: 'app-editor-posts',
    templateUrl: './editor-posts.component.html',
    styles: [
    ]
})
export class EditorPostsComponent {

    public postTable: Table<PostRequest> = { cols: [{ title: 'Post Title' }] };
    public form: FormGroup = new FormGroup({});
    public isLoading = false;
    public post = new PostRequest();

    public constructor(
        private postInteractor: PostInteractor,
        private modalService: ModalService<PostFormComponent, PostFormProps>,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.setTableData();
        this.setForm();
    }

    public setTableData = () => {
        this.postTable.data$ = this.postInteractor.getMany();
        this.postTable.action = { onEdit: this.onEditPost, onRemove: this.onRemovePost }
    }

    public openPostModal = async (): Promise<void> => {
        const param = { component: PostFormComponent, modalTitle: 'Create Post' };
        const props = { form: this.form, action: this.onSavePost, data: this.post, isLoading: this.isLoading };
        const defaultValue = { inputTitle: 'defaultValue', inputValue: props, };
        await this.modalService.open(param, defaultValue);
    }

    private onEditPost = async (id: string, data?: PostRequest): Promise<void> => {
        this.post = data!;
        const param = { component: PostFormComponent, modalTitle: 'Update Post' };
        const props = { form: this.form, action: this.onSavePost, data: data!, isLoading: this.isLoading };

        const defaultValue = { inputTitle: 'defaultValue', inputValue: props };
        // const defaultValue = { inputTitle: 'defaultValue', inputValue: data! };
        await this.modalService.open(param, defaultValue);
    }

    private onRemovePost = (id: string): void => {
        const result: boolean = confirm('Are you sure?');
        if (id && result) {
            const response = firstValueFrom(this.postInteractor.delete(id));
            onHttpResponse(response, this.toastService);
            setTimeout(() => {
                this.ngOnInit();
            }), 2000
        }
    }

    private onSavePost = async () => {
        if (isFormInvalid(this.form)) return;

        this.isLoading = true;
        const formValues: PostRequest = { ...this.form.value, tags: updateTags(this.form), _id: this.post?._id };
        const response = firstValueFrom(this.postInteractor.savePost(formValues));
        await onHttpResponse(response, this.toastService, this.isLoading);
        this.modalService.close();
        setTimeout(() => {
            this.ngOnInit();
        }), 2000

    }

    private setForm = () => {
        this.form = new FormGroup({
            title: new FormControl(),
            date: new FormControl(),
            tags: new FormControl(),
            content: new FormControl(),
            author: new FormControl(),
            excerpt: new FormControl(),
        })
    }

}
