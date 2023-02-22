import { RemoveBookmarkUsecase } from './../../../domain/usecases/bookmark-usecases/remove-bookmark.usecase';
import { UpdateBookmarkUsecase } from './../../../domain/usecases/bookmark-usecases/update-bookmark.usecase';
import { GetOneBookmarkUsecase } from './../../../domain/usecases/bookmark-usecases/get-one-bookmark.usecase';
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
        private getManyBookmarkUsecase: GetManyBookmarksUsecase,
        private getOneBookmarkUsecase: GetOneBookmarkUsecase,
        private updateBookmarkUsecase: UpdateBookmarkUsecase,
        private removeBookmarkUsecase: RemoveBookmarkUsecase
    ) {
    }

    public create(bookmark: BookmarkRequest): Observable<Result> {
        return this.createBookmarkUsecase.execute(new Param(bookmark));
    }

    public getMany(): Observable<BookmarkRequest[]> {
        return this.getManyBookmarkUsecase.execute(new NoParam());
    }

    public getOne(slug: string): Observable<BookmarkRequest> {
        return this.getOneBookmarkUsecase.execute(new Param(slug));
    }

    public update(bookmark: BookmarkRequest): Observable<Result> {
        return this.updateBookmarkUsecase.execute(new Param(bookmark));
    }

    public delete(slug: string): Observable<Result> {
        return this.removeBookmarkUsecase.execute(new Param(slug));
    }

}
