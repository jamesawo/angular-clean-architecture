import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkComponent } from './link.component';

describe('LinkComponent', () => {
    let component: LinkComponent;
    let fixture: ComponentFixture<LinkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LinkComponent],
            imports: [RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(LinkComponent);
        component = fixture.componentInstance;
        component.props = { link: 'fakelink.cm', title: 'FakeTitle' };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('@Input Props', () => {
        it('should receive props as Input', () => {
            expect(component.props).toBeDefined();
            expect(component.props?.title).toContain('Fake');
        });

        it('should render the Input props value correctly', () => {
            const { debugElement } = fixture;

            const anchor = debugElement.nativeElement.querySelector('a');

            expect(anchor.innerText).toEqual(component.props?.title);
            expect(anchor.href).toContain(component.props?.link);
        });
    });
});
