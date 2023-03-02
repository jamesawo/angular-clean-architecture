import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Param } from '../../../../core/params/param.payload';
import { Usecase } from '../../../../core/contracts/usecase.contract';
import { PostEntity } from '../../../entities';
import { IPostRepository } from '../../../repositories/ipost.repository';

@Injectable({ providedIn: 'root' })
export class GetOnePostUsecase implements Usecase<Param<string>, Observable<PostEntity>> {

    constructor(private iPostRepository: IPostRepository) { }

    execute(param: Param<string>): Observable<PostEntity> {
        return this.iPostRepository.getPost(param.payload);
    }

}
