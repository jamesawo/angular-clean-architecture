import { BookmarkEntity } from 'src/app/domain/entities';
import { BookmarkRequest } from 'src/app/data/requests/bookmark.request';
import { CreateBookmarkUsecase } from "src/app/domain/usecases/bookmark-usecases/create-usecase/create-bookmark.usecase";
import { GetManyBookmarksUsecase } from "src/app/domain/usecases/bookmark-usecases/get-many-usecase/get-many-bookmarks.usecase";
import { GetOneBookmarkUsecase } from "src/app/domain/usecases/bookmark-usecases/get-one-usecase/get-one-bookmark.usecase";
import { RemoveBookmarkUsecase } from "src/app/domain/usecases/bookmark-usecases/remove-usecase/remove-bookmark.usecase";
import { UpdateBookmarkUsecase } from "src/app/domain/usecases/bookmark-usecases/update-usecase/update-bookmark.usecase";
import { IBookmarkInteractor } from "../../contracts/ibookmark.interactor";
import { BookmarkInteractor } from "./bookmark.interactor";
import { MOCK_BOOKMARKS } from './../../../datasources/remote/repo-implementations/bookmark/bookmark.repository.spec';
import { of, Observable } from 'rxjs';
import { Param } from 'src/app/core/params/param.payload';
import { NoParam } from 'src/app/core/params/no-param.paylod';



describe('BookmarkInteractor', () => {

    let interactor: BookmarkInteractor;
    let createBookmarkUsecase: jasmine.SpyObj<CreateBookmarkUsecase>;
    let getManyBookmarkUsecase: jasmine.SpyObj<GetManyBookmarksUsecase>;
    let getOneBookmarkUsecase: jasmine.SpyObj<GetOneBookmarkUsecase>;
    let updateBookmarkUsecase: jasmine.SpyObj<UpdateBookmarkUsecase>;
    let removeBookmarkUsecase: jasmine.SpyObj<RemoveBookmarkUsecase>;
    let bookmark: BookmarkRequest;

    beforeEach(() => {

        createBookmarkUsecase = jasmine.createSpyObj(CreateBookmarkUsecase, ['execute']);
        getManyBookmarkUsecase = jasmine.createSpyObj(GetManyBookmarksUsecase, ['execute']);
        getOneBookmarkUsecase = jasmine.createSpyObj(GetOneBookmarkUsecase, ['execute']);
        removeBookmarkUsecase = jasmine.createSpyObj(RemoveBookmarkUsecase, ['execute']);
        updateBookmarkUsecase = jasmine.createSpyObj(UpdateBookmarkUsecase, ['execute']);

        interactor = new BookmarkInteractor(
            createBookmarkUsecase,
            getManyBookmarkUsecase,
            getOneBookmarkUsecase,
            updateBookmarkUsecase,
            removeBookmarkUsecase,
        );
        bookmark = MOCK_BOOKMARKS[0];
    })


    describe('constructor', () => {

        it('should be created', () => {
            expect(interactor).toBeTruthy();
        });

        it('should be an instance of IBookmarkInteractor', () => {
            expect(interactor).toBeInstanceOf(IBookmarkInteractor);
        });

        it('should be created with dependencies', () => {
            expect(interactor['createBookmarkUsecase']).toBeTruthy();
            expect(interactor['getManyBookmarkUsecase']).toBeTruthy();
            expect(interactor['getOneBookmarkUsecase']).toBeTruthy();
            expect(interactor['updateBookmarkUsecase']).toBeTruthy();
            expect(interactor['removeBookmarkUsecase']).toBeTruthy();
        });
    });

    describe('save', () => {

        it('should accept a bookmark as input', () => {
            let interactor: jasmine.SpyObj<BookmarkInteractor> = jasmine.createSpyObj(BookmarkInteractor, ['save']);

            interactor.save(bookmark);
            const args = interactor.save.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.objectContaining(bookmark));

        });
        it('should call update if bookmark.id is defined', () => {
            spyOn(interactor, 'update');
            bookmark._id = '9302-a';

            interactor.save(bookmark);

            expect(interactor.update).toHaveBeenCalled();
        });
        it('should call create if bookmark.id is NOT defined', () => {
            bookmark._id = undefined;
            spyOn(interactor, 'create');

            interactor.save(bookmark);

            expect(interactor.create).toHaveBeenCalled();
        });
        it('should return an Observable', () => {

            spyOn(interactor, 'save').and.returnValue(of());

            const result = interactor.save(bookmark);

            expect(result).toBeInstanceOf(Observable);
        });
    })

    describe('create', () => {
        it('should receive a bookmark as input', () => {
            let interactor: jasmine.SpyObj<BookmarkInteractor> = jasmine.createSpyObj(BookmarkInteractor, ['create']);

            interactor.create(bookmark);
            const args = interactor.create.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.objectContaining(bookmark));
        });
        it('should call createBookmark.execute method', () => {
            interactor.create(bookmark);

            expect(createBookmarkUsecase.execute).toHaveBeenCalled();
        });
        it('should return an Observable', () => {
            spyOn(interactor, 'create').and.returnValue(of());

            const result = interactor.create(bookmark);

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call createBookmark.execute with Param as input', () => {
            interactor.create(bookmark);

            expect(createBookmarkUsecase.execute).toHaveBeenCalledWith(new Param(bookmark));
        })
    })

    describe('getMany', () => {
        it('should call getManyBookmarkUsecase.execute method', () => {
            interactor.getMany();

            expect(getManyBookmarkUsecase.execute).toHaveBeenCalled();
        });
        it('should call getManyBookmarkUsecase with NoParam as input', () => {
            interactor.getMany();

            expect(getManyBookmarkUsecase.execute).toHaveBeenCalledWith(new NoParam());
        })
        it('should return an Observable', () => {
            spyOn(interactor, 'create').and.returnValue(of());

            const result = interactor.create(bookmark);

            expect(result).toBeInstanceOf(Observable);
        });
    })

    describe('getOne', () => {
        it('should receive an id of string as input', () => {
            let interactor: jasmine.SpyObj<BookmarkInteractor> = jasmine.createSpyObj(BookmarkInteractor, ['getOne']);

            interactor.getOne(bookmark.id!);
            const args = interactor.getOne.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.stringContaining(bookmark.id!));
        })
        it('should return an Observable', (done: DoneFn) => {
            spyOn(interactor, 'getOne').and.returnValue(of(bookmark));

            const result = interactor.getOne(bookmark.id!);

            expect(result).toBeInstanceOf(Observable);
            result.subscribe(value => {
                expect(value).toBeDefined()
                expect(value).toEqual(jasmine.objectContaining(bookmark))
                done();
            })
        })
        it('should call getOneBookmarkUsecase.execute with Param', () => {
            interactor.getOne(bookmark.id!);

            expect(getOneBookmarkUsecase.execute).toHaveBeenCalledWith(new Param(bookmark.id!));
        })
    })

    describe('update', () => {
        it('should accept a bookmark as input', () => {
            let interactor: jasmine.SpyObj<BookmarkInteractor> = jasmine.createSpyObj(BookmarkInteractor, ['update']);

            interactor.update(bookmark);
            const args = interactor.update.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.objectContaining(bookmark));
        })
        it('should return an Observable', () => {
            spyOn(interactor, 'update').and.returnValue(of());

            const result = interactor.update(bookmark);

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call updateBookmarkUsecase.execute with Param', () => {
            interactor.update(bookmark);

            expect(updateBookmarkUsecase.execute).toHaveBeenCalledWith(new Param(bookmark));

        })
    })

    describe('delete', () => {
        it('should accept a string as input', () => {
            let interactor: jasmine.SpyObj<BookmarkInteractor> = jasmine.createSpyObj(BookmarkInteractor, ['delete']);

            interactor.delete(bookmark.id!);
            const args = interactor.delete.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.stringContaining(bookmark.id!));
        });
        it('should return an Observable', () => {
            spyOn(interactor, 'delete').and.returnValue(of());

            const result = interactor.delete(bookmark.id!);

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call removeBookmarkUsecase.execute with Param', () => {
            interactor.delete(bookmark.id!);

            expect(removeBookmarkUsecase.execute).toHaveBeenCalledWith(new Param(bookmark.id!));

        });
    })
})
