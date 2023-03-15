import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';
import { ToastService } from 'src/app/presenter/components/shared/toast/toast.service';

import { ButtonComponent } from './../../../../components/shared/button/button.component';
import { TableComponent } from './../../../../components/shared/table/table.component';
import { ProjectInteractor } from './../../../../../data/interactors/implementations/project/project.interactor';

import { EditorProjectsComponent } from './editor-projects.component';

describe('EditorProjectsComponent', () => {
    let component: EditorProjectsComponent;
    let fixture: ComponentFixture<EditorProjectsComponent>;
    let projectInteractor: jasmine.SpyObj<ProjectInteractor>;
    let modalService: jasmine.SpyObj<ModalService<any, any>>;
    let toastService: jasmine.SpyObj<ToastService>;

    beforeEach(async () => {
        projectInteractor = jasmine.createSpyObj(ProjectInteractor, [
            'getMany',
        ]);
        projectInteractor.getMany = jasmine.createSpy().and.returnValue(of());

        await TestBed.configureTestingModule({
            declarations: [
                EditorProjectsComponent,
                ButtonComponent,
                TableComponent,
            ],
            providers: [
                { provide: ProjectInteractor, useValue: projectInteractor },
                { provide: ModalService, useValue: modalService },
                { provide: ToastService, useValue: toastService },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(EditorProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
