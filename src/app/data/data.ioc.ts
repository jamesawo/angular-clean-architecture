import { GetManyPostUsecase } from './../domain/usecases/posts-usecases/get-many-posts.usecase';
import { GetOnePostUsecase } from './../domain/usecases/posts-usecases/get-one-post.usecase';
import { RemovePostUsecase } from './../domain/usecases/posts-usecases/remove-post.usecase';
import { UpdatePostUsecase } from './../domain/usecases/posts-usecases/update-post.usecase';
import { GetManyBookmarksUsecase } from './../domain/usecases/bookmark-usecases/get-many-bookmarks.usecase';
import { DataBookmarkFactory, DataPostFactory } from './data.factory';
import { Provider } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CreateBookmarkUsecase } from "../domain/usecases/bookmark-usecases/create-bookmark.usecase";
import { BookmarkRepository } from './datasources/remote/repo-implementations/bookmark.repository';
import { PostRepository } from './datasources/remote/repo-implementations/post.repository';
import { CreatePostUsecase } from '../domain/usecases/posts-usecases/create-post.usecase';

const dataFactory: DataBookmarkFactory = new DataBookmarkFactory();
const postDataFactory: DataPostFactory = new DataPostFactory();

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

export const DATA_PROJECT_IOC: Provider[] = [];

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
