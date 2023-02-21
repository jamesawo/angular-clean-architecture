import { Component } from '@angular/core';

import { PostFormComponent } from './../../components/post-form/post-form.component';
import { PostInteractor } from './../../../../../data/interactors/implementations/post.interactor';
import { PostRequest } from './../../../../../data/requests/posts.request';
import { Table } from 'src/app/presenter/components/shared/table/table.component';
import { ToastService, ToastType } from 'src/app/presenter/components/shared/toast/toast.service';
import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';

@Component({
    selector: 'app-editor-posts',
    templateUrl: './editor-posts.component.html',
    styles: [
    ]
})
export class EditorPostsComponent {

    public postTable: Table<PostRequest> = { cols: [{ title: 'Post Title' }] };;

    public constructor(
        private postInteractor: PostInteractor,
        private modalService: ModalService<PostFormComponent, PostRequest>,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.postTable.data$ = this.postInteractor.getMany();
        this.postTable.action = { onEdit: this.onEditPost, onRemove: this.onRemovePost }
    }

    public openPostModal = async (): Promise<void> => {
        await this.modalService.open({
            component: PostFormComponent,
            modalTitle: 'Create Post'
        });
    }

    private onEditPost = async (id: string, data?: PostRequest): Promise<void> => {
        const param = { component: PostFormComponent, modalTitle: 'Update Post' };
        const defaultValue = { inputTitle: 'defaultValue', inputValue: data! };
        await this.modalService.open(param, defaultValue);
    }

    private onRemovePost = (id: string): void => {
        const result: boolean = confirm('Are you sure?');
        if (id && result) {
            this.postInteractor.delete(id).subscribe({
                next: () => {
                    this.toastService.show({
                        title: "Removed",
                        message: "Post Removed Successfully!",
                        type: ToastType.success
                    })
                }
            });

        }
    }

}
