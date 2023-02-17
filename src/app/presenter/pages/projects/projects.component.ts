import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PageSeoService } from './../page-seo.service';
import { PageEnum } from '../../components/shared/skeleton-loader/skeleton-loader.component';
import { ProjectRequest } from 'src/app/data/requests/project.request';
import { IProjectInteractor } from 'src/app/data/interactors/contracts/iproject.interactor';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
})
export class ProjectsComponent {
    public projects$?: Observable<ProjectRequest[]>;
    public page = PageEnum.project;

    constructor(
        private seoService: PageSeoService,
        private interactor: IProjectInteractor
    ) { }

    ngOnInit(): void {
        this.seoService.setSEO({ pageTitle: 'My Projects / Portfolio', });
        this.projects$ = this.interactor.getMany();
    }

}
