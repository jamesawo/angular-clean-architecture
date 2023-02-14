import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Result } from './../../../core/types/types';
import { Param } from 'src/app/core/params/param.payload';
import { NoParam } from 'src/app/core/params/no-param.paylod';
import { BookmarkRequest } from '../../requests/bookmark.request';
import { IBookmarkInteractor } from './../contracts/ibookmark.interactor';
import { RemoveBookmarkUsecase } from './../../../domain/usecases/bookmark-usecases/remove-bookmark.usecase';
import { UpdateBookmarkUsecase } from './../../../domain/usecases/bookmark-usecases/update-bookmark.usecase';
import { GetOneBookmarkUsecase } from './../../../domain/usecases/bookmark-usecases/get-one-bookmark.usecase';
import { CreateBookmarkUsecase } from './../../../domain/usecases/bookmark-usecases/create-bookmark.usecase';
import { GetManyBookmarksUsecase } from './../../../domain/usecases/bookmark-usecases/get-many-bookmarks.usecase';


@Injectable({ providedIn: 'root' })
export class BookmarkInteractor implements IBookmarkInteractor {

    constructor(
        private getBookmarkUsecase: GetManyBookmarksUsecase,
        private getOneBookmarkUsecase: GetOneBookmarkUsecase,
        private createBookmarkUsecase: CreateBookmarkUsecase,
        private updateBookmarkUsecase: UpdateBookmarkUsecase,
        private removeBookmarkUsecase: RemoveBookmarkUsecase
    ) {
    }

    public getMany(): Observable<BookmarkRequest[]> {
        const result = this.getBookmarkUsecase.execute(new NoParam());
        return result;
    }

    public getOne(slug: string): Observable<BookmarkRequest> {
        const result = this.getOneBookmarkUsecase.execute(new Param(slug));
        return result;
    }

    public create(bookmark: BookmarkRequest): Observable<BookmarkRequest> {
        this.createBookmarkUsecase.execute(new Param(bookmark));
        return of(bookmark);
    }

    public update(bookmark: BookmarkRequest): Observable<Result> {
        return this.updateBookmarkUsecase.execute(new Param(bookmark));
    }

    public delete(slug: string): Observable<void> {
        return this.removeBookmarkUsecase.execute(new Param(slug));
    }



}
