import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Result } from 'src/app/core/types/types';
import { BookmarkEntity } from "../entities";

@Injectable()
export abstract class IBookmarkRepository {

    abstract all(): Observable<BookmarkEntity[]>;

    abstract createBookmark(bookmark: BookmarkEntity): Observable<Result>;

    abstract getBookmark(id: string): Observable<BookmarkEntity>;

    abstract updateBookmark(id: string, bookmark: BookmarkEntity): Observable<Result>;

    abstract removeBookmark(id: string): Observable<Result>;

}
