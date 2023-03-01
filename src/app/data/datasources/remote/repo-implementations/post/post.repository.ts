import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Result } from 'src/app/core/types/types';
import { PostEntity } from 'src/app/domain/entities';
import { IPostRepository } from 'src/app/domain/repositories/ipost.repository';

@Injectable({ providedIn: 'root' })
export class PostRepository implements IPostRepository {

    public baseUrl = window.location.origin + '/.netlify/functions/posts';

    constructor(private http: HttpClient) { }

    all(): Observable<PostEntity[]> {
        return this.http
            .get<PostEntity[]>(`${this.baseUrl}`);
    }

    createPost(post: PostEntity): Observable<Result> {
        return this.http.post<Result>(`${this.baseUrl}`, post);
    }

    getPost(id: string): Observable<PostEntity> {
        return this.http
            .get<PostEntity>(`${this.baseUrl}?id=${id}`);
    }

    updatePost(id: string, post: PostEntity): Observable<Result> {
        return this.http.put<Result>(`${this.baseUrl}?postId=${id}`, post);
    }

    removePost(id: string): Observable<Result> {
        return this.http.delete<Result>(`${this.baseUrl}?postId=${id}`);
    }

}
