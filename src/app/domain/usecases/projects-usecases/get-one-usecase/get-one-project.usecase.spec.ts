import { Observable, of } from "rxjs";

import { Param } from "src/app/core/params/param.payload";
import { MOCK_PROJECT } from "src/app/data/datasources/remote/repo-implementations/project/project.repository.spec";
import { ProjectEntity } from "src/app/domain/entities";
import { IProjectRepository } from "src/app/domain/repositories/iproject.repository";

import { GetOneProjectUsecase } from "./get-one-project.usecase";

describe('GetOneProjectUsecase', () => {
    let usecase: GetOneProjectUsecase;
    let iProjectRepository: jasmine.SpyObj<IProjectRepository>;
    let project: ProjectEntity;

    beforeEach(() => {
        iProjectRepository = jasmine.createSpyObj(IProjectRepository, ['getProject']);
        usecase = new GetOneProjectUsecase(iProjectRepository);
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
        it('should accept Param as input', () => {
            let usecase: jasmine.SpyObj<GetOneProjectUsecase> = jasmine.createSpyObj(GetOneProjectUsecase, ['execute']);

            usecase.execute(new Param(project.id!));
            const args = usecase.execute.calls.argsFor(0);

            expect(args[0]).toBeInstanceOf(Param);
            expect(args[0]).toBeDefined;
            expect(args[0].payload).toEqual(jasmine.stringContaining(project.id!));
        })

        it('should return an Observable ', () => {
            spyOn(usecase, 'execute').and.returnValue(of())

            const result = usecase.execute(new Param(project.id!));

            expect(result).toBeInstanceOf(Observable);
        });

        it('should call iProjectRepository.getProject with param', () => {
            usecase.execute(new Param(project.id!));

            expect(usecase['iProjectRepository'].getProject).toHaveBeenCalled();
            expect(usecase['iProjectRepository'].getProject).toHaveBeenCalledWith(project.id!);
        });
    })
})
