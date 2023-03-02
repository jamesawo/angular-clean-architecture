import { Observable, of } from "rxjs";
import { Param } from "src/app/core/params/param.payload";
import { MOCK_PROJECT } from "src/app/data/datasources/remote/repo-implementations/project/project.repository.spec";
import { ProjectEntity } from "src/app/domain/entities";
import { IProjectRepository } from "src/app/domain/repositories/iproject.repository";
import { UpdateProjectUsecase } from "./update-project.usecase";

describe('UpdateProjectUsecase', () => {
    let usecase: UpdateProjectUsecase;
    let iProjectRepository: jasmine.SpyObj<IProjectRepository>;
    let project: ProjectEntity;

    beforeEach(() => {
        iProjectRepository = jasmine.createSpyObj(IProjectRepository, ['updateProject']);
        usecase = new UpdateProjectUsecase(iProjectRepository);
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
            let usecase: jasmine.SpyObj<UpdateProjectUsecase> = jasmine.createSpyObj(UpdateProjectUsecase, ['execute']);

            usecase.execute(new Param(project));
            const args = usecase.execute.calls.argsFor(0);

            expect(args[0]).toBeInstanceOf(Param);
            expect(args[0]).toBeDefined;
            expect(args[0].payload).toEqual(jasmine.objectContaining(project));
        })

        it('should return an Observable ', () => {
            spyOn(usecase, 'execute').and.returnValue(of())

            const result = usecase.execute(new Param(project));

            expect(result).toBeInstanceOf(Observable);
        });

        it('should call iProjectRepository.updateProject with param', () => {
            const { id, ...rest } = project;
            usecase.execute(new Param(project));

            expect(usecase['iProjectRepository'].updateProject).toHaveBeenCalled();
            expect(usecase['iProjectRepository'].updateProject).toHaveBeenCalledWith(id!, rest);
        });
    })
})
