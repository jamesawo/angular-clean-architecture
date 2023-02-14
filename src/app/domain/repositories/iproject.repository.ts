import { Observable } from 'rxjs';
import { Project } from '../entities';


export interface IProjectRepository {

    all(): Observable<void>;

    createPost(project: Project): Observable<void>;

    getPost(id: string): Observable<void>;

    updatePost(id: string, project: Project): Observable<void>;

    removePost(id: string): Observable<void>;

}
