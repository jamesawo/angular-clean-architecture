import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MOCK_PROJECT } from 'src/app/data/datasources/remote/repo-implementations/project/project.repository.spec';
import { ComponentModule } from 'src/app/presenter/components/components.module';
import { ButtonComponent } from 'src/app/presenter/components/shared/button/button.component';
import { FormFieldComponent } from 'src/app/presenter/components/shared/form-field/form-field.component';

import { ModalComponent } from './../../../../components/shared/modal/modal.component';

import {
    ProjectFormComponent,
    ProjectFormProps,
} from './project-form.component';

describe('ProjectFormComponent', () => {
    let component: ProjectFormComponent;
    let fixture: ComponentFixture<ProjectFormComponent>;
    let props: ProjectFormProps = {
        form: new FormGroup({
            _id: new FormControl(''),
            title: new FormControl(''),
            description: new FormControl(''),
            features: new FormControl(''),
            modules: new FormControl(''),
            industries: new FormControl(''),
            tools: new FormControl(''),
            imageUrl: new FormControl(''),
            actionTitle: new FormControl(''),
            actionLink: new FormControl(''),
        }),
        action: () => {},
        data: MOCK_PROJECT[0],
        isLoading: false,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ProjectFormComponent,
                ModalComponent,
                FormFieldComponent,
                ButtonComponent,
            ],
            imports: [ReactiveFormsModule, ComponentModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectFormComponent);
        component = fixture.componentInstance;
        component.defaultValue = props;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
