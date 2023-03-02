import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Result } from '../../../../core/types/types';
import { Param } from 'src/app/core/params/param.payload';
import { NoParam } from 'src/app/core/params/no-param.paylod';
import { ProjectRequest } from '../../../requests/project.request';
import { IProjectInteractor } from '../../contracts/iproject.interactor';
import { GetOneProjectUsecase } from 'src/app/domain/usecases/projects-usecases/get-one-usecase/get-one-project.usecase';
import { GetManyProjectUsecase } from 'src/app/domain/usecases/projects-usecases/get-many-usecase/get-many-project.usecase';
import { RemoveProjectUsecase } from 'src/app/domain/usecases/projects-usecases/remove-usecase/remove-project.usecase';
import { CreateProjectUsecase } from 'src/app/domain/usecases/projects-usecases/create-usecase/create-project.usecase';
import { UpdateProjectUsecase } from '../../../../domain/usecases/projects-usecases/update-usecase/update-project.usecase';


@Injectable({ providedIn: 'root' })
export class ProjectInteractor extends IProjectInteractor {

    constructor(
        private getOneProjectUsecase: GetOneProjectUsecase,
        private getManyProjectUsecase: GetManyProjectUsecase,
        private removeProjectUsecase: RemoveProjectUsecase,
        private updateProjectUsecase: UpdateProjectUsecase,
        private createProjectUsecase: CreateProjectUsecase
    ) {
        super();
    }

    public save(project: ProjectRequest): Observable<Result> {
        if (project._id) return this.update(project);

        return this.create(project);
    }

    public create(project: ProjectRequest): Observable<Result> {
        return this.createProjectUsecase.execute(new Param(project));
    }

    public getMany(): Observable<ProjectRequest[]> {
        return this.getManyProjectUsecase.execute(new NoParam());
    }

    public getOne(slug: string): Observable<ProjectRequest> {
        return this.getOneProjectUsecase.execute(new Param(slug));
    }

    public update(project: ProjectRequest): Observable<Result> {
        return this.updateProjectUsecase.execute(new Param({ ...project, id: project._id }));
    }

    public delete(slug: string): Observable<Result> {
        return this.removeProjectUsecase.execute(new Param(slug));
    }

}
