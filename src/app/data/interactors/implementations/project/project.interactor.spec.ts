
describe('ProjectInteractor', () => {

    describe('constructor', () => {
        it('should be created', () => { });
        it('should be an instance of IProjectInteractor', () => { });
        it('should be created with dependencies', () => { });

    })

    describe('save', () => {
        it('should accept a project as input', () => { });
        it('should call update if project.id is defined', () => { });
        it('should call create if project.id is NOT defined', () => { });
        it('should return an Observable', () => { });
    })

    describe('create', () => {
        it('should receive a project as input', () => { });
        it('should call createProjectUsecase.execute method', () => { });
        it('should return an Observable', () => { });
        it('should call createPostUsecase.execute with Param as input', () => { })
    })

    describe('getMany', () => {
        it('should call getManyProjectUsecase.execute method', () => { });
        it('should call getManyProjectUsecase with NoParam as input', () => { })
        it('should return an Observable', () => { });
    })

    describe('getOne', () => {
        it('should receive a string as input', () => { })
        it('should return an Observable', () => { })
        it('should call getOneProjectUsecase.execute with Param', () => { })
    })

    describe('update', () => {
        it('should accept a string as input', () => { })
        it('should return an Observable', () => { });
        it('should call updateProjectUsecase.execute with Param', () => { })
    })

    describe('delete', () => {
        it('should accept a string as input', () => { });
        it('should return an Observable', () => { });
        it('should call removeProjectUsecase.execute with Param', () => { });
    })
})
