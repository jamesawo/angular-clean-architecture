import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';
import { ToastService } from 'src/app/presenter/components/shared/toast/toast.service';
import { isInvalidControl, parseDate } from '../../editor.functions';

import { PostInteractor } from './../../../../../data/interactors/implementations/post.interactor';
import { PostRequest } from './../../../../../data/requests/posts.request';

export type PostFormProps = {
    form: FormGroup,
    action: () => void,
    data: PostRequest,
    isLoading: boolean,
}

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styles: []
})
export class PostFormComponent {

    @Input()
    public defaultValue?: PostFormProps;

    public constructor(
        private postInteractor: PostInteractor,
        private fb: FormBuilder,
        private toastService: ToastService,
        private modalService: ModalService<PostFormComponent>
    ) { }

    ngOnInit(): void {

        /*
        let { data, form } = this.defaultValue!;

        form = this.fb.group({
            title: new FormControl(data?.title, [Validators.required]),
            date: new FormControl(parseDate(data?.date), [Validators.required]),
            tags: new FormControl(data?.tags?.toString(), [Validators.required]),
            content: new FormControl(data?.content, [Validators.required]),
            author: new FormControl(data?.author, []),
            excerpt: new FormControl(data?.excerpt, [Validators.required]),
        })
        */

    }

    public isControlInValid = (controlName: string): boolean => isInvalidControl(controlName, this.defaultValue?.form!);

}
