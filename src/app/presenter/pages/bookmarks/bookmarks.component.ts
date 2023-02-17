import { PageSeoService } from './../page-seo.service';
import { BookmarkInteractor } from 'src/app/data/interactors/implementations/bookmark.interactor';
import { BookmarkRequest } from 'src/app/data/requests/bookmark.request';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEnum } from '../../components/shared/skeleton-loader/skeleton-loader.component';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styles: []
})
export class BookmarksComponent implements OnInit {

    public bookmarks$?: Observable<BookmarkRequest[]>;
    public bookmarkPage = PageEnum.bookmark;

    constructor(
        private seo: PageSeoService,
        private bookmarkInteractor: BookmarkInteractor
    ) { }

    ngOnInit(): void {
        this.seo.setSEO({ pageTitle: 'My Bookmarks & Useful Links' });
        this.bookmarks$ = this.bookmarkInteractor.getMany();
    }

}
