import { GetManyBookmarksUsecase } from './../../../domain/usecases/bookmark-usecases/get-many-bookmarks.usecase';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Result } from './../../../core/types/types';
import { Param } from 'src/app/core/params/param.payload';
import { BookmarkRequest } from '../../requests/bookmark.request';
import { CreateBookmarkUsecase } from './../../../domain/usecases/bookmark-usecases/create-bookmark.usecase';
import { IBookmarkInteractor } from './../contracts/ibookmark.interactor';
import { NoParam } from 'src/app/core/params/no-param.paylod';


@Injectable({ providedIn: 'root' })
export class BookmarkInteractor implements IBookmarkInteractor {

    constructor(
        private createBookmarkUsecase: CreateBookmarkUsecase,
        private getManyBookmarkUsecase: GetManyBookmarksUsecase
    ) {
    }

    public create(bookmark: BookmarkRequest): Observable<BookmarkRequest> {
        this.createBookmarkUsecase.execute(new Param(bookmark));
        return of(bookmark);
    }

    public getMany(): Observable<BookmarkRequest[]> {
        const result = this.getManyBookmarkUsecase.execute(new NoParam());
        return result;
    }

    public getOne(slug: string): Observable<BookmarkRequest> {
        return of();
    }

    public update(bookmark: BookmarkRequest): Observable<Result> {
        return of();
    }

    public delete(slug: string): Observable<Result> {
        return of();
    }

}
