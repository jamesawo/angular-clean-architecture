import { Observable, of } from "rxjs";
import { NoParam } from "src/app/core/params/no-param.paylod";
import { Param } from "src/app/core/params/param.payload";
import { MOCK_BOOKMARKS } from "src/app/data/datasources/remote/repo-implementations/bookmark/bookmark.repository.spec";
import { BookmarkEntity } from "src/app/domain/entities";
import { IBookmarkRepository } from "src/app/domain/repositories/ibookmark.repository";
import { GetManyBookmarksUsecase } from "./get-many-bookmarks.usecase";


describe('GetManyBookmarksUsecase', () => {
    let usecase: GetManyBookmarksUsecase;
    let ibookmarkRepository: jasmine.SpyObj<IBookmarkRepository>;
    let bookmark: BookmarkEntity;


    beforeEach(() => {
        ibookmarkRepository = jasmine.createSpyObj(IBookmarkRepository, ['all']);
        usecase = new GetManyBookmarksUsecase(ibookmarkRepository);
        bookmark = MOCK_BOOKMARKS[0];
    });

    describe('constructor', () => {
        it('should be created', () => {
            expect(usecase).toBeTruthy();
        })
        it('should be created with dependency', () => {
            expect(usecase['iBookmarkRepository']).toBeTruthy();
        })
    })

    describe('execute', () => {
        it('should accept NoParam as input', () => {
            let usecase: jasmine.SpyObj<GetManyBookmarksUsecase> = jasmine.createSpyObj(GetManyBookmarksUsecase, ['execute']);

            usecase.execute(new NoParam());
            const args = usecase.execute.calls.argsFor(0);

            expect(args[0]).toBeInstanceOf(NoParam);
            expect(args[0]).toBeDefined;

        })
        it('should return an Observable ', () => {
            spyOn(usecase, 'execute').and.returnValue(of())

            const result = usecase.execute(new NoParam());

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call ibookmarkRepository.all', () => {
            usecase.execute(new NoParam());

            expect(usecase['iBookmarkRepository'].all).toHaveBeenCalled();
            expect(usecase['iBookmarkRepository'].all).toHaveBeenCalledWith();

        });

    })
})
