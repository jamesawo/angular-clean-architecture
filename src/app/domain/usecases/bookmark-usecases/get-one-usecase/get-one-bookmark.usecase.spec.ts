import { MOCK_BOOKMARKS } from "src/app/data/datasources/remote/repo-implementations/bookmark/bookmark.repository.spec";
import { BookmarkEntity } from "src/app/domain/entities";
import { IBookmarkRepository } from "src/app/domain/repositories/ibookmark.repository";
import { GetOneBookmarkUsecase } from "./get-one-bookmark.usecase";
import { Param } from 'src/app/core/params/param.payload';
import { Observable, of } from 'rxjs';

describe('GetOneBookmarkUsecase', () => {

    let usecase: GetOneBookmarkUsecase
    let ibookmarkRepository: jasmine.SpyObj<IBookmarkRepository>;
    let bookmark: BookmarkEntity;

    beforeEach(() => {
        ibookmarkRepository = jasmine.createSpyObj(IBookmarkRepository, ['getBookmark']);
        usecase = new GetOneBookmarkUsecase(ibookmarkRepository);
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
            let usecase: jasmine.SpyObj<GetOneBookmarkUsecase> = jasmine.createSpyObj(GetOneBookmarkUsecase, ['execute']);

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
        it('should call ibookmarkRepository.getBookmark with Param', () => {
            usecase.execute(new Param(bookmark.id!));

            expect(usecase['ibookmarkRepository'].getBookmark).toHaveBeenCalled();
            expect(usecase['ibookmarkRepository'].getBookmark).toHaveBeenCalledWith(bookmark.id!);

        })
    })
})
