import { Observable, of } from "rxjs";

import { NoParam } from "src/app/core/params/no-param.paylod";
import { MOCK_PROJECT } from "src/app/data/datasources/remote/repo-implementations/project/project.repository.spec";
import { ProjectEntity } from "src/app/domain/entities";
import { IProjectRepository } from "src/app/domain/repositories/iproject.repository";

import { GetManyProjectUsecase } from "./get-many-project.usecase";

describe('GetManyProjectUsecase', () => {
    let usecase: GetManyProjectUsecase;
    let iProjectRepository: jasmine.SpyObj<IProjectRepository>;
    let project: ProjectEntity;

    beforeEach(() => {
        iProjectRepository = jasmine.createSpyObj(IProjectRepository, ['all']);
        usecase = new GetManyProjectUsecase(iProjectRepository);
        project = MOCK_PROJECT[0];
    });

    describe('constructor', () => {
        it('should be created', () => {
            expect(usecase).toBeTruthy();
        })
        it('should be created with dependency', () => {
            expect(usecase['iProjectRepository']).toBeTruthy();
        })
    })

    describe('execute', () => {
        it('should accept NoParam as input', () => {
            let usecase: jasmine.SpyObj<GetManyProjectUsecase> = jasmine.createSpyObj(GetManyProjectUsecase, ['execute']);

            usecase.execute(new NoParam());
            const args = usecase.execute.calls.argsFor(0);

            expect(args[0]).toBeInstanceOf(NoParam);
            expect(args[0]).toBeDefined;

        })

        it('should return an Observable ', () => {
            spyOn(usecase, 'execute').and.returnValue(of())

            const result = usecase.execute(new NoParam());

            expect(result).toBeInstanceOf(Observable);

        });

        it('should call iProjectRepository.all with no param', () => {
            usecase.execute(new NoParam());

            expect(usecase['iProjectRepository'].all).toHaveBeenCalled();
            expect(usecase['iProjectRepository'].all).toHaveBeenCalledWith();
        });
    })
});
