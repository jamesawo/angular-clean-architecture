import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Param } from 'src/app/core/params/param.payload';
import { Result } from 'src/app/core/types/types';
import { Usecase } from '../../../core/contracts/usecase.contract';
import { IProjectRepository } from '../../repositories/iproject.repository';

@Injectable({ providedIn: 'root' })
export class RemoveProjectUsecase implements Usecase<Param<string>, Observable<Result>> {

    constructor(private iProjectRepository: IProjectRepository) { }

    execute(param: Param<string>): Observable<Result> {
        return this.iProjectRepository.removeProject(param.payload);
    }

}
