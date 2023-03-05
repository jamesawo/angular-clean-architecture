import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorHeaderComponent } from './../editor-header/editor-header.component';
import { LinkComponent } from './../../shared/link/link.component';

import { EditorLayoutComponent } from './editor-layout.component';

describe('EditorLayoutComponent', () => {
    let component: EditorLayoutComponent;
    let fixture: ComponentFixture<EditorLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditorLayoutComponent, EditorHeaderComponent, LinkComponent],
            imports: [RouterModule.forRoot([])]
        })
            .compileComponents();

        fixture = TestBed.createComponent(EditorLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create headerComponent', () => {

        const { debugElement } = fixture;
        const header = debugElement.query(By.directive(EditorHeaderComponent)).nativeElement;

        expect(header).toBeTruthy();
    })
});
