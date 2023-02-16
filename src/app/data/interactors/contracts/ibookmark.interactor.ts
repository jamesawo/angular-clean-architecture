import { Observable } from 'rxjs';
import { Result } from './../../../core/types/types';
import { BookmarkRequest } from 'src/app/data/requests/bookmark.request';

export interface IBookmarkInteractor {

    getMany(): Observable<BookmarkRequest[]>;

    getOne(slug: string): Observable<BookmarkRequest>

    create(bookmark: BookmarkRequest): Observable<BookmarkRequest>;

    update(bookmark: BookmarkRequest): Observable<Result>;

    delete(slug: string): Observable<Result>;
}
