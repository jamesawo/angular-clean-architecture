import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('props', () => {
        let props: {
            text?: string,
            type?: string,
            loading?: boolean,
        }
        beforeEach(() => {
            props = {
                text: 'Fake Button',
                type: 'button',
                loading: false,
            };
        })

        it('should accept ButtonProps as input', () => {

            component.props = props;

            expect(component.props).toBeTruthy();

            expect(component.props).toEqual(props);

        })
    })

    describe('action', () => {

        let action: () => void;

        beforeEach(() => {
            action = () => { }
            component.action = action;
        })

        it('should accept a ButtonAction as input', () => {
            expect(component.action).toEqual(action);
        })
    })
});
