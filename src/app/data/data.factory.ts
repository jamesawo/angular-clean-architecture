import { GetManyPostUsecase } from './../domain/usecases/posts-usecases/get-many-posts.usecase';
import { GetOnePostUsecase } from './../domain/usecases/posts-usecases/get-one-post.usecase';
import { RemovePostUsecase } from './../domain/usecases/posts-usecases/remove-post.usecase';
import { UpdatePostUsecase } from './../domain/usecases/posts-usecases/update-post.usecase';
import { CreatePostUsecase } from './../domain/usecases/posts-usecases/create-post.usecase';
import { PostRepository } from './datasources/remote/repo-implementations/post.repository';
import { UpdateBookmarkUsecase } from './../domain/usecases/bookmark-usecases/update-bookmark.usecase';
import { RemoveBookmarkUsecase } from './../domain/usecases/bookmark-usecases/remove-bookmark.usecase';
import { GetOneBookmarkUsecase } from './../domain/usecases/bookmark-usecases/get-one-bookmark.usecase';
import { GetManyBookmarksUsecase } from './../domain/usecases/bookmark-usecases/get-many-bookmarks.usecase';
import { HttpClient } from '@angular/common/http';

import { CreateBookmarkUsecase } from "../domain/usecases/bookmark-usecases/create-bookmark.usecase";
import { BookmarkRepository } from "./datasources/remote/repo-implementations/bookmark.repository";

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
    public getRepository(http: HttpClient) {
        return null;
    }

    public getCreatePostUsecase(repo: PostRepository) {
        return null;
    }

    public getUpdatePostUsecase(repo: PostRepository) {
        return null;
    }

    public getRemovePostUsecase(repo: PostRepository) {
        return null;
    }

    public getGetOnePostUsecase(repo: PostRepository) {
        return null;
    }
}

export class DataPostFactory {
    public getRepository(http: HttpClient) {
        return new PostRepository(http);
    }

    public getManyPostsUsecase(repo: PostRepository) {
        return new GetManyPostUsecase(repo);
    }

    public getCreatePostUsecase(repo: PostRepository) {
        return new CreatePostUsecase(repo);
    }

    public getUpdatePostUsecase(repo: PostRepository) {
        return new UpdatePostUsecase(repo);
    }

    public getRemovePostUsecase(repo: PostRepository) {
        return new RemovePostUsecase(repo);
    }

    public getGetOnePostUsecase(repo: PostRepository) {
        return new GetOnePostUsecase(repo);
    }
}

