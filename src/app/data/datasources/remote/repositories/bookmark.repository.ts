import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Result } from 'src/app/core/types/types';
import { BookmarkEntity } from 'src/app/domain/entities';
import { IBookmarkRepository } from 'src/app/domain/repositories/ibookmark.repository';

@Injectable({ providedIn: 'root' })
export class BookmarkRepository implements IBookmarkRepository {

    constructor(private httpClient: HttpClient) { }

    public all(): Observable<BookmarkEntity[]> {
        return of();
    }

    public createBookmark(bookmark: BookmarkEntity): Observable<Result> {
        return of();
    }

    public getBookmark(id: string): Observable<BookmarkEntity> {
        return of();
    }

    public updateBookmark(id: string, bookmark: BookmarkEntity): Observable<Result> {
        return of();
    }

    public removeBookmark(id: string): Observable<Result> {
        return of();
    }
}
