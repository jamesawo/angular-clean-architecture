import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { BookmarkInteractor } from 'src/app/data/interactors/implementations/bookmark/bookmark.interactor';
import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';
import { ToastService } from 'src/app/presenter/components/shared/toast/toast.service';

import { ButtonComponent } from './../../../../components/shared/button/button.component';
import { TableComponent } from './../../../../components/shared/table/table.component';

import { EditorBookmarksComponent } from './editor-bookmarks.component';

describe('EditorBookmarksComponent', () => {
    let component: EditorBookmarksComponent;
    let fixture: ComponentFixture<EditorBookmarksComponent>;

    let bookmarkInteractor: jasmine.SpyObj<BookmarkInteractor>;
    let modalService: jasmine.SpyObj<ModalService<any, any>>;
    let toastService: jasmine.SpyObj<ToastService>;

    beforeEach(async () => {
        bookmarkInteractor = jasmine.createSpyObj(BookmarkInteractor, [
            'getMany',
        ]);

        bookmarkInteractor.getMany = jasmine.createSpy().and.returnValue(of());

        modalService = jasmine.createSpyObj(ModalService, ['open', 'close']);
        toastService = jasmine.createSpyObj(ToastService, ['show']);
        await TestBed.configureTestingModule({
            declarations: [
                EditorBookmarksComponent,
                ButtonComponent,
                TableComponent,
            ],
            providers: [
                { provide: BookmarkInteractor, useValue: bookmarkInteractor },
                { provide: ModalService, useValue: modalService },
                { provide: ToastService, useValue: toastService },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(EditorBookmarksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
