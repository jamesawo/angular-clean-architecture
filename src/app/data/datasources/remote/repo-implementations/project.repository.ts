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

    createProject(project: ProjectEntity): Observable<Result> {
        return this.http.post<{ data: Result }>(`${this.baseUrl}`, project)
            .pipe(map(x => x.data));
    }

    getProject(id: string): Observable<ProjectEntity> {
        return this.http
            .get<{ data: ProjectEntity }>(`${this.baseUrl}?id=${id}`)
            .pipe(map(x => x.data));
    }

    updateProject(id: string, project: ProjectEntity): Observable<Result> {
        return this.http.put<{ data: Result }>(`${this.baseUrl}?projectId=${id}`, project)
            .pipe(map(x => x.data));
    }

    removeProject(id: string): Observable<Result> {
        return this.http.delete<{ data: Result }>(`${this.baseUrl}?projectId=${id}`)
            .pipe(map(x => x.data));
    }

}
