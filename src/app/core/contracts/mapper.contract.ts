export interface Mapper<Type, Param> {

    toEntity(param: Param): Type;

    toRequest(type: Type): Param;

}
