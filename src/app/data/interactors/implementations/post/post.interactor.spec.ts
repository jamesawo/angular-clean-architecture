
describe('PostInteractor', () => {

    describe('constructor', () => {
        it('should be created', () => { });
        it('should be an instance of IPostInteractor', () => { });
        it('should be created with dependencies', () => { });
    })

    describe('save', () => {
        it('should accept a post as input', () => { });
        it('should call update if post.id is defined', () => { });
        it('should call create if post.id is NOT defined', () => { });
        it('should return an Observable', () => { });
    })

    describe('create', () => {
        it('should receive a post as input', () => { });
        it('should call createPostUsecase.execute method', () => { });
        it('should return an Observable', () => { });
        it('should call createPostUsecase.execute with Param as input', () => { })
    })

    describe('getMany', () => {
        it('should call getManyPostUsecase.execute method', () => { });
        it('should call getManyPostUsecase with NoParam as input', () => { })
        it('should return an Observable', () => { });
    })

    describe('getOne', () => {
        it('should receive a string as input', () => { })
        it('should return an Observable', () => { })
        it('should call getOnePostUsecase.execute with Param', () => { })
    })

    describe('update', () => {
        it('should accept a string as input', () => { })
        it('should return an Observable', () => { });
        it('should call updatePostUsecase.execute with Param', () => { })
    })

    describe('delete', () => {
        it('should accept a string as input', () => { });
        it('should return an Observable', () => { });
        it('should call removePostUsecase.execute with Param', () => { });
    })
})
