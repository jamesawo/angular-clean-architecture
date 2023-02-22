import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { PostFormComponent, PostFormProps } from './../../components/post-form/post-form.component';
import { PostInteractor } from './../../../../../data/interactors/implementations/post.interactor';
import { PostRequest } from './../../../../../data/requests/posts.request';
import { Table } from 'src/app/presenter/components/shared/table/table.component';
import { ToastService } from 'src/app/presenter/components/shared/toast/toast.service';
import { ComponentParam, ModalService } from 'src/app/presenter/components/shared/modal/modal.service';
import { isFormInvalid, onHttpResponse, parseDate, updateTags } from '../../editor.functions';


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

    public constructor(
        private postInteractor: PostInteractor,
        private modalService: ModalService<PostFormComponent, PostFormProps>,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.setTableData();
    }

    public setTableData = () => {
        this.postTable.data$ = this.postInteractor.getMany();
        this.postTable.action = { onEdit: this.onEditPost, onRemove: this.onRemovePost }
    }

    public openPostModal = async (): Promise<void> => {
        await this.modalService.open(
            this.getModalParam('Create Post'),
            this.getModalDefaultValue(new PostRequest())
        );
    }

    private onEditPost = async (id: string, post?: PostRequest): Promise<void> => {
        await this.modalService.open(
            this.getModalParam('Update Post'),
            this.getModalDefaultValue(post!)
        );
    }

    private getModalDefaultValue = (post: PostRequest) => {
        return { inputTitle: 'defaultValue', inputValue: this.getModalProps(post) };
    }

    private getModalProps = (post: PostRequest): PostFormProps => {
        this.setForm(post);
        return { form: this.form, action: this.onSavePost, data: post, isLoading: this.isLoading };
    }

    private getModalParam = (title: string): ComponentParam<PostFormComponent> => {
        return { component: PostFormComponent, modalTitle: title };
    }

    private onRemovePost = (id: string): void => {
        const result: boolean = confirm('Are you sure?');
        if (id && result) {
            const response = firstValueFrom(this.postInteractor.delete(id));
            onHttpResponse(response, this.toastService);
            this.onRefreshComponent();
        }
    }

    private onRefreshComponent = () => {
        setTimeout(() => this.ngOnInit()), 2000;
    }

    private onSavePost = async () => {
        if (isFormInvalid(this.form)) return;

        this.isLoading = true;
        const formValues: PostRequest = { ...this.form.value, tags: updateTags(this.form) };
        const response = firstValueFrom(this.postInteractor.savePost(formValues));
        await onHttpResponse(response, this.toastService, this.isLoading);
        this.modalService.close();
        this.onRefreshComponent();
    }

    private setForm = (data?: PostRequest) => {

        this.form = new FormGroup({
            _id: new FormControl(data?._id),
            title: new FormControl(data?.title, [Validators.required]),
            date: new FormControl(parseDate(data?.date), [Validators.required]),
            tags: new FormControl(data?.tags?.toString(), [Validators.required]),
            content: new FormControl(data?.content, [Validators.required]),
            author: new FormControl(data?.author, []),
            excerpt: new FormControl(data?.excerpt, [Validators.required]),
        })

        console.log(this.form);

    }

}
