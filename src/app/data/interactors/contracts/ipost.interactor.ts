import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Result } from './../../../core/types/types';
import { PostInteractor } from '../implementations/post/post.interactor';
import { PostRequest } from '../../requests/posts.request';


@Injectable({ providedIn: 'root' })
export abstract class IPostInteractor {

    abstract getMany(): Observable<PostRequest[]>;

    abstract getOne(slug: string): Observable<PostRequest>

    abstract create(post: PostRequest): Observable<Result>;

    abstract update(post: PostRequest): Observable<Result>;

    abstract delete(slug: string): Observable<Result>;

    abstract savePost(formValues: PostRequest): Observable<Result>;
}
