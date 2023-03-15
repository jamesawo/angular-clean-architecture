import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
    let component: ModalComponent<any>;
    let fixture: ComponentFixture<ModalComponent<any>>;
    let modalService: jasmine.SpyObj<ModalService<any>>;

    let serviceProps = {
        title: 'FakeModalTitle',
    };

    beforeEach(() => {
        modalService = jasmine.createSpyObj(ModalService, [
            'close',
            'open',
            'resolveComponent',
            'appendComponentToHtmlBody',
        ]);

        modalService['title'] = serviceProps.title;

        TestBed.configureTestingModule({
            declarations: [ModalComponent],
            providers: [{ provide: ModalService, useValue: modalService }],
        }).compileComponents();

        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('constructor', () => {
        it('should set title property', () => {
            expect(component.title).toEqual(serviceProps.title);
        });
    });

    describe('close', () => {
        it('should set display property to false', () => {
            component.close();

            expect(component.display).toBeFalse();
        });

        it('should call service.close method', async () => {
            component.close();

            expect(modalService.close).toHaveBeenCalled();
        });
    });
});
