import { HttpClient } from '@angular/common/http';
import { Provider } from "@angular/core";
import { GetManyPostUsecase } from './../domain/usecases/posts-usecases/get-many-posts.usecase';
import { GetOnePostUsecase } from './../domain/usecases/posts-usecases/get-one-post.usecase';
import { RemovePostUsecase } from './../domain/usecases/posts-usecases/remove-post.usecase';
import { UpdatePostUsecase } from './../domain/usecases/posts-usecases/update-post.usecase';
import { GetManyBookmarksUsecase } from './../domain/usecases/bookmark-usecases/get-many-bookmarks.usecase';
import { DataBookmarkFactory, DataPostFactory, DataProjectFactory } from './data.factory';
import { CreateBookmarkUsecase } from "../domain/usecases/bookmark-usecases/create-bookmark.usecase";
import { BookmarkRepository } from './datasources/remote/repo-implementations/bookmark.repository';
import { PostRepository } from './datasources/remote/repo-implementations/post.repository';
import { CreatePostUsecase } from '../domain/usecases/posts-usecases/create-post.usecase';
import { ProjectRepository } from './datasources/remote/repo-implementations/project.repository';
import { CreateProjectUsecase } from '../domain/usecases/projects-usecases/create-project.usecase';
import { GetManyProjectUsecase } from '../domain/usecases/projects-usecases/get-many-project.usecase';
import { UpdateProjectUsecase } from '../domain/usecases/projects-usecases/update-project.usecase';
import { RemoveProjectUsecase } from '../domain/usecases/projects-usecases/remove-project.usecase';
import { GetOneProjectUsecase } from '../domain/usecases/projects-usecases/get-one-project.usecase';

const dataFactory = new DataBookmarkFactory();
const postDataFactory = new DataPostFactory();
const projectDataFactory = new DataProjectFactory()

export const DATA_BOOKMARK_IOC: Provider[] = [
    {
        deps: [HttpClient],
        provide: BookmarkRepository,
        useFactory: (http: HttpClient) => dataFactory.getRepository(http)
    },

    {
        deps: [BookmarkRepository],
        provide: CreateBookmarkUsecase,
        useFactory: (repository: BookmarkRepository) => dataFactory.getCreateBookmarkUsecase(repository),
    },

    {
        deps: [BookmarkRepository],
        provide: GetManyBookmarksUsecase,
        useFactory: (repository: BookmarkRepository) => dataFactory.getManyBookmarkUsecase(repository),
    },
];

export const DATA_POST_IOC: Provider[] = [
    {
        deps: [HttpClient],
        provide: PostRepository,
        useFactory: (http: HttpClient) => postDataFactory.getRepository(http)
    },

    {
        deps: [PostRepository],
        provide: GetManyPostUsecase,
        useFactory: (repository: PostRepository) => postDataFactory.getManyPostsUsecase(repository),
    },

    {
        deps: [PostRepository],
        provide: CreatePostUsecase,
        useFactory: (repository: PostRepository) => postDataFactory.getCreatePostUsecase(repository),
    },

    {
        deps: [PostRepository],
        provide: UpdatePostUsecase,
        useFactory: (repository: PostRepository) => postDataFactory.getUpdatePostUsecase(repository),
    },

    {
        deps: [PostRepository],
        provide: RemovePostUsecase,
        useFactory: (repository: PostRepository) => postDataFactory.getRemovePostUsecase(repository),
    },

    {
        deps: [PostRepository],
        provide: GetOnePostUsecase,
        useFactory: (repository: PostRepository) => postDataFactory.getGetOnePostUsecase(repository),
    },
];

export const DATA_PROJECT_IOC: Provider[] = [
    {
        deps: [HttpClient],
        provide: ProjectRepository,
        useFactory: (http: HttpClient) => projectDataFactory.getRepository(http)
    },

    {
        deps: [ProjectRepository],
        provide: GetManyProjectUsecase,
        useFactory: (repository: ProjectRepository) => projectDataFactory.getGetManyProjectUsecase(repository),
    },

    {
        deps: [ProjectRepository],
        provide: CreateProjectUsecase,
        useFactory: (repository: ProjectRepository) => projectDataFactory.getCreateProjectUsecase(repository),
    },

    {
        deps: [ProjectRepository],
        provide: UpdateProjectUsecase,
        useFactory: (repository: ProjectRepository) => projectDataFactory.getUpdateProjectUsecase(repository),
    },

    {
        deps: [ProjectRepository],
        provide: RemoveProjectUsecase,
        useFactory: (repository: ProjectRepository) => projectDataFactory.getRemoveProjectUsecase(repository),
    },

    {
        deps: [ProjectRepository],
        provide: GetOneProjectUsecase,
        useFactory: (repository: ProjectRepository) => projectDataFactory.getGetOneProjectUsecase(repository),
    },
];
