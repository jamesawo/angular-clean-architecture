import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { BookmarkInteractor } from 'src/app/data/interactors/implementations/bookmark/bookmark.interactor';

import { PageSeoService } from '../page-seo.service';
import { SkeletonLoaderComponent } from './../../components/shared/skeleton-loader/skeleton-loader.component';
import { TagComponent } from './../../components/shared/tag/tag.component';
import { BookmarksSkeletonComponent } from './../../components/shared/skeleton-loader/bookmarks-skeleton/bookmarks-skeleton.component';

import { BookmarksComponent } from './bookmarks.component';

describe('BookmarksComponent', () => {
    let component: BookmarksComponent;
    let fixture: ComponentFixture<BookmarksComponent>;
    let seo: jasmine.SpyObj<PageSeoService>;
    let bookmarkInteractor: jasmine.SpyObj<BookmarkInteractor>;

    beforeEach(async () => {
        bookmarkInteractor = jasmine.createSpyObj(BookmarkInteractor, [
            'getMany',
        ]);
        bookmarkInteractor.getMany = jasmine.createSpy().and.returnValue(of());

        seo = jasmine.createSpyObj(PageSeoService, ['setSEO']);

        await TestBed.configureTestingModule({
            declarations: [
                BookmarksComponent,
                TagComponent,
                SkeletonLoaderComponent,
                BookmarksSkeletonComponent,
            ],
            providers: [
                { provide: PageSeoService, useValue: seo },
                { provide: BookmarkInteractor, useValue: bookmarkInteractor },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(BookmarksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
