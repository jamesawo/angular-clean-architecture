import { Observable, of } from 'rxjs';

import { Param } from 'src/app/core/params/param.payload';

import { PostEntity } from '../../../entities';
import { IPostRepository } from '../../../repositories/ipost.repository';
import { MOCK_POSTS } from './../../../../data/datasources/remote/repo-implementations/post/post.repository.spec';

import { CreatePostUsecase } from './create-post.usecase';


describe('CreatePostUsecase', () => {
    let usecase: CreatePostUsecase;
    let ipostRepository: jasmine.SpyObj<IPostRepository>;
    let post: PostEntity;

    beforeEach(() => {
        ipostRepository = jasmine.createSpyObj(IPostRepository, ['createPost']);
        usecase = new CreatePostUsecase(ipostRepository);
        post = MOCK_POSTS[0];
    });

    describe('constructor', () => {
        it('should be created', () => {
            expect(usecase).toBeTruthy();
        })
        it('should be created with dependency', () => {
            expect(usecase['ipostRepository']).toBeTruthy();
        })
    })

    describe('execute', () => {
        it('should accept Param<PostEntity> as input', () => {
            let usecase: jasmine.SpyObj<CreatePostUsecase> = jasmine.createSpyObj(CreatePostUsecase, ['execute']);

            usecase.execute(new Param(post));
            const args = usecase.execute.calls.argsFor(0);

            expect(args[0]).toBeInstanceOf(Param);
            expect(args[0].payload).toBeDefined;
            expect(args[0].payload).toEqual(jasmine.objectContaining(post));
        })

        it('should return an Observable ', () => {
            spyOn(usecase, 'execute').and.returnValue(of())

            const result = usecase.execute(new Param(post));

            expect(result).toBeInstanceOf(Observable);

        });

        it('should call ipostRepository.createPost with param', () => {
            usecase.execute(new Param(post));

            expect(usecase['ipostRepository'].createPost).toHaveBeenCalled();
            expect(usecase['ipostRepository'].createPost).toHaveBeenCalledWith(post);
        });
    })
})
