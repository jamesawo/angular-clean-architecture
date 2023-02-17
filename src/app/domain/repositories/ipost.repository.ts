import { Result } from 'src/app/core/types/types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostEntity } from './../entities/';

@Injectable({ providedIn: 'root' })
export abstract class IPostRepository {

    abstract all(): Observable<PostEntity[]>;

    abstract createPost(post: PostEntity): Observable<Result>;

    abstract getPost(id: string): Observable<PostEntity>;

    abstract updatePost(id: string, post: PostEntity): Observable<Result>;

    abstract removePost(id: string): Observable<Result>;

}
