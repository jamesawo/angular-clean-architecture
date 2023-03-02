import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Result } from '../../../../core/types/types';
import { IPostInteractor } from '../../contracts/ipost.interactor';
import { PostRequest } from '../../../requests/posts.request';
import { Param } from 'src/app/core/params/param.payload';
import { NoParam } from 'src/app/core/params/no-param.paylod';
import { CreatePostUsecase } from '../../../../domain/usecases/posts-usecases/create-usecase/create-post.usecase';
import { UpdatePostUsecase } from '../../../../domain/usecases/posts-usecases/update-usecase/update-post.usecase';
import { RemovePostUsecase } from '../../../../domain/usecases/posts-usecases/remove-usecase/remove-post.usecase';
import { GetManyPostUsecase } from '../../../../domain/usecases/posts-usecases/get-many-usecase/get-many-posts.usecase';
import { GetOnePostUsecase } from '../../../../domain/usecases/posts-usecases/get-one-usecase/get-one-post.usecase';


@Injectable({ providedIn: 'root' })
export class PostInteractor extends IPostInteractor {

    constructor(
        private getOnePostUsecase: GetOnePostUsecase,
        private getManyPostUsecase: GetManyPostUsecase,
        private removePostUsecase: RemovePostUsecase,
        private updatePostUsecase: UpdatePostUsecase,
        private createPostUsecase: CreatePostUsecase
    ) {
        super();
    }

    public savePost(post: PostRequest): Observable<Result> {
        if (post._id) return this.update(post);

        return this.create(post);
    }

    public create(post: PostRequest): Observable<Result> {
        return this.createPostUsecase.execute(new Param(post));
    }

    public getMany(): Observable<PostRequest[]> {
        const result = this.getManyPostUsecase.execute(new NoParam());
        return result;
    }

    public getOne(slug: string): Observable<PostRequest> {
        return this.getOnePostUsecase.execute(new Param(slug));
    }

    public update(post: PostRequest): Observable<Result> {
        return this.updatePostUsecase.execute(new Param({ ...post, id: post._id }));
    }

    public delete(slug: string): Observable<Result> {
        return this.removePostUsecase.execute(new Param(slug));
    }

}
