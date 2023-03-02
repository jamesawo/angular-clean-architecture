import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ProjectEntity } from '../../../entities';
import { Result } from '../../../../core/types/types';
import { Param } from '../../../../core/params/param.payload';
import { Usecase } from '../../../../core/contracts/usecase.contract';
import { IProjectRepository } from '../../../repositories/iproject.repository';


@Injectable({ providedIn: 'root' })
export class UpdateProjectUsecase implements Usecase<Param<ProjectEntity>, Observable<Result>>{

    constructor(private iProjectRepository: IProjectRepository) { }

    execute(param: Param<ProjectEntity>): Observable<Result> {
        const { id, ...project } = param.payload;
        return this.iProjectRepository.updateProject(id!, project);
    }

}
