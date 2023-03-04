import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LinkComponent } from './../../shared/link/link.component';

import { EditorHeaderComponent } from './editor-header.component';
fdescribe('EditorHeaderComponent', () => {
    let fixture: ComponentFixture<EditorHeaderComponent>;
    let component: EditorHeaderComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditorHeaderComponent, LinkComponent],
            providers: [],
            imports: [
                RouterModule.forRoot([])
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(EditorHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();



    });

    it('should create', () => {
        expect(component).toBeTruthy();
    })

    it('should have 3 LinkComponents', () => {

        const { debugElement } = fixture;

        const linkComponents = debugElement.queryAll(By.directive(LinkComponent));

        expect(linkComponents.length).toBe(3);
    })
})
