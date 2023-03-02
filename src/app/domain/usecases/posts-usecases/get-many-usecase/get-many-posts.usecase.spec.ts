import { Observable, of } from 'rxjs';

import { Param } from 'src/app/core/params/param.payload';

import { PostEntity } from '../../../entities';
import { IPostRepository } from '../../../repositories/ipost.repository';
import { NoParam } from './../../../../core/params/no-param.paylod';
import { MOCK_POSTS } from '../../../../data/datasources/remote/repo-implementations/post/post.repository.spec';

import { GetManyPostUsecase } from './get-many-posts.usecase';

describe('GetManyPostUsecase', () => {
    let usecase: GetManyPostUsecase;
    let iPostRepository: jasmine.SpyObj<IPostRepository>;
    let post: PostEntity;

    beforeEach(() => {
        iPostRepository = jasmine.createSpyObj(IPostRepository, ['all']);
        usecase = new GetManyPostUsecase(iPostRepository);
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
        it('should accept NoParam as input', () => {
            let usecase: jasmine.SpyObj<GetManyPostUsecase> = jasmine.createSpyObj(GetManyPostUsecase, ['execute']);

            usecase.execute(new NoParam());
            const args = usecase.execute.calls.argsFor(0);

            expect(args[0]).toBeInstanceOf(NoParam);
            expect(args[0]).toBeDefined;
            expect(args[0]).toEqual(jasmine.objectContaining(new NoParam()));
        })

        it('should return an Observable ', () => {
            spyOn(usecase, 'execute').and.returnValue(of())

            const result = usecase.execute(new Param(post));

            expect(result).toBeInstanceOf(Observable);

        });

        it('should call iPostRepository.all with no param', () => {
            usecase.execute(new NoParam());

            expect(usecase['iPostRepository'].all).toHaveBeenCalled();
            expect(usecase['iPostRepository'].all).toHaveBeenCalledWith();
        });
    })
})
