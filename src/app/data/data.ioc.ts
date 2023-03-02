import { ProjectInteractor } from './interactors/implementations/project/project.interactor';
import { IProjectInteractor } from 'src/app/data/interactors/contracts/iproject.interactor';
import { PostInteractor } from './interactors/implementations/post/post.interactor';
import { IPostInteractor } from 'src/app/data/interactors/contracts/ipost.interactor';
import { IBookmarkInteractor } from 'src/app/data/interactors/contracts/ibookmark.interactor';
import { GetOneBookmarkUsecase } from '../domain/usecases/bookmark-usecases/get-one-usecase/get-one-bookmark.usecase';
import { RemoveBookmarkUsecase } from '../domain/usecases/bookmark-usecases/remove-usecase/remove-bookmark.usecase';
import { UpdateBookmarkUsecase } from '../domain/usecases/bookmark-usecases/update-usecase/update-bookmark.usecase';
import { HttpClient } from '@angular/common/http';
import { Provider } from "@angular/core";
import { GetManyPostUsecase } from './../domain/usecases/posts-usecases/get-many-posts.usecase';
import { GetOnePostUsecase } from './../domain/usecases/posts-usecases/get-one-post.usecase';
import { RemovePostUsecase } from './../domain/usecases/posts-usecases/remove-post.usecase';
import { UpdatePostUsecase } from './../domain/usecases/posts-usecases/update-post.usecase';
import { GetManyBookmarksUsecase } from '../domain/usecases/bookmark-usecases/get-many-usecase/get-many-bookmarks.usecase';
import { CreateBookmarkUsecase } from "../domain/usecases/bookmark-usecases/create-usecase/create-bookmark.usecase";
import { BookmarkRepository } from './datasources/remote/repo-implementations/bookmark/bookmark.repository';
import { PostRepository } from './datasources/remote/repo-implementations/post/post.repository';
import { CreatePostUsecase } from '../domain/usecases/posts-usecases/create-post.usecase';
import { ProjectRepository } from './datasources/remote/repo-implementations/project/project.repository';
import { CreateProjectUsecase } from '../domain/usecases/projects-usecases/create-project.usecase';
import { GetManyProjectUsecase } from '../domain/usecases/projects-usecases/get-many-project.usecase';
import { UpdateProjectUsecase } from '../domain/usecases/projects-usecases/update-project.usecase';
import { RemoveProjectUsecase } from '../domain/usecases/projects-usecases/remove-project.usecase';
import { GetOneProjectUsecase } from '../domain/usecases/projects-usecases/get-one-project.usecase';
import { BookmarkInteractor } from './interactors/implementations/bookmark/bookmark.interactor';


export const DATA_BOOKMARK_IOC: Provider[] = [
    {
        provide: IBookmarkInteractor,
        useClass: BookmarkInteractor
    },
    {
        deps: [HttpClient],
        provide: BookmarkRepository,
        useFactory: (http: HttpClient) => new BookmarkRepository(http)
    },

    {
        deps: [BookmarkRepository],
        provide: CreateBookmarkUsecase,
        useFactory: (repository: BookmarkRepository) => new GetManyBookmarksUsecase(repository),
    },

    {
        deps: [BookmarkRepository],
        provide: GetManyBookmarksUsecase,
        useFactory: (repository: BookmarkRepository) => new GetManyBookmarksUsecase(repository),
    },

    {
        deps: [BookmarkRepository],
        provide: UpdateBookmarkUsecase,
        useFactory: (repository: BookmarkRepository) => new UpdateBookmarkUsecase(repository),
    },

    {
        deps: [BookmarkRepository],
        provide: RemoveBookmarkUsecase,
        useFactory: (repository: BookmarkRepository) => new RemoveBookmarkUsecase(repository),
    },

    {
        deps: [BookmarkRepository],
        provide: GetOneBookmarkUsecase,
        useFactory: (repository: BookmarkRepository) => new GetOneBookmarkUsecase(repository),
    },

];

export const DATA_POST_IOC: Provider[] = [
    {
        provide: IPostInteractor,
        useClass: PostInteractor
    },
    {
        deps: [HttpClient],
        provide: PostRepository,
        useFactory: (http: HttpClient) => new PostRepository(http)
    },

    {
        deps: [PostRepository],
        provide: GetManyPostUsecase,
        useFactory: (repository: PostRepository) => new GetManyPostUsecase(repository),
    },

    {
        deps: [PostRepository],
        provide: CreatePostUsecase,
        useFactory: (repository: PostRepository) => new CreatePostUsecase(repository),
    },

    {
        deps: [PostRepository],
        provide: UpdatePostUsecase,
        useFactory: (repository: PostRepository) => new UpdatePostUsecase(repository),
    },

    {
        deps: [PostRepository],
        provide: RemovePostUsecase,
        useFactory: (repository: PostRepository) => new RemovePostUsecase(repository),
    },

    {
        deps: [PostRepository],
        provide: GetOnePostUsecase,
        useFactory: (repository: PostRepository) => new GetOnePostUsecase(repository),
    },
];

export const DATA_PROJECT_IOC: Provider[] = [
    {
        provide: IProjectInteractor,
        useClass: ProjectInteractor
    },
    {
        deps: [HttpClient],
        provide: ProjectRepository,
        useFactory: (http: HttpClient) => new ProjectRepository(http)
    },

    {
        deps: [ProjectRepository],
        provide: GetManyProjectUsecase,
        useFactory: (repository: ProjectRepository) => new GetManyProjectUsecase(repository),
    },

    {
        deps: [ProjectRepository],
        provide: CreateProjectUsecase,
        useFactory: (repository: ProjectRepository) => new CreateProjectUsecase(repository),
    },

    {
        deps: [ProjectRepository],
        provide: UpdateProjectUsecase,
        useFactory: (repository: ProjectRepository) => new UpdateProjectUsecase(repository),
    },

    {
        deps: [ProjectRepository],
        provide: RemoveProjectUsecase,
        useFactory: (repository: ProjectRepository) => new RemoveProjectUsecase(repository),
    },

    {
        deps: [ProjectRepository],
        provide: GetOneProjectUsecase,
        useFactory: (repository: ProjectRepository) => new GetOneProjectUsecase(repository),
    },
];
