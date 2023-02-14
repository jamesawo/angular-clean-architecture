export abstract class Mapper<E, R> {

    protected abstract toEntity(param: R): E;

    protected abstract toRequest(param: E): R;

}
