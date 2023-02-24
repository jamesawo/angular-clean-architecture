import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Result } from 'src/app/core/types/types';
import { BookmarkEntity } from 'src/app/domain/entities';
import { IBookmarkRepository } from 'src/app/domain/repositories/ibookmark.repository';

@Injectable({ providedIn: 'root' })
export class BookmarkRepository implements IBookmarkRepository {

    public baseUrl = window.location.origin + '/.netlify/functions/bookmarks';

    constructor(private http: HttpClient) { }

    public all(): Observable<BookmarkEntity[]> {
        return this.http
            .get<{ data: BookmarkEntity[] }>(`${this.baseUrl}`)
            .pipe(map(x => x.data));
    }

    public createBookmark(bookmark: BookmarkEntity): Observable<Result> {
        return this.http.post<{ data: Result }>(`${this.baseUrl}`, bookmark)
            .pipe(map(x => x.data));
    }

    public getBookmark(id: string): Observable<BookmarkEntity> {
        return this.http
            .get<{ data: BookmarkEntity }>(`${this.baseUrl}?id=${id}`)
            .pipe(map(x => x.data));
    }

    public updateBookmark(id: string, bookmark: BookmarkEntity): Observable<Result> {
        return this.http.put<{ data: Result }>(`${this.baseUrl}?bookmarkId=${id}`, bookmark)
            .pipe(map(x => x.data));
    }

    public removeBookmark(id: string): Observable<Result> {
        return this.http.delete<{ data: Result }>(`${this.baseUrl}?bookmarkId=${id}`)
            .pipe(map(x => x.data));
    }

}
