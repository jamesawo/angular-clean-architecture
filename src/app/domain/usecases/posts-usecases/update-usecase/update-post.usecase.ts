import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PostEntity } from '../../../entities';
import { IPostRepository } from '../../../repositories/ipost.repository';
import { Usecase } from '../../../../core/contracts/usecase.contract';
import { Param } from '../../../../core/params/param.payload';
import { Result } from '../../../../core/types/types';


@Injectable({ providedIn: 'root' })
export class UpdatePostUsecase implements Usecase<Param<PostEntity>, Observable<Result>>{

    constructor(private iPostRepository: IPostRepository) { }

    execute(param: Param<PostEntity>): Observable<Result> {
        const { id, ...Post } = param.payload;
        return this.iPostRepository.updatePost(id!, Post);
    }

}
