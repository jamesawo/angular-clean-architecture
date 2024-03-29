import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { firstValueFrom, from, map, shareReplay } from 'rxjs';

import { Table } from 'src/app/presenter/components/shared/table/table.component';
import { ToastService } from 'src/app/presenter/components/shared/toast/toast.service';
import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';

import {
    isFormInvalid,
    onHttpResponse,
    parseDate,
    removeItemFromListIfStatus,
    updateTags,
} from '../../editor.functions';
import {
    PostFormComponent,
    PostFormProps,
} from './../../components/post-form/post-form.component';
import { PostRequest } from './../../../../../data/requests/posts.request';
import { PostInteractor } from '../../../../../data/interactors/implementations/post/post.interactor';

@Component({
    selector: 'app-editor-posts',
    templateUrl: './editor-posts.component.html',
})
export class EditorPostsComponent implements OnInit {
    public postTable: Table<PostRequest> = { cols: [{ title: 'Post Title' }] };
    public form: FormGroup = new FormGroup({});
    public isLoading = false;

    public constructor(
        private postInteractor: PostInteractor,
        private modalService: ModalService<PostFormComponent, PostFormProps>,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.setTableData();
    }

    public setTableData = () => {
        this.postTable.action = {
            onEdit: this.onEditPost,
            onRemove: this.onRemovePost,
        };
        this.postTable.data$ = this.postInteractor
            .getMany()
            .pipe(shareReplay());
    };

    public openPostModal = async (): Promise<void> => {
        await this.modalService.open(
            { component: PostFormComponent, modalTitle: 'Create Post' },
            {
                inputTitle: 'defaultValue',
                inputValue: this.getModalProps(new PostRequest()),
            }
        );
    };

    private onEditPost = async (
        id: string,
        post?: PostRequest
    ): Promise<void> => {
        await this.modalService.open(
            { component: PostFormComponent, modalTitle: 'Update Post' },
            {
                inputTitle: 'defaultValue',
                inputValue: this.getModalProps(post!),
            }
        );
    };

    private onRemovePost = async (
        id: string,
        posts?: PostRequest[]
    ): Promise<void> => {
        if (id && confirm('Are you sure?')) {
            const response = firstValueFrom(this.postInteractor.delete(id));
            const status = await onHttpResponse(response, this.toastService);
            removeItemFromListIfStatus(status.acknowledged, id, posts);
        }
    };

    private onSavePost = async () => {
        if (isFormInvalid(this.form)) return;

        this.isLoading = true;
        const formValues: PostRequest = {
            ...this.form.value,
            tags: updateTags(this.form),
        };
        const response = firstValueFrom(
            this.postInteractor.savePost(formValues)
        );

        await onHttpResponse(response, this.toastService, this.modalService);
        this.postTable.data$ = from(
            this.postTable?.data$!.pipe(map((stream) => stream))
        );
    };

    private setForm = (data?: PostRequest) => {
        this.isLoading = false;
        this.form = new FormGroup({
            _id: new FormControl(data?._id),
            title: new FormControl(data?.title, [Validators.required]),
            date: new FormControl(parseDate(data?.date), [Validators.required]),
            tags: new FormControl(data?.tags?.toString(), [
                Validators.required,
            ]),
            content: new FormControl(data?.content, [Validators.required]),
            author: new FormControl(data?.author, []),
            excerpt: new FormControl(data?.excerpt, [Validators.required]),
        });
    };

    private getModalProps = (post: PostRequest): PostFormProps => {
        this.setForm(post);
        return {
            form: this.form,
            action: this.onSavePost,
            data: post,
            isLoading: this.isLoading,
        };
    };
}
