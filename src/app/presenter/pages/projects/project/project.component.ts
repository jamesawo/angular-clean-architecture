import { Component, Input } from '@angular/core';
import { ProjectRequest } from 'src/app/data/requests/project.request';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',

})
export class ProjectComponent {
    @Input()
    public project?: ProjectRequest;

}
