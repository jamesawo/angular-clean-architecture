import { Observable, of } from 'rxjs';
import { NoParam } from 'src/app/core/params/no-param.paylod';
import { Param } from 'src/app/core/params/param.payload';
import { MOCK_PROJECT } from 'src/app/data/datasources/remote/repo-implementations/project/project.repository.spec';
import { ProjectRequest } from 'src/app/data/requests/project.request';
import { CreateProjectUsecase } from "src/app/domain/usecases/projects-usecases/create-usecase/create-project.usecase";
import { GetManyProjectUsecase } from "src/app/domain/usecases/projects-usecases/get-many-usecase/get-many-project.usecase";
import { GetOneProjectUsecase } from "src/app/domain/usecases/projects-usecases/get-one-usecase/get-one-project.usecase";
import { RemoveProjectUsecase } from "src/app/domain/usecases/projects-usecases/remove-usecase/remove-project.usecase";
import { UpdateProjectUsecase } from "src/app/domain/usecases/projects-usecases/update-usecase/update-project.usecase";
import { IProjectInteractor } from '../../contracts/iproject.interactor';
import { ProjectInteractor } from "./project.interactor";

describe('ProjectInteractor', () => {

    let getOneProjectUsecase: jasmine.SpyObj<GetOneProjectUsecase>;
    let getManyProjectUsecase: jasmine.SpyObj<GetManyProjectUsecase>;
    let removeProjectUsecase: jasmine.SpyObj<RemoveProjectUsecase>;
    let updateProjectUsecase: jasmine.SpyObj<UpdateProjectUsecase>;
    let createProjectUsecase: jasmine.SpyObj<CreateProjectUsecase>;
    let interactor: ProjectInteractor;
    let project: ProjectRequest;

    beforeEach(() => {
        getOneProjectUsecase = jasmine.createSpyObj(GetOneProjectUsecase, ['execute']);
        getManyProjectUsecase = jasmine.createSpyObj(GetManyProjectUsecase, ['execute']);
        removeProjectUsecase = jasmine.createSpyObj(RemoveProjectUsecase, ['execute']);
        updateProjectUsecase = jasmine.createSpyObj(UpdateProjectUsecase, ['execute']);
        createProjectUsecase = jasmine.createSpyObj(CreateProjectUsecase, ['execute']);
        interactor = new ProjectInteractor(
            getOneProjectUsecase,
            getManyProjectUsecase,
            removeProjectUsecase,
            updateProjectUsecase,
            createProjectUsecase,
        );
        project = MOCK_PROJECT[0];
    })


    describe('constructor', () => {
        it('should be created', () => {
            expect(interactor).toBeTruthy();
        });
        it('should be an instance of IProjectInteractor', () => {
            expect(interactor).toBeInstanceOf(IProjectInteractor);
        });
        it('should be created with dependencies', () => {
            expect(interactor['getOneProjectUsecase']).toBeTruthy();
            expect(interactor['getManyProjectUsecase']).toBeTruthy();
            expect(interactor['removeProjectUsecase']).toBeTruthy();
            expect(interactor['updateProjectUsecase']).toBeTruthy();
            expect(interactor['createProjectUsecase']).toBeTruthy();
        });
    })

    describe('save', () => {
        it('should accept a project as input', () => {
            let interactor: jasmine.SpyObj<ProjectInteractor> = jasmine.createSpyObj(ProjectInteractor, ['save']);

            interactor.save(project);
            const args = interactor.save.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.objectContaining(project));
        });
        it('should call update if project.id is defined', () => {
            spyOn(interactor, 'update');

            interactor.update(project);

            expect(interactor.update).toHaveBeenCalled();
        });
        it('should call create if project.id is NOT defined', () => {
            project._id = undefined;
            spyOn(interactor, 'create');

            interactor.save(project);

            expect(interactor.create).toHaveBeenCalled();
        });
        it('should return an Observable', () => {
            spyOn(interactor, 'save').and.returnValue(of());

            const result = interactor.save(project);

            expect(result).toBeInstanceOf(Observable);
        });
    })

    describe('create', () => {
        it('should receive a project as input', () => {
            let interactor: jasmine.SpyObj<ProjectInteractor> = jasmine.createSpyObj(ProjectInteractor, ['create']);

            interactor.create(project);
            const args = interactor.create.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.objectContaining(project));
        });
        it('should call createProjectUsecase.execute method', () => {
            interactor.create(project);

            expect(createProjectUsecase.execute).toHaveBeenCalled();
        });
        it('should return an Observable', () => {
            spyOn(interactor, 'create').and.returnValue(of());

            const result = interactor.create(project);

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call createPostUsecase.execute with Param as input', () => {
            interactor.create(project);

            expect(createProjectUsecase.execute).toHaveBeenCalledWith(new Param(project));
        })
    })

    describe('getMany', () => {
        it('should call getManyProjectUsecase.execute method', () => {
            interactor.getMany();

            expect(getManyProjectUsecase.execute).toHaveBeenCalled();
        });
        it('should call getManyProjectUsecase with NoParam as input', () => {
            interactor.getMany();
            expect(getManyProjectUsecase.execute).toHaveBeenCalledWith(new NoParam());
        })
        it('should return an Observable', () => {
            spyOn(interactor, 'create').and.returnValue(of());

            const result = interactor.create(project);

            expect(result).toBeInstanceOf(Observable);
        });
    })

    describe('getOne', () => {
        it('should receive a string as input', () => {
            let interactor: jasmine.SpyObj<ProjectInteractor> = jasmine.createSpyObj(ProjectInteractor, ['getOne']);

            interactor.getOne(project.id!);
            const args = interactor.getOne.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.stringContaining(project.id!));
        })
        it('should return an Observable', () => {
            spyOn(interactor, 'getOne').and.returnValue(of());

            const result = interactor.getOne(project._id!);

            expect(result).toBeInstanceOf(Observable);
        })
        it('should call getOneProjectUsecase.execute with Param', () => {
            interactor.getOne(project.id!);

            expect(getOneProjectUsecase.execute).toHaveBeenCalledWith(new Param(project.id!));
        })
    })

    describe('update', () => {
        it('should accept a project as input', () => {
            let interactor: jasmine.SpyObj<ProjectInteractor> = jasmine.createSpyObj(ProjectInteractor, ['update']);

            interactor.update(project);
            const args = interactor.update.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.objectContaining(project));
        })
        it('should return an Observable', () => {
            spyOn(interactor, 'update').and.returnValue(of());

            const result = interactor.update(project);

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call updateProjectUsecase.execute with Param', () => {
            interactor.update(project);

            expect(updateProjectUsecase.execute).toHaveBeenCalledWith(new Param({ ...project, id: project._id }));

        })
    })

    describe('delete', () => {
        it('should accept a string as input', () => {
            let interactor: jasmine.SpyObj<ProjectInteractor> = jasmine.createSpyObj(ProjectInteractor, ['delete']);

            interactor.delete(project.id!);
            const args = interactor.delete.calls.argsFor(0);

            expect(args[0]).toEqual(jasmine.stringContaining(project.id!));
        });
        it('should return an Observable', () => {
            spyOn(interactor, 'delete').and.returnValue(of());

            const result = interactor.delete(project.id!);

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call removeProjectUsecase.execute with Param', () => {
            interactor.delete(project.id!);

            expect(removeProjectUsecase.execute).toHaveBeenCalledWith(new Param(project.id!));

        });
    })
})
