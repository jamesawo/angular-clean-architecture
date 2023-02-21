import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';
import { ToastService } from 'src/app/presenter/components/shared/toast/toast.service';
import { isFormInvalid, isInvalidControl, onHttpResponse, parseDate, updateTags } from '../../editor.functions';

import { PostInteractor } from './../../../../../data/interactors/implementations/post.interactor';
import { PostRequest } from './../../../../../data/requests/posts.request';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styles: []
})
export class PostFormComponent {
    @Input()
    public defaultValue?: PostRequest;
    public form: FormGroup = new FormGroup({});
    public isLoading = false;

    public constructor(
        private postInteractor: PostInteractor,
        private fb: FormBuilder,
        private toastService: ToastService,
        private modalService: ModalService<PostFormComponent>
    ) { }

    ngOnInit(): void {
        let value = this.defaultValue;

        this.form = this.fb.group({
            title: new FormControl(value?.title, [Validators.required]),
            date: new FormControl(parseDate(value?.date), [Validators.required]),
            tags: new FormControl(value?.tags?.toString(), [Validators.required]),
            content: new FormControl(value?.content, [Validators.required]),
            author: new FormControl(value?.author, []),
            excerpt: new FormControl(value?.excerpt, [Validators.required]),
        })
    }

    public savePost = async () => {
        if (isFormInvalid(this.form)) return;

        this.isLoading = true;
        const formValues: PostRequest = { ...this.form.value, tags: updateTags(this.form), _id: this.defaultValue?._id };
        const response = firstValueFrom(this.postInteractor.savePost(formValues));
        await onHttpResponse(response, this.toastService);
        this.modalService.close();
    }

    public isControlInValid = (controlName: string): boolean => isInvalidControl(controlName, this.form)

}
