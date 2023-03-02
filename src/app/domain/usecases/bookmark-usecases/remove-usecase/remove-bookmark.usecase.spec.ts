import { Observable, of } from "rxjs";
import { Param } from "src/app/core/params/param.payload";
import { MOCK_BOOKMARKS } from "src/app/data/datasources/remote/repo-implementations/bookmark/bookmark.repository.spec";
import { BookmarkEntity } from "src/app/domain/entities";
import { IBookmarkRepository } from "src/app/domain/repositories/ibookmark.repository";
import { RemoveBookmarkUsecase } from "./remove-bookmark.usecase";

describe('RemoveBookmarkUsecase', () => {

    let usecase: RemoveBookmarkUsecase;
    let ibookmarkRepository: jasmine.SpyObj<IBookmarkRepository>;
    let bookmark: BookmarkEntity;

    beforeEach(() => {
        ibookmarkRepository = jasmine.createSpyObj(IBookmarkRepository, ['removeBookmark']);
        usecase = new RemoveBookmarkUsecase(ibookmarkRepository);
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
            let usecase: jasmine.SpyObj<RemoveBookmarkUsecase> = jasmine.createSpyObj(RemoveBookmarkUsecase, ['execute']);

            usecase.execute(new Param(bookmark.id!));
            const args = usecase.execute.calls.argsFor(0);

            expect(args[0]).toBeInstanceOf(Param);
            expect(args[0].payload).toBeDefined;
            expect(args[0].payload).toEqual(jasmine.stringContaining(bookmark.id!));

        });
        it('should return an Observable<Result>', () => {
            spyOn(usecase, 'execute').and.returnValue(of())

            const result = usecase.execute(new Param(bookmark.id!));

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call ibookmarkRepository.removeBookmark', () => {
            usecase.execute(new Param(bookmark.id!));

            expect(usecase['ibookmarkRepository'].removeBookmark).toHaveBeenCalled();

        })
        it('should call ibookmarkRepository.removeBookmark with id and bookmark as input', () => {
            usecase.execute(new Param(bookmark.id!));

            expect(usecase['ibookmarkRepository'].removeBookmark).toHaveBeenCalledWith(bookmark.id!,);

        })
    })
})
