
describe('BookmarkInteractor', () => {

    describe('constructor', () => {
        it('should be created', () => { });
        it('should be an instance of IBookmarkInteractor', () => { });
        it('should be created with dependencies', () => { });

    })

    describe('save', () => {
        it('should accept a bookmark as input', () => { });
        it('should call update if bookmark.id is defined', () => { });
        it('should call create if bookmark.id is NOT defined', () => { });
        it('should return an Observable', () => { });
    })

    describe('create', () => {
        it('should receive a bookmark as input', () => { });
        it('should call createBookmark.execute method', () => { });
        it('should return an Observable', () => { });
        it('should call createBookmark.execute with Param as input', () => { })
    })

    describe('getMany', () => {
        it('should call getManyBookmarkUsecase.execute method', () => { });
        it('should call getManyBookmarkUsecase with NoParam as input', () => { })
        it('should return an Observable', () => { });
    })

    describe('getOne', () => {
        it('should receive a string as input', () => { })
        it('should return an Observable', () => { })
        it('should call getOneBookmarkUsecase.execute with Param', () => { })
    })

    describe('update', () => {
        it('should accept a string as input', () => { })
        it('should return an Observable', () => { });
        it('should call updateBookmarkUsecase.execute with Param', () => { })
    })

    describe('delete', () => {
        it('should accept a string as input', () => { });
        it('should return an Observable', () => { });
        it('should call removeBookmarkUsecase.execute with Param', () => { });
    })
})
