import { Result } from 'src/app/core/types/types';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProjectEntity } from 'src/app/domain/entities';

import { ProjectRepository } from "./project.repository";

const MOCK_PROJECT: ProjectEntity[] = [
    {
        "id": "63fcc111ae8000e232beee08",
        "title": "New Project 15",
        "description": "First time users discount",
        "features": [],
        "modules": [],
        "industries": [],
        "tools": [],
        "imageUrl": '',
        "action": {
            "link": "http://project.link",
            "title": "View Project"
        },
    },
];

describe('ProjectRepository', () => {

    let repository: ProjectRepository;
    let http: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        http = jasmine.createSpyObj(HttpClient, ['get', 'delete', 'post', 'put']);

        repository = new ProjectRepository(http);
    })


    describe('projectRepository', () => {
        it('should be created', () => {
            expect(repository).toBeTruthy();
        });

        it('should be given an httpClient as dependency', () => {
            expect(repository['http']).toBeTruthy();
        })
    })


    describe('baseUrl', () => {
        it('should not be empty', () => {
            expect(repository.baseUrl).toBeDefined();
        });

        it(`should contain 'projects'`, () => {
            expect(repository.baseUrl).toContain('projects');
        });
    });

    describe('all', () => {
        it('should NOT accept any input', () => {
            spyOn(repository, 'all');

            repository.all();

            expect(repository.all).toHaveBeenCalledWith();
        });

        it('should call get method on httpClient', () => {
            repository.all();

            expect(http.get).toHaveBeenCalled();
        });

        it('should pass an input to http.get', () => {
            repository.all();

            expect(http.get).toHaveBeenCalledWith(jasmine.stringContaining(repository.baseUrl));
        })

        it('should return an Observable', () => {
            let repository: jasmine.SpyObj<ProjectRepository> = jasmine.createSpyObj(ProjectRepository, ['all']);
            repository.all.and.returnValue(of(MOCK_PROJECT));

            const expectedResult = repository.all();

            expect(expectedResult).toBeInstanceOf(Observable);
        });
    });

    describe('createProject', () => {
        let project: ProjectEntity;

        beforeEach(() => {
            project = MOCK_PROJECT[0];
        })

        it(`should accept a input of type 'ProjectEntity'`, () => {
            let repository: jasmine.SpyObj<ProjectRepository> = jasmine.createSpyObj(ProjectRepository, ['createProject']);

            repository.createProject(project);
            const arg = repository.createProject.calls.argsFor(0);

            expect(arg[0]).toEqual(jasmine.objectContaining(project));

        });
        it('should call a post method on httpClient', () => {
            repository.createProject(project);

            expect(http.post).toHaveBeenCalled();
        });
        it('should return an Observable', () => {
            spyOn(repository, 'createProject').and.returnValue(of());
            const result = repository.createProject(project);

            expect(result).toBeInstanceOf(Observable);
        });
        it('should pass url and post as input to http.post method', () => {
            repository.createProject(project);

            expect(http.post).toHaveBeenCalledWith(repository.baseUrl, project);
        });
    });

    describe('getProject', () => {

        let project: ProjectEntity;

        beforeEach(() => {
            project = MOCK_PROJECT[0];
        })

        it(`should accept an input of type string`, () => {
            let repository: jasmine.SpyObj<ProjectRepository> = jasmine.createSpyObj(ProjectRepository, ['getProject']);

            repository.getProject(project.id!);
            const arg = repository.getProject.calls.argsFor(0);

            expect(typeof arg[0]).toBe('string');
        });

        it('should return an Observable', () => {
            spyOn(repository, 'getProject').and.returnValue(of());

            const result = repository.getProject(project.id!);

            expect(result).toBeInstanceOf(Observable);
        });

        it('should call get method on httpClient ', () => {
            repository.getProject(project.id!);

            expect(http.get).toHaveBeenCalled();
        });
        it('should pass an input to httpClient get method', () => {
            repository.getProject(project.id!);

            expect(http.get).toHaveBeenCalledWith(jasmine.stringContaining(project.id!));
        });

    });

    describe('updateProject', () => {
        let project: ProjectEntity;

        beforeEach(() => {
            project = MOCK_PROJECT[0];
        });

        it('should accept 2 inputs of type string and ProjectEntity', () => {
            let repository: jasmine.SpyObj<ProjectRepository> = jasmine.createSpyObj(ProjectRepository, ['updateProject']);

            repository.updateProject(project.id!, project);
            const args = repository.updateProject.calls.argsFor(0);

            expect(typeof args[0]).toEqual('string');
            expect(args[1]).toEqual(jasmine.objectContaining(project));
        });
        it('should return an Observable', () => {
            spyOn(repository, 'updateProject').and.returnValue(of());

            const result = repository.updateProject(project.id!, project);

            expect(result).toBeInstanceOf(Observable);
        });
        it('should call put method on httpClient', () => {
            repository.updateProject(project.id!, project);

            expect(http.put).toHaveBeenCalled();
        });
        it('should pass 2 inputs to http.put method', () => {
            repository.updateProject(project.id!, project);

            expect(http.put).toHaveBeenCalledWith(jasmine.stringContaining(project.id!), jasmine.objectContaining(project));
        });

    });

    describe('removeProject', () => {
        let project: ProjectEntity;

        beforeEach(() => {
            project = MOCK_PROJECT[0];
        });

        it('should accept input of type string', () => {
            let repository: jasmine.SpyObj<ProjectRepository> = jasmine.createSpyObj(ProjectRepository, ['removeProject']);

            repository.removeProject(project.id!);
            const args = repository.removeProject.calls.argsFor(0);

            expect(typeof args[0]).toEqual('string');
        });
        it('should call delete method on httpClient', () => {
            repository.removeProject(project.id!);

            expect(http.delete).toHaveBeenCalled();
        });
        it('should pass id to http.delete method ', () => {
            repository.removeProject(project.id!);

            expect(http.delete).toHaveBeenCalledWith(jasmine.stringContaining(project.id!));
        });
        it('should return an Observable', () => {
            spyOn(repository, 'removeProject').and.returnValue(of());

            const result = repository.removeProject(project.id!);

            expect(result).toBeInstanceOf(Observable);
        });
    });

});
