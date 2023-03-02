import { Observable, of } from "rxjs";
import { Param } from "src/app/core/params/param.payload";
import { MOCK_BOOKMARKS } from "src/app/data/datasources/remote/repo-implementations/bookmark/bookmark.repository.spec";
import { BookmarkEntity } from "src/app/domain/entities";
import { IBookmarkRepository } from "src/app/domain/repositories/ibookmark.repository";
import { UpdateBookmarkUsecase } from "./update-bookmark.usecase";

describe('UpdateBookmarkUsecase', () => {

    let usecase: UpdateBookmarkUsecase;
    let ibookmarkRepository: jasmine.SpyObj<IBookmarkRepository>;
    let bookmark: BookmarkEntity;

    beforeEach(() => {
        ibookmarkRepository = jasmine.createSpyObj(IBookmarkRepository, ['updateBookmark']);
        usecase = new UpdateBookmarkUsecase(ibookmarkRepository);
        bookmark = MOCK_BOOKMARKS[0];
    });


    describe('constructor', () => {
        it('should be created', () => {
            expect(usecase).toBeTruthy();
        });
        it('should accept IBookmarkRepository as dependency', () => {
            expect(usecase['ibookmarkRepository']).toBeTruthy();
        });


    })

    describe('execute', () => {
        it('should accept Param as input', () => {
            let usecase: jasmine.SpyObj<UpdateBookmarkUsecase> = jasmine.createSpyObj(UpdateBookmarkUsecase, ['execute']);

            usecase.execute(new Param(bookmark));
            const args = usecase.execute.calls.argsFor(0);

            expect(args[0]).toBeInstanceOf(Param);
            expect(args[0].payload).toBeDefined;
            expect(args[0].payload).toEqual(jasmine.objectContaining(bookmark));
        });
        it('should return an Observable<Result>', () => {
            spyOn(usecase, 'execute').and.returnValue(of())

            const result = usecase.execute(new Param(bookmark));

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call ibookmarkRepository.updateBookmark', () => {
            usecase.execute(new Param(bookmark));

            expect(usecase['ibookmarkRepository'].updateBookmark).toHaveBeenCalled();
        })
        it('should call ibookmarkRepository.updateBookmark with id and bookmark as input', () => {

            const { id, ...rest } = bookmark;
            usecase.execute(new Param(bookmark));

            expect(usecase['ibookmarkRepository'].updateBookmark).toHaveBeenCalledWith(id!, jasmine.objectContaining(rest));
        })
    })
})
