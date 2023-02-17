import { GetManyBookmarksUsecase } from './../domain/usecases/bookmark-usecases/get-many-bookmarks.usecase';
import { DataBookmarkFactory } from './data.factory';
import { Provider } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CreateBookmarkUsecase } from "../domain/usecases/bookmark-usecases/create-bookmark.usecase";
import { BookmarkRepository } from './datasources/remote/repositories/bookmark.repository';

const dataFactory: DataBookmarkFactory = new DataBookmarkFactory();

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
        useFactory: (repository: BookmarkRepository) => dataFactory.getCreateBookmarkUsecase(repository),
    },
];

export const DATA_PROJECT_IOC: Provider[] = [];

export const DATA_POST_IOC: Provider[] = [];
