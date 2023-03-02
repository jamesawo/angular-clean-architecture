import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { PostEntity } from '../../../entities';
import { Result } from '../../../../core/types/types';
import { Param } from '../../../../core/params/param.payload';
import { Usecase } from '../../../../core/contracts/usecase.contract';
import { IPostRepository } from '../../../repositories/ipost.repository';


@Injectable({ providedIn: 'root' })
export class UpdatePostUsecase implements Usecase<Param<PostEntity>, Observable<Result>>{

    constructor(private iPostRepository: IPostRepository) { }

    execute(param: Param<PostEntity>): Observable<Result> {
        const { id, ...Post } = param.payload;
        return this.iPostRepository.updatePost(id!, Post);
    }

}
