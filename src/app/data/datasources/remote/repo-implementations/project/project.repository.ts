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
            .get<ProjectEntity[]>(`${this.baseUrl}`);
    }

    createProject(project: ProjectEntity): Observable<Result> {
        return this.http.post<Result>(`${this.baseUrl}`, project);
    }

    getProject(id: string): Observable<ProjectEntity> {
        return this.http
            .get<ProjectEntity>(`${this.baseUrl}?id=${id}`);
    }

    updateProject(id: string, project: ProjectEntity): Observable<Result> {
        return this.http.put<Result>(`${this.baseUrl}?projectId=${id}`, project);
    }

    removeProject(id: string): Observable<Result> {
        return this.http.delete<Result>(`${this.baseUrl}?projectId=${id}`);
    }

}
