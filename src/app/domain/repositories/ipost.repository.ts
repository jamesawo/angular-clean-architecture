import { Observable } from 'rxjs';
import { PostEntity } from './../entities/';

export interface IPostRepository {

    all(): Observable<void>;

    createPost(post: PostEntity): Observable<void>;

    getPost(id: string): Observable<void>;

    updatePost(id: string, post: PostEntity): Observable<void>;

    removePost(id: string): Observable<void>;

}
