import { Observable } from 'rxjs';
import { ProjectEntity } from '../entities';


export interface IProjectRepository {

    all(): Observable<void>;

    createProject(project: ProjectEntity): Observable<void>;

    getProject(id: string): Observable<void>;

    updateProject(id: string, project: ProjectEntity): Observable<void>;

    removeProject(id: string): Observable<void>;

}
