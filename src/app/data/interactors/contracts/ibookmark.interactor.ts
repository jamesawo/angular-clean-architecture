import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './../../../core/types/types';
import { BookmarkRequest } from 'src/app/data/requests/bookmark.request';
import { BookmarkInteractor } from '../implementations/bookmark.interactor';


@Injectable({ providedIn: 'root', useClass: BookmarkInteractor }) // default implementation
export abstract class IBookmarkInteractor {

    abstract getMany(): Observable<BookmarkRequest[]>;

    abstract getOne(slug: string): Observable<BookmarkRequest>

    abstract create(bookmark: BookmarkRequest): Observable<Result>;

    abstract update(bookmark: BookmarkRequest): Observable<Result>;

    abstract delete(slug: string): Observable<Result>;
}
