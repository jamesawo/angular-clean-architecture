import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { BookmarkEntity } from 'src/app/domain/entities';
import { IBookmarkRepository } from 'src/app/domain/repositories/ibookmark.repository';

import { BookmarkRequest } from './../../../../requests/bookmark.request';

import { BookmarkRepository } from "./bookmark.repository";

const MOCK_BOOKMARKS: BookmarkEntity[] = [

    {
        "id": "63fcc537a22452cf36fe85bd",
        "tags": [
            "osmething",
            " another thing",
            " another thing again",
            " a new thing"
        ],
        "short": "vessel-bookmark",
        "url": "https://mionb.com.ng/",
        "date": "2023-02-22",
    },
    {
        "id": "63fcc43ea22452cf36fe85bc",
        "tags": [
            "Java"
        ],
        "short": "vessel-bookmark",
        "url": "https://travismedia.uk",
        "date": "2023-02-27",
    }

];

describe('BookmarkRepository', () => {

    let repository: BookmarkRepository;
    let http: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        http = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
        repository = new BookmarkRepository(http);
    })


    describe('bookmarkRepository', () => {
        it('should be created', () => {
            expect(repository).toBeTruthy();
        })

        it('should be an instance of IBookmarkRepository', () => {
            expect(repository instanceof BookmarkRepository).toBeTruthy();
            expect(repository instanceof IBookmarkRepository).toBeTruthy();
        })

        it('should be initialized with HttpClient', () => {
            expect(repository['http']).toEqual(http);
        })
    });

    describe('baseUrl', () => {
        it('should not be empty', () => {
            expect(repository['baseUrl']).toBeDefined();
        });

        it(`should contain 'bookmarks'`, () => {
            expect(repository['baseUrl']).toContain('bookmarks');
        });
    });

    describe('all', () => {
        it('should NOT accept any input', () => {
            spyOn(repository, 'all');

            repository.all();

            expect(repository.all).toHaveBeenCalledWith();
        });

        it('should call get method on httpClient', () => {

            repository.all();

            expect(http.get).toHaveBeenCalled();
        });

        it('should pass baseUrl to get method on httpClient', () => {
            repository.all();

            expect(http.get).toHaveBeenCalledWith(repository.baseUrl);
        })

        it('should return an Observable of BookmarkEntity[]', () => {
            const actualResult = of(MOCK_BOOKMARKS);
            http.get.and.returnValue(actualResult);

            const expectedResult = repository.all();

            expect(expectedResult).toEqual(actualResult);
        });
    });

    describe('createBookmark', () => {

        it(`should accept an input of type 'BookEntity'`, () => {
            const repository: jasmine.SpyObj<BookmarkRepository> = jasmine.createSpyObj(BookmarkRepository, ['createBookmark'])

            repository.createBookmark(new BookmarkRequest());
            const expectedResult = repository.createBookmark.calls.argsFor(0);

            expect(expectedResult[0]).toBeInstanceOf(BookmarkEntity);
        });

        it('should call a post method on httpClient', () => {
            repository.createBookmark(MOCK_BOOKMARKS[0]);

            expect(http.post).toHaveBeenCalled();
        });

        it('should return an Observable', () => {
            spyOn(repository, 'createBookmark').and.returnValue(of());

            const result = repository.createBookmark(new BookmarkRequest());

            expect(result).toBeInstanceOf(Observable);
        });

        it('should pass url and bookmark as input to httpClient post method', () => {
            const param = new BookmarkRequest();
            repository.createBookmark(param);

            expect(http.post).toHaveBeenCalled();
            expect(http.post).toHaveBeenCalledWith(repository['baseUrl'], param);

        });
    });

    describe('getBookmark', () => {
        let bookmark: BookmarkRequest;
        beforeEach(() => {
            bookmark = MOCK_BOOKMARKS[0];
        })

        it(`should accept an input of type string`, () => {
            const repository = jasmine.createSpyObj(BookmarkRepository, ['getBookmark'])

            repository.getBookmark(bookmark.id!);
            const expectedResult = repository.getBookmark.calls.argsFor(0);

            expect(expectedResult[0]).toBeInstanceOf(String);
        });

        it('should return an Observable', () => {
            spyOn(repository, 'getBookmark').and.returnValue(of());

            const result = repository.getBookmark(bookmark.id!);

            expect(result).toBeInstanceOf(Observable);
        });

        it('should call get method on httpClient', () => {
            repository.getBookmark(bookmark.id!);

            expect(http.get).toHaveBeenCalled();
        });

        it('should pass input as query string to httpClient get method', () => {
            repository.getBookmark(bookmark.id!);

            expect(http.get).toHaveBeenCalledWith(`${repository.baseUrl}?id=${bookmark.id}`)
        });

    });

    describe('updateBookmark', () => {
        let bookmark: BookmarkRequest;
        beforeEach(() => {
            bookmark = MOCK_BOOKMARKS[0];
        })
        it('should accept a string and boomark as inputs', () => {
            const repository = jasmine.createSpyObj(BookmarkRepository, ['updateBookmark'])

            repository.updateBookmark(bookmark.id!, bookmark);
            const expectedResult = repository.updateBookmark.calls.argsFor(0);

            expect(expectedResult[0]).toBeInstanceOf(String);
            expect(expectedResult[1]).toEqual(jasmine.objectContaining(bookmark));
        });
        it('should return an Observable', () => {
            spyOn(repository, 'updateBookmark').and.returnValue(of());

            const result = repository.updateBookmark(bookmark.id!, bookmark);

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call put method on httpClient', () => {
            repository.updateBookmark(bookmark.id!, bookmark);

            expect(http.put).toHaveBeenCalled();
        });
        it('should pass input to put method of httpClient containing id, bookmark', () => {
            repository.updateBookmark(bookmark.id!, bookmark);

            expect(http.put).toHaveBeenCalledWith(`${repository.baseUrl}?bookmarkId=${bookmark.id}`, bookmark);
        });
    });

    describe('removeBookmark', () => {
        let bookmark: BookmarkRequest;
        beforeEach(() => {
            bookmark = MOCK_BOOKMARKS[0];
        })
        it('should accept input of type string', () => {
            const repository = jasmine.createSpyObj(BookmarkRepository, ['removeBookmark'])

            repository.removeBookmark(bookmark.id!);
            const expectedResult = repository.removeBookmark.calls.argsFor(0);

            expect(expectedResult[0]).toBeInstanceOf(String);
        });
        it('should call delete method on httpClient', () => {
            repository.removeBookmark(bookmark.id!);

            expect(http.delete).toHaveBeenCalled();
        });
        it('should pass id to delete method on httpClient', () => {
            repository.removeBookmark(bookmark.id!);

            expect(http.delete).toHaveBeenCalledWith(`${repository.baseUrl}?bookmarkId=${bookmark.id!}`);
        });
    });

});
