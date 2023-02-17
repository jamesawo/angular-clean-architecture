import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectEntity } from '../entities';

@Injectable({ providedIn: 'root' })
export abstract class IProjectRepository {

    abstract all(): Observable<void>;

    abstract createProject(project: ProjectEntity): Observable<void>;

    abstract getProject(id: string): Observable<void>;

    abstract updateProject(id: string, project: ProjectEntity): Observable<void>;

    abstract removeProject(id: string): Observable<void>;

}
