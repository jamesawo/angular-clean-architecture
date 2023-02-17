import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Result } from '../../../core/types/types';
import { PostInteractor } from '../implementations/post.interactor';
import { ProjectRequest } from '../../requests/project.request';


@Injectable({ providedIn: 'root', useClass: PostInteractor }) // default implementation
export abstract class IProjectInteractor {

    abstract getMany(): Observable<ProjectRequest[]>;

    abstract getOne(slug: string): Observable<ProjectRequest>

    abstract create(project: ProjectRequest): Observable<ProjectRequest>;

    abstract update(project: ProjectRequest): Observable<Result>;

    abstract delete(slug: string): Observable<Result>;
}
