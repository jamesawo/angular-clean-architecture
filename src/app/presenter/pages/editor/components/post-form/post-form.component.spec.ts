import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOCK_POSTS } from 'src/app/data/datasources/remote/repo-implementations/post/post.repository.spec';
import { FormFieldComponent } from 'src/app/presenter/components/shared/form-field/form-field.component';
import { ComponentModule } from 'src/app/presenter/components/components.module';

import { ButtonComponent } from './../../../../components/shared/button/button.component';
import { ModalComponent } from './../../../../components/shared/modal/modal.component';

import { PostFormComponent, PostFormProps } from './post-form.component';

describe('PostFormComponent', () => {
    let component: PostFormComponent;
    let fixture: ComponentFixture<PostFormComponent>;

    let props: PostFormProps = {
        form: new FormGroup({
            title: new FormControl(''),
            excerpt: new FormControl(''),
            author: new FormControl(''),
            tags: new FormControl(''),
            date: new FormControl(''),
            content: new FormControl(''),
        }),
        action: () => {},
        data: MOCK_POSTS[0],
        isLoading: false,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                PostFormComponent,
                ModalComponent,
                FormFieldComponent,
                ButtonComponent,
            ],
            imports: [ReactiveFormsModule, ComponentModule],
        }).compileComponents();

        fixture = TestBed.createComponent(PostFormComponent);
        component = fixture.componentInstance;
        component.defaultValue = props;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
