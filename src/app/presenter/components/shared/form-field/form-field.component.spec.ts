import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldComponent } from './form-field.component';

describe('FormFieldComponent', () => {
    let component: FormFieldComponent;
    let fixture: ComponentFixture<FormFieldComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormFieldComponent],
            imports: [ReactiveFormsModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FormFieldComponent);
        component = fixture.componentInstance;

        component.props = {
            formGroup: new FormGroup({
                FakeInput: new FormControl(),
            }),
            controlName: "FakeInput",
            isValid: (arg: string) => { },
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
