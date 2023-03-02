import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './../../../core/types/types';
import { BookmarkRequest } from 'src/app/data/requests/bookmark.request';



@Injectable({ providedIn: 'root' })
export abstract class IBookmarkInteractor {

    abstract save(bookmark: BookmarkRequest): Observable<Result>;

    abstract getMany(): Observable<BookmarkRequest[]>;

    abstract getOne(slug: string): Observable<BookmarkRequest>

    abstract create(bookmark: BookmarkRequest): Observable<Result>;

    abstract update(bookmark: BookmarkRequest): Observable<Result>;

    abstract delete(slug: string): Observable<Result>;
}
