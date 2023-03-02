import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoParam } from '../../../../core/params/no-param.paylod';
import { Usecase } from '../../../../core/contracts/usecase.contract';
import { ProjectEntity } from '../../../entities';
import { IProjectRepository } from '../../../repositories/iproject.repository';

@Injectable({ providedIn: 'root' })
export class GetManyProjectUsecase implements Usecase<NoParam, Observable<ProjectEntity[]>> {

    constructor(private iProjectRepository: IProjectRepository) { }

    execute(payload: NoParam): Observable<ProjectEntity[]> {
        return this.iProjectRepository.all();
    }

}
