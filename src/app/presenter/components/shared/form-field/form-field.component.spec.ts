import { By } from '@angular/platform-browser';
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
        }).compileComponents();

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

    describe('Input props', () => {

        it('should receive props as Input', () => {
            const props = component.props;

            expect(props).toBeDefined();
            expect(props?.controlName).toEqual('FakeInput');
        });

        it('should correctly render the passed @Input value', () => {
            const { debugElement } = fixture;

            const label = debugElement.nativeElement.querySelector('label');

            expect(label.innerText).toContain(component.props?.controlName);
        });
    });
});
