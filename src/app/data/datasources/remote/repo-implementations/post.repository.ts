import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { Result } from 'src/app/core/types/types';
import { PostEntity } from 'src/app/domain/entities';
import { IPostRepository } from 'src/app/domain/repositories/ipost.repository';

@Injectable({ providedIn: 'root' })
export class PostRepository implements IPostRepository {

    public baseUrl = window.location.origin + '/.netlify/functions/posts';

    constructor(private http: HttpClient) { }

    all(): Observable<PostEntity[]> {
        return this.http
            .get<{ data: PostEntity[] }>(`${this.baseUrl}`)
            .pipe(map(x => x.data));
    }

    createPost(post: PostEntity): Observable<Result> {
        return of();

    }

    getPost(id: string): Observable<PostEntity> {
        return this.http
            .get<{ data: PostEntity }>(`${this.baseUrl}?id=${id}`)
            .pipe(map(x => x.data));
    }

    updatePost(id: string, post: PostEntity): Observable<Result> {
        return of();
    }

    removePost(id: string): Observable<Result> {
        return of();
    }

}
