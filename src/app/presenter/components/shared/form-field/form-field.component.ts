import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

export type FormFieldProps = {
    controlName: string,
    isValid: (arg: string) => void,
    formGroup: FormGroup,
    type?: string
}

@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styles: [
    ]
})
export class FormFieldComponent {

    @Input()
    props?: FormFieldProps;
}
