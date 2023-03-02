import { Observable, of } from "rxjs";

import { Param } from "src/app/core/params/param.payload";
import { ProjectEntity } from "src/app/domain/entities";
import { IProjectRepository } from "src/app/domain/repositories/iproject.repository";

import { MOCK_PROJECT } from './../../../../data/datasources/remote/repo-implementations/project/project.repository.spec';

import { CreateProjectUsecase } from "./create-project.usecase";

describe('CreateProjectUsecase', () => {
    let usecase: CreateProjectUsecase;
    let iProjectRepository: jasmine.SpyObj<IProjectRepository>;
    let project: ProjectEntity;

    beforeEach(() => {
        iProjectRepository = jasmine.createSpyObj(IProjectRepository, ['createProject']);
        usecase = new CreateProjectUsecase(iProjectRepository);
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
        it('should accept Param<ProjectEntity> as input', () => {
            let usecase: jasmine.SpyObj<CreateProjectUsecase> = jasmine.createSpyObj(CreateProjectUsecase, ['execute']);

            usecase.execute(new Param(project));
            const args = usecase.execute.calls.argsFor(0);

            expect(args[0]).toBeInstanceOf(Param);
            expect(args[0].payload).toBeDefined;
            expect(args[0].payload).toEqual(jasmine.objectContaining(project));
        })

        it('should return an Observable ', () => {
            spyOn(usecase, 'execute').and.returnValue(of())

            const result = usecase.execute(new Param(project));

            expect(result).toBeInstanceOf(Observable);

        });

        it('should call iProjectRepository.createProject with param', () => {
            usecase.execute(new Param(project));

            expect(usecase['iProjectRepository'].createProject).toHaveBeenCalled();
            expect(usecase['iProjectRepository'].createProject).toHaveBeenCalledWith(project);
        });
    })
});
