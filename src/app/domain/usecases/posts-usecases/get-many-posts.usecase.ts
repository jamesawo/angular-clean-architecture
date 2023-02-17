import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoParam } from '../../../core/params/no-param.paylod';
import { Usecase } from '../../../core/contracts/usecase.contract';
import { PostEntity } from '../../entities';
import { IPostRepository } from '../../repositories/ipost.repository';

@Injectable({ providedIn: 'root' })
export class GetManyPostUsecase implements Usecase<NoParam, Observable<PostEntity[]>> {

    constructor(private iPostRepository: IPostRepository) { }

    execute(payload: NoParam): Observable<PostEntity[]> {
        return this.iPostRepository.all();
    }

}
