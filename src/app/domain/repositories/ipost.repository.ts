import { Observable } from 'rxjs';
import { Post } from './../entities/';

export interface IPostRepository {

    all(): Observable<void>;

    createPost(post: Post): Observable<void>;

    getPost(id: string): Observable<void>;

    updatePost(id: string, post: Post): Observable<void>;

    removePost(id: string): Observable<void>;

}
