export interface Usecase<T, R> {
    execute(param: T): R;
}
