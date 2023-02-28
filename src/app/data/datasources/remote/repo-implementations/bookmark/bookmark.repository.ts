import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { Result } from 'src/app/core/types/types';
import { BookmarkEntity } from 'src/app/domain/entities';
import { IBookmarkRepository } from 'src/app/domain/repositories/ibookmark.repository';

@Injectable({ providedIn: 'root' })
export class BookmarkRepository extends IBookmarkRepository {

    public baseUrl = window.location.origin + '/.netlify/functions/bookmarks';

    constructor(private http: HttpClient) {
        super();
    }

    public all(): Observable<BookmarkEntity[]> {
        return this.http.get<BookmarkEntity[]>(`${this.baseUrl}`);
    }

    public createBookmark(bookmark: BookmarkEntity): Observable<Result> {
        return this.http.post<Result>(`${this.baseUrl}`, bookmark);
    }

    public getBookmark(id: string): Observable<BookmarkEntity> {
        return this.http
            .get<BookmarkEntity>(`${this.baseUrl}?id=${id}`);
    }

    public updateBookmark(id: string, bookmark: BookmarkEntity): Observable<Result> {
        return this.http.put<Result>(`${this.baseUrl}?bookmarkId=${id}`, bookmark);
    }

    public removeBookmark(id: string): Observable<Result> {
        return this.http.delete<Result>(`${this.baseUrl}?bookmarkId=${id}`);
    }

}
