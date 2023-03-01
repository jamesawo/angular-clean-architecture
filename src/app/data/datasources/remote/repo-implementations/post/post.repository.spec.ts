import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';

import { PostEntity } from 'src/app/domain/entities';

import { PostRepository } from "./post.repository";

const MOCK_POSTS: PostEntity[] = [
    {
        "id": "63fbd9ad06fa5e3704bc8359",
        "title": "Edited Post Title",
        "date": "2023-02-26",
        "tags": ["Reactjs", " Nextjs", " Typescript"],
        "content": "New Blog Post Edited",
        "author": "James Aworo", "excerpt": "Sending in your resumes but sadly they have been rejected?",
    },
    {
        "id": "63fcc626bfa348c5716b41a8",
        "title": "Post 1",
        "date": "2023-02-01",
        "tags": ["Reactjs", " Nextjs", " Typescript"],
        "content": "New Post",
        "author": "James Aworo",
        "excerpt": "This is an excerpt from my first blog post",
    }
]

describe(('PostRepository'), () => {

    let repository: PostRepository;
    let http: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        http = jasmine.createSpyObj(HttpClient, ['get', 'post', 'put', 'delete']);
        repository = new PostRepository(http);
    })

    describe('postRepository', () => {
        it('should be created', () => {
            expect(repository).toBeTruthy();
        })

        it('should receive httpClient as dependency', () => {
            expect(repository['http']).toBeTruthy();
            expect(repository['http']).toEqual(http);
        })
    })

    describe('baseUrl', () => {
        it('should not be empty', () => {
            expect(repository.baseUrl).toBeTruthy();
            expect(typeof repository.baseUrl).toEqual('string');
        });
        it(`should contain 'posts'`, () => {
            expect(repository.baseUrl).toContain('posts');
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
        it('should pass an input of string to get method on httpClient', () => {
            repository.all();

            expect(http.get).toHaveBeenCalledWith(repository.baseUrl);
        })
        it('should return an Observable of BookmarkEntity[]', () => {
            const expectedResult: Observable<PostEntity[]> = of(MOCK_POSTS);
            spyOn(repository, 'all').and.returnValue(expectedResult);

            const actualResult = repository.all();

            expect(actualResult).toEqual(expectedResult);
            expect(actualResult).toBeInstanceOf(Observable);
        });
    });

    describe('createPost', () => {
        let post: PostEntity

        beforeEach(() => {
            post = MOCK_POSTS[0];
        })

        it(`should accept an input of type 'PostEntity'`, () => {

            const repository: jasmine.SpyObj<PostRepository> = jasmine.createSpyObj(PostRepository, ['createPost']);

            repository.createPost(post);
            const argArry = repository.createPost.calls.argsFor(0);

            expect(argArry[0]).toEqual(post);
            expect(argArry[0]).toEqual(jasmine.objectContaining(post));
        });

        it('should call post method on httpClient', () => {
            repository.createPost(post);

            expect(http.post).toHaveBeenCalled();
        });

        it('should return an Observable', () => {
            spyOn(repository, 'createPost').and.returnValue(of())
            const result = repository.createPost(post);

            expect(result).toBeInstanceOf(Observable);
        });

        it('should pass url and post to httpClient post method', () => {
            repository.createPost(post);

            expect(http.post).toHaveBeenCalledWith(repository.baseUrl, post);
        });
    });

    describe('getPost', () => {

        let post: PostEntity

        beforeEach(() => {
            post = MOCK_POSTS[0];
        })

        it(`should accept an input of type string`, () => {
            const repository = jasmine.createSpyObj(PostRepository, ['getPost'])

            repository.getPost(post.id!);
            const expectedResult = repository.getPost.calls.argsFor(0);

            expect(expectedResult[0]).toBeInstanceOf(String);
        });

        it('should return an Observable of PostEntity', () => {
            spyOn(repository, 'getPost').and.returnValue(of());

            const result = repository.getPost(post.id!);

            expect(result).toBeInstanceOf(Observable);
        });

        it('should call get method on httpClient ', () => {
            repository.getPost(post.id!);

            expect(http.get).toHaveBeenCalled();
        });

        it('should pass an input to httpClient get method', () => {
            repository.getPost(post.id!);

            expect(http.get).toHaveBeenCalledWith(`${repository.baseUrl}?id=${post.id}`)

        });

    });

    describe('updatePost', () => {

        let post: PostEntity

        beforeEach(() => {
            post = MOCK_POSTS[0];
        })

        it('should accept id and post as inputs', () => {
            const repository = jasmine.createSpyObj(PostRepository, ['updatePost'])

            repository.updatePost(post.id!, post);
            const expectedResult = repository.updatePost.calls.argsFor(0);

            expect(expectedResult[0]).toBeInstanceOf(String);
            expect(expectedResult[1]).toEqual(jasmine.objectContaining(post));

        });

        it('should return an Observable of Result', () => {
            spyOn(repository, 'updatePost').and.returnValue(of());

            const result = repository.updatePost(post.id!, post);

            expect(result).toBeInstanceOf(Observable);
        });

        it('should call put method on httpClient', () => {
            repository.updatePost(post.id!, post);

            expect(http.put).toHaveBeenCalled();
        });

        it('should pass input to put method of httpClient containing id, post', () => {
            repository.updatePost(post.id!, post);

            expect(http.put).toHaveBeenCalledWith(`${repository.baseUrl}?postId=${post.id}`, post);

        });

    });

    describe('removePost', () => {
        let post: PostEntity

        beforeEach(() => {
            post = MOCK_POSTS[0];
        })

        it('should accept a valid input of type string', () => {
            let repository: jasmine.SpyObj<PostRepository> = jasmine.createSpyObj(PostRepository, ['removePost']);

            repository.removePost(post.id!);
            const args = repository.removePost.calls.argsFor(0);

            expect(repository.removePost).toHaveBeenCalledWith(post.id!);
            expect(args[0]).toBeInstanceOf(String);
            expect(args[0]).toBeDefined();
        });

        it('should call delete method on httpClient', () => {
            repository.removePost(post.id!);

            expect(http.delete).toHaveBeenCalled();
        });

        it('should pass id to delete method on httpClient', () => {
            repository.removePost(post.id!);

            expect(http.delete).toHaveBeenCalledWith(jasmine.stringContaining(post.id!));
        });
    });

});
