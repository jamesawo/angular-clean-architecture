import { Component, OnInit } from '@angular/core';
import { IBookmarkInteractor } from 'src/app/data/interactors/contracts/ibookmark.interactor';
import { BookmarkInteractor } from 'src/app/data/interactors/implementations/bookmark.interactor';
import { BookmarkRequest } from 'src/app/data/requests/bookmark.request';
import { PageEnum } from '../../components/shared/skeleton-loader/skeleton-loader.component';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styles: []
})
export class BlogComponent implements OnInit {

    public blog = PageEnum.blog;

    constructor(private interactor: IBookmarkInteractor) {

    }

    ngOnInit(): void {
        // let posts$ = this.interactor.getMany();
        // console.log(posts$);
    }



}
