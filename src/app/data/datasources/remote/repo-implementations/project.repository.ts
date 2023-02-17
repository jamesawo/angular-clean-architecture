import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { Result } from 'src/app/core/types/types';
import { ProjectEntity } from 'src/app/domain/entities';
import { IProjectRepository } from 'src/app/domain/repositories/iproject.repository';

@Injectable({ providedIn: 'root' })
export class ProjectRepository implements IProjectRepository {

    public baseUrl = window.location.origin + '/.netlify/functions/projects';

    constructor(private http: HttpClient) { }

    all(): Observable<ProjectEntity[]> {
        return this.http
            .get<{ data: ProjectEntity[] }>(`${this.baseUrl}`)
            .pipe(map(x => x.data));
    }

    createProject(Project: ProjectEntity): Observable<Result> {
        return of();
    }

    getProject(id: string): Observable<ProjectEntity> {
        return this.http
            .get<{ data: ProjectEntity }>(`${this.baseUrl}?id=${id}`)
            .pipe(map(x => x.data));
    }

    updateProject(id: string, Project: ProjectEntity): Observable<Result> {
        return of();
    }

    removeProject(id: string): Observable<Result> {
        return of();
    }

}
