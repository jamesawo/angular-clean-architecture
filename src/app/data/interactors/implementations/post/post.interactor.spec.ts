import { PostRequest } from 'src/app/data/requests/posts.request';
import { PostInteractor } from './post.interactor';
import { CreatePostUsecase } from "src/app/domain/usecases/posts-usecases/create-post.usecase";
import { GetManyPostUsecase } from "src/app/domain/usecases/posts-usecases/get-many-posts.usecase";
import { GetOnePostUsecase } from "src/app/domain/usecases/posts-usecases/get-one-post.usecase";
import { RemovePostUsecase } from "src/app/domain/usecases/posts-usecases/remove-post.usecase";
import { UpdatePostUsecase } from "src/app/domain/usecases/posts-usecases/update-post.usecase";
import { MOCK_POSTS } from 'src/app/data/datasources/remote/repo-implementations/post/post.repository.spec';
import { IPostInteractor } from '../../contracts/ipost.interactor';
import { Observable, of } from 'rxjs';
import { Param } from 'src/app/core/params/param.payload';
import { NoParam } from 'src/app/core/params/no-param.paylod';

fdescribe('PostInteractor', () => {

    let interactor: PostInteractor;
    let getOnePostUsecase: jasmine.SpyObj<GetOnePostUsecase>;
    let getManyPostUsecase: jasmine.SpyObj<GetManyPostUsecase>;
    let removePostUsecase: jasmine.SpyObj<RemovePostUsecase>;
    let updatePostUsecase: jasmine.SpyObj<UpdatePostUsecase>;
    let createPostUsecase: jasmine.SpyObj<CreatePostUsecase>;
    let post: PostRequest;

    beforeEach(() => {

        getOnePostUsecase = jasmine.createSpyObj(GetOnePostUsecase, ['execute']);
        getManyPostUsecase = jasmine.createSpyObj(GetManyPostUsecase, ['execute']);
        removePostUsecase = jasmine.createSpyObj(RemovePostUsecase, ['execute']);
        updatePostUsecase = jasmine.createSpyObj(UpdatePostUsecase, ['execute']);
        createPostUsecase = jasmine.createSpyObj(CreatePostUsecase, ['execute']);


        interactor = new PostInteractor(
            getOnePostUsecase,
            getManyPostUsecase,
            removePostUsecase,
            updatePostUsecase,
            createPostUsecase,
        );
        post = MOCK_POSTS[0];
    })


    describe('constructor', () => {
        it('should be created', () => {
            expect(interactor).toBeTruthy();
        });
        it('should be an instance of IPostInteractor', () => {
            expect(interactor).toBeInstanceOf(IPostInteractor);
        });
        it('should be created with dependencies', () => {
            expect(interactor['getOnePostUsecase']).toBeTruthy();
            expect(interactor['getManyPostUsecase']).toBeTruthy();
            expect(interactor['removePostUsecase']).toBeTruthy();
            expect(interactor['createPostUsecase']).toBeTruthy();
        });
    })

    describe('save', () => {
        it('should accept a post as input', () => {
            let interactor: jasmine.SpyObj<PostInteractor> = jasmine.createSpyObj(PostInteractor, ['savePost']);

            interactor.savePost(post);
            const args = interactor.savePost.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.objectContaining(post));
        });
        it('should call update if post.id is defined', () => {
            spyOn(interactor, 'update');

            interactor.update(post);

            expect(interactor.update).toHaveBeenCalled();
        });
        it('should call create if post.id is NOT defined', () => {
            post._id = undefined;
            spyOn(interactor, 'create');

            interactor.savePost(post);

            expect(interactor.create).toHaveBeenCalled();
        });
        it('should return an Observable', () => {
            spyOn(interactor, 'savePost').and.returnValue(of());

            const result = interactor.savePost(post);

            expect(result).toBeInstanceOf(Observable);
        });
    })

    describe('create', () => {
        it('should receive a post as input', () => {
            let interactor: jasmine.SpyObj<PostInteractor> = jasmine.createSpyObj(PostInteractor, ['create']);

            interactor.create(post);
            const args = interactor.create.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.objectContaining(post));
        });
        it('should call createPostUsecase.execute method', () => {
            interactor.create(post);

            expect(createPostUsecase.execute).toHaveBeenCalled();
        });
        it('should return an Observable', () => {
            spyOn(interactor, 'create').and.returnValue(of());

            const result = interactor.create(post);

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call createPostUsecase.execute with Param as input', () => {
            interactor.create(post);

            expect(createPostUsecase.execute).toHaveBeenCalledWith(new Param(post));
        })
    })

    describe('getMany', () => {
        it('should call getManyPostUsecase.execute method', () => {
            interactor.getMany();

            expect(getManyPostUsecase.execute).toHaveBeenCalled();
        });
        it('should call getManyPostUsecase with NoParam as input', () => {
            interactor.getMany();

            expect(getManyPostUsecase.execute).toHaveBeenCalledWith(new NoParam());

        })
        it('should return an Observable', () => {
            spyOn(interactor, 'create').and.returnValue(of());

            const result = interactor.create(post);

            expect(result).toBeInstanceOf(Observable);
        });
    })

    describe('getOne', () => {
        it('should receive an id:string as input', () => {
            let interactor: jasmine.SpyObj<PostInteractor> = jasmine.createSpyObj(PostInteractor, ['getOne']);

            interactor.getOne(post.id!);
            const args = interactor.getOne.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.stringContaining(post.id!));

        })
        it('should return an Observable', () => {
            spyOn(interactor, 'getOne').and.returnValue(of());

            const result = interactor.getOne(post._id!);

            expect(result).toBeInstanceOf(Observable);
        })
        it('should call getOnePostUsecase.execute with Param', () => {
            interactor.getOne(post.id!);

            expect(getOnePostUsecase.execute).toHaveBeenCalledWith(new Param(post.id!));

        })
    })

    describe('update', () => {
        it('should accept a post as input', () => {
            let interactor: jasmine.SpyObj<PostInteractor> = jasmine.createSpyObj(PostInteractor, ['update']);

            interactor.update(post);
            const args = interactor.update.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.objectContaining(post));
        })
        it('should return an Observable', () => {
            spyOn(interactor, 'update').and.returnValue(of());

            const result = interactor.update(post);

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call updatePostUsecase.execute with Param', () => {
            interactor.update(post);

            expect(updatePostUsecase.execute).toHaveBeenCalledWith(new Param({ ...post, id: post._id }));
        })
    })

    describe('delete', () => {
        it('should accept a string as input', () => {
            let interactor: jasmine.SpyObj<PostInteractor> = jasmine.createSpyObj(PostInteractor, ['delete']);

            interactor.delete(post.id!);
            const args = interactor.delete.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.stringContaining(post.id!));

        });
        it('should return an Observable', () => {
            spyOn(interactor, 'delete').and.returnValue(of());

            const result = interactor.delete(post.id!);

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call removePostUsecase.execute with Param', () => {
            interactor.delete(post.id!);

            expect(removePostUsecase.execute).toHaveBeenCalledWith(new Param(post.id!));

        });
    })
})
