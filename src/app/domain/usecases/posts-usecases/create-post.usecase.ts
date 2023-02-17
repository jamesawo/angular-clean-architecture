import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PostEntity } from '../../entities';
import { Result } from 'src/app/core/types/types';
import { Param } from 'src/app/core/params/param.payload';
import { Usecase } from '../../../core/contracts/usecase.contract';
import { IPostRepository } from '../../repositories/ipost.repository';


@Injectable({ providedIn: 'root' })
export class CreatePostUsecase implements Usecase<Param<PostEntity>, Observable<Result>> {

    constructor(private ipostRepository: IPostRepository) { }

    execute(param: Param<PostEntity>): Observable<Result> {
        return this.ipostRepository.createPost(param.payload);
    }
}
