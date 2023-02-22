import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ProjectRequest } from 'src/app/data/requests/project.request';
import { isInvalidControl } from '../../editor.functions';

export type ProjectFormProps = {
    form: FormGroup,
    action: () => void,
    data: ProjectRequest,
    isLoading: boolean,
}

@Component({
    selector: 'app-project-form',
    templateUrl: './project-form.component.html',
    styles: [
    ]
})
export class ProjectFormComponent {

    @Input()
    public defaultValue?: ProjectFormProps;

    public constructor() { }

    public isControlInValid = (controlName: string): boolean => {
        return isInvalidControl(controlName, this.defaultValue?.form!);
    }
}
