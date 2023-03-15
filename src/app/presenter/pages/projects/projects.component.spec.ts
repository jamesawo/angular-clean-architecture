import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { IProjectInteractor } from 'src/app/data/interactors/contracts/iproject.interactor';
import { ProjectInteractor } from 'src/app/data/interactors/implementations/project/project.interactor';

import { PageSeoService } from './../page-seo.service';
import { SkeletonLoaderComponent } from './../../components/shared/skeleton-loader/skeleton-loader.component';
import { ProjectsSkeletonComponent } from './../../components/shared/skeleton-loader/projects-skeleton/projects-skeleton.component';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
    let component: ProjectsComponent;
    let fixture: ComponentFixture<ProjectsComponent>;
    let seoService: jasmine.SpyObj<PageSeoService>;
    let interactor: jasmine.SpyObj<IProjectInteractor>;

    beforeEach(async () => {
        seoService = jasmine.createSpyObj(PageSeoService, ['setSEO']);
        interactor = jasmine.createSpyObj(IProjectInteractor, ['getMany']);
        interactor.getMany = jasmine.createSpy().and.returnValue(of());

        await TestBed.configureTestingModule({
            providers: [{ provide: IProjectInteractor, useValue: interactor }],
            declarations: [
                ProjectsComponent,
                SkeletonLoaderComponent,
                ProjectsSkeletonComponent,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
