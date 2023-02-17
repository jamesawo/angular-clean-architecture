import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Result } from './../../../core/types/types';
import { PostInteractor } from '../implementations/post.interactor';
import { PostRequest } from '../../requests/posts.request';


@Injectable({ providedIn: 'root', useClass: PostInteractor }) // default implementation
export abstract class IPostInteractor {

    abstract getMany(): Observable<PostRequest[]>;

    abstract getOne(slug: string): Observable<PostRequest>

    abstract create(bookmark: PostRequest): Observable<PostRequest>;

    abstract update(bookmark: PostRequest): Observable<Result>;

    abstract delete(slug: string): Observable<Result>;
}
