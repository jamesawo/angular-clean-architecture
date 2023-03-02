import { IBookmarkRepository } from "src/app/domain/repositories/ibookmark.repository";
import { CreateBookmarkUsecase } from "./create-bookmark.usecase";


describe('CreateBookmarkUsecase', () => {
    let usecase: CreateBookmarkUsecase;
    let ibookmarkRepository: jasmine.SpyObj<IBookmarkRepository>;

    beforeEach(() => {
        ibookmarkRepository = jasmine.createSpyObj(IBookmarkRepository, ['all', 'createBookmark', 'getBookmark', 'updateBookmark', 'removeBookmark']);
        usecase = new CreateBookmarkUsecase(ibookmarkRepository);
    });

    describe('constructor', () => {
        it('should be created', () => {
            expect(usecase).toBeTruthy();
        })
        it('should be created with dependency', () => { })
    })

    describe('execute', () => {
        it('should accept Param<BookmarkEntity> as input', () => { })

        it('should return an Observable ', () => { });
        it('should call ibookmarkRepository.createBookmark with param', () => { });

    })
})
