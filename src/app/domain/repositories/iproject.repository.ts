import { Result } from 'src/app/core/types/types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectEntity } from '../entities';

@Injectable({ providedIn: 'root' })
export abstract class IProjectRepository {

    abstract all(): Observable<ProjectEntity[]>;

    abstract createProject(project: ProjectEntity): Observable<Result>;

    abstract getProject(id: string): Observable<ProjectEntity>;

    abstract updateProject(id: string, project: ProjectEntity): Observable<Result>;

    abstract removeProject(id: string): Observable<Result>;

}
