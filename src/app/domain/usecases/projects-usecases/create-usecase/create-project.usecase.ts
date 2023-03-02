import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectEntity } from '../../../entities';
import { Result } from 'src/app/core/types/types';
import { Param } from 'src/app/core/params/param.payload';
import { Usecase } from '../../../../core/contracts/usecase.contract';
import { IProjectRepository } from '../../../repositories/iproject.repository';


@Injectable({ providedIn: 'root' })
export class CreateProjectUsecase implements Usecase<Param<ProjectEntity>, Observable<Result>> {

    constructor(private iProjectRepository: IProjectRepository) { }

    execute(param: Param<ProjectEntity>): Observable<Result> {
        return this.iProjectRepository.createProject(param.payload);
    }
}
