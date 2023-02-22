import { BookmarkRequest } from 'src/app/data/requests/bookmark.request';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { isInvalidControl } from '../../editor.functions';

export type BookmarFormProps = {
    form: FormGroup,
    action: () => void,
    data: BookmarkRequest,
    isLoading: boolean,
}

@Component({
    selector: 'app-bookmark-form',
    templateUrl: './bookmark-form.component.html',
    styles: [
    ]
})
export class BookmarkFormComponent {
    @Input()
    public defaultValue?: BookmarFormProps;

    public constructor() { }

    public isControlInValid = (controlName: string): boolean => {
        return isInvalidControl(controlName, this.defaultValue?.form!);
    }
}
