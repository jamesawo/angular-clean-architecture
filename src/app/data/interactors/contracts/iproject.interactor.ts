import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Result } from '../../../core/types/types';
import { ProjectRequest } from '../../requests/project.request';
import { ProjectInteractor } from '../implementations/project.interactor';


@Injectable({ providedIn: 'root', useClass: ProjectInteractor }) // default implementation
export abstract class IProjectInteractor {

    abstract save(project: ProjectRequest): Observable<Result>;

    abstract getMany(): Observable<ProjectRequest[]>;

    abstract getOne(slug: string): Observable<ProjectRequest>

    abstract create(project: ProjectRequest): Observable<Result>;

    abstract update(project: ProjectRequest): Observable<Result>;

    abstract delete(slug: string): Observable<Result>;
}
