import { UpdateBookmarkUsecase } from './../domain/usecases/bookmark-usecases/update-bookmark.usecase';
import { RemoveBookmarkUsecase } from './../domain/usecases/bookmark-usecases/remove-bookmark.usecase';
import { GetOneBookmarkUsecase } from './../domain/usecases/bookmark-usecases/get-one-bookmark.usecase';
import { GetManyBookmarksUsecase } from './../domain/usecases/bookmark-usecases/get-many-bookmarks.usecase';
import { HttpClient } from '@angular/common/http';

import { CreateBookmarkUsecase } from "../domain/usecases/bookmark-usecases/create-bookmark.usecase";
import { BookmarkRepository } from "./datasources/remote/repositories_implementation/bookmark.repository";

export class DataBookmarkFactory {

    public getRepository(http: HttpClient) {
        return new BookmarkRepository(http);
    }

    public getCreateBookmarkUsecase(repo: BookmarkRepository) {
        return new CreateBookmarkUsecase(repo);
    }

    public getManyBookmarkUsecase(repo: BookmarkRepository) {
        return new GetManyBookmarksUsecase(repo);
    }

    public getOneBookmarkUsecase(repo: BookmarkRepository) {
        return new GetOneBookmarkUsecase(repo);
    }

    public getRemoveBookmarkUsecase(repo: BookmarkRepository) {
        return new RemoveBookmarkUsecase(repo);
    }

    public getUpdateBookmarkUsecase(repo: BookmarkRepository) {
        return new UpdateBookmarkUsecase(repo);
    }

}

export class DataProjectFactory {

}

export class DataPostFactory { }

