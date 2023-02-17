import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostEntity } from './../entities/';

@Injectable({ providedIn: 'root' })
export abstract class IPostRepository {

    abstract all(): Observable<void>;

    abstract createPost(post: PostEntity): Observable<void>;

    abstract getPost(id: string): Observable<void>;

    abstract updatePost(id: string, post: PostEntity): Observable<void>;

    abstract removePost(id: string): Observable<void>;

}
