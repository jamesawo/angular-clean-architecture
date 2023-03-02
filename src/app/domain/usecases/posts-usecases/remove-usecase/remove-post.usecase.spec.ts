import { Observable, of } from 'rxjs';

import { Param } from 'src/app/core/params/param.payload';

import { PostEntity } from '../../../entities';
import { IPostRepository } from '../../../repositories/ipost.repository';
import { MOCK_POSTS } from '../../../../data/datasources/remote/repo-implementations/post/post.repository.spec';

import { RemovePostUsecase } from './remove-post.usecase';

describe('GetOnePostUsecase', () => {
    let usecase: RemovePostUsecase;
    let iPostRepository: jasmine.SpyObj<IPostRepository>;
    let post: PostEntity;

    beforeEach(() => {
        iPostRepository = jasmine.createSpyObj(IPostRepository, ['removePost']);
        usecase = new RemovePostUsecase(iPostRepository);
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
        it('should accept a Param<string> as input', () => {
            let usecase: jasmine.SpyObj<RemovePostUsecase> = jasmine.createSpyObj(RemovePostUsecase, ['execute']);

            usecase.execute(new Param(post.id!));
            const args = usecase.execute.calls.argsFor(0);

            expect(args[0]).toBeInstanceOf(Param);
            expect(args[0]).toBeDefined;
            expect(args[0]).toEqual(jasmine.objectContaining(new Param(post.id!)));
        })

        it('should return an Observable ', () => {
            spyOn(usecase, 'execute').and.returnValue(of())

            const result = usecase.execute(new Param(post.id!));

            expect(result).toBeInstanceOf(Observable);
        });

        it('should call iPostRepository.getPost with param', () => {
            usecase.execute(new Param(post.id!));

            expect(usecase['iPostRepository'].removePost).toHaveBeenCalled();
            expect(usecase['iPostRepository'].removePost).toHaveBeenCalledWith(post.id!);
        });
    })
})
