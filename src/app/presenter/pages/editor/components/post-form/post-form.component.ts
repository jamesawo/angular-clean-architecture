import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { isInvalidControl } from '../../editor.functions';
import { PostRequest } from './../../../../../data/requests/posts.request';

export type PostFormProps = {
    form: FormGroup;
    action: () => void;
    data: PostRequest;
    isLoading: boolean;
};

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styles: [],
})
export class PostFormComponent {
    @Input()
    public defaultValue?: PostFormProps;

    public constructor() {}

    public isControlInValid = (controlName: string): boolean => {
        return isInvalidControl(controlName, this.defaultValue?.form!);
    };
}
