export interface Usecase<T, R> {
    execute(payload: T): R;
}
