import { Observable, of } from 'rxjs';

import { Param } from 'src/app/core/params/param.payload';

import { PostEntity } from '../../../entities';
import { IPostRepository } from '../../../repositories/ipost.repository';
import { MOCK_POSTS } from '../../../../data/datasources/remote/repo-implementations/post/post.repository.spec';

import { UpdatePostUsecase } from './update-post.usecase';


describe('UpdatePostUsecase', () => {
    let usecase: UpdatePostUsecase;
    let iPostRepository: jasmine.SpyObj<IPostRepository>;
    let post: PostEntity;

    beforeEach(() => {
        iPostRepository = jasmine.createSpyObj(IPostRepository, ['updatePost']);
        usecase = new UpdatePostUsecase(iPostRepository);
        post = MOCK_POSTS[0];
    });

    describe('constructor', () => {
        it('should be created', () => {
            expect(usecase).toBeTruthy();
        })
        it('should be created with dependency', () => {
            expect(usecase['iPostRepository']).toBeTruthy();
        })
    })

    describe('execute', () => {
        it('should accept a Param<PostEntity> as input', () => {
            let usecase: jasmine.SpyObj<UpdatePostUsecase> = jasmine.createSpyObj(UpdatePostUsecase, ['execute']);

            usecase.execute(new Param(post));
            const args = usecase.execute.calls.argsFor(0);

            expect(args[0]).toBeInstanceOf(Param);
            expect(args[0]).toBeDefined;
            expect(args[0]).toEqual(jasmine.objectContaining(new Param(post)));
        })

        it('should return an Observable ', () => {
            spyOn(usecase, 'execute').and.returnValue(of())

            const result = usecase.execute(new Param(post));

            expect(result).toBeInstanceOf(Observable);
        });

        it('should call iPostRepository.updatePost with param', () => {
            const { id, ...rest } = post;

            usecase.execute(new Param(post));

            expect(usecase['iPostRepository'].updatePost).toHaveBeenCalled();
            expect(usecase['iPostRepository'].updatePost).toHaveBeenCalledWith(id!, rest);
        });
    })
})
