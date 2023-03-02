import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Param } from 'src/app/core/params/param.payload';
import { Result } from 'src/app/core/types/types';

import { IPostRepository } from '../../../repositories/ipost.repository';
import { Usecase } from '../../../../core/contracts/usecase.contract';

@Injectable({ providedIn: 'root' })
export class RemovePostUsecase implements Usecase<Param<string>, Observable<Result>> {

    constructor(private iPostRepository: IPostRepository) { }

    execute(param: Param<string>): Observable<Result> {
        return this.iPostRepository.removePost(param.payload);
    }

}
