import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

import { MOCK_BOOKMARKS } from 'src/app/data/datasources/remote/repo-implementations/bookmark/bookmark.repository.spec';
import { ComponentModule } from 'src/app/presenter/components/components.module';
import { ButtonComponent } from 'src/app/presenter/components/shared/button/button.component';

import { FormFieldComponent } from './../../../../components/shared/form-field/form-field.component';
import { ModalComponent } from './../../../../components/shared/modal/modal.component';

import {
    BookmarFormProps,
    BookmarkFormComponent,
} from './bookmark-form.component';

describe('BookmarkFormComponent', () => {
    let component: BookmarkFormComponent;
    let fixture: ComponentFixture<BookmarkFormComponent>;

    let props: BookmarFormProps = {
        form: new FormGroup({
            url: new FormControl(),
            short: new FormControl(),
            tags: new FormControl(),
            date: new FormControl(),
        }),
        action: () => {},
        data: MOCK_BOOKMARKS[0],
        isLoading: false,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                BookmarkFormComponent,
                ModalComponent,
                FormFieldComponent,
                ButtonComponent,
            ],
            imports: [ReactiveFormsModule, ComponentModule],
        }).compileComponents();

        fixture = TestBed.createComponent(BookmarkFormComponent);
        component = fixture.componentInstance;
        component.defaultValue = props;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
