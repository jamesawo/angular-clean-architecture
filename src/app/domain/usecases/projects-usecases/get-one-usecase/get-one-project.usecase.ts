import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Param } from '../../../../core/params/param.payload';
import { Usecase } from '../../../../core/contracts/usecase.contract';
import { ProjectEntity } from '../../../entities';
import { IProjectRepository } from '../../../repositories/iproject.repository';

@Injectable({ providedIn: 'root' })
export class GetOneProjectUsecase implements Usecase<Param<string>, Observable<ProjectEntity>> {

    constructor(private iProjectRepository: IProjectRepository) { }

    execute(param: Param<string>): Observable<ProjectEntity> {
        return this.iProjectRepository.getProject(param.payload);
    }

}
