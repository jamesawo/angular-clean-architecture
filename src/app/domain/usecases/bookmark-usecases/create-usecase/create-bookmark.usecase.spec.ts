import { Observable, of } from 'rxjs';
import { MOCK_BOOKMARKS } from './../../../../data/datasources/remote/repo-implementations/bookmark/bookmark.repository.spec';
import { BookmarkEntity } from './../../../entities/bookmark.entity';
import { Param } from "src/app/core/params/param.payload";
import { IBookmarkRepository } from "src/app/domain/repositories/ibookmark.repository";
import { CreateBookmarkUsecase } from "./create-bookmark.usecase";


describe('CreateBookmarkUsecase', () => {
    let usecase: CreateBookmarkUsecase;
    let ibookmarkRepository: jasmine.SpyObj<IBookmarkRepository>;
    let bookmark: BookmarkEntity;

    beforeEach(() => {
        ibookmarkRepository = jasmine.createSpyObj(IBookmarkRepository, ['createBookmark']);
        usecase = new CreateBookmarkUsecase(ibookmarkRepository);
        bookmark = MOCK_BOOKMARKS[0];
    });

    describe('constructor', () => {
        it('should be created', () => {
            expect(usecase).toBeTruthy();
        })
        it('should be created with dependency', () => {
            expect(usecase['ibookmarkRepository']).toBeTruthy();
        })
    })

    describe('execute', () => {
        it('should accept Param<BookmarkEntity> as input', () => {
            let usecase: jasmine.SpyObj<CreateBookmarkUsecase> = jasmine.createSpyObj(CreateBookmarkUsecase, ['execute']);

            usecase.execute(new Param(bookmark));
            const args = usecase.execute.calls.argsFor(0);

            expect(args[0]).toBeInstanceOf(Param);
            expect(args[0].payload).toBeDefined;
            expect(args[0].payload).toEqual(jasmine.objectContaining(bookmark));
        })

        it('should return an Observable ', () => {
            spyOn(usecase, 'execute').and.returnValue(of())

            const result = usecase.execute(new Param(bookmark));

            expect(result).toBeInstanceOf(Observable);

        });

        it('should call ibookmarkRepository.createBookmark with param', () => {
            usecase.execute(new Param(bookmark));

            expect(usecase['ibookmarkRepository'].createBookmark).toHaveBeenCalled();
            expect(usecase['ibookmarkRepository'].createBookmark).toHaveBeenCalledWith(bookmark);
        });
    })
})
