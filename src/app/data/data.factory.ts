import { GetManyProjectUsecase } from 'src/app/domain/usecases/projects-usecases/get-many-project.usecase';
import { HttpClient } from '@angular/common/http';
import { GetOneProjectUsecase } from './../domain/usecases/projects-usecases/get-one-project.usecase';
import { RemoveProjectUsecase } from './../domain/usecases/projects-usecases/remove-project.usecase';
import { UpdateProjectUsecase } from './../domain/usecases/projects-usecases/update-project.usecase';
import { CreateProjectUsecase } from './../domain/usecases/projects-usecases/create-project.usecase';
import { ProjectRepository } from './datasources/remote/repo-implementations/project/project.repository';
import { GetManyPostUsecase } from './../domain/usecases/posts-usecases/get-many-posts.usecase';
import { GetOnePostUsecase } from './../domain/usecases/posts-usecases/get-one-post.usecase';
import { RemovePostUsecase } from './../domain/usecases/posts-usecases/remove-post.usecase';
import { UpdatePostUsecase } from './../domain/usecases/posts-usecases/update-post.usecase';
import { CreatePostUsecase } from './../domain/usecases/posts-usecases/create-post.usecase';
import { PostRepository } from './datasources/remote/repo-implementations/post/post.repository';
import { UpdateBookmarkUsecase } from '../domain/usecases/bookmark-usecases/update-usecase/update-bookmark.usecase';
import { RemoveBookmarkUsecase } from '../domain/usecases/bookmark-usecases/remove-usecase/remove-bookmark.usecase';
import { GetOneBookmarkUsecase } from '../domain/usecases/bookmark-usecases/get-one-usecase/get-one-bookmark.usecase';
import { GetManyBookmarksUsecase } from '../domain/usecases/bookmark-usecases/get-many-usecase/get-many-bookmarks.usecase';
import { BookmarkRepository } from "./datasources/remote/repo-implementations/bookmark/bookmark.repository";
import { CreateBookmarkUsecase } from "../domain/usecases/bookmark-usecases/create-usecase/create-bookmark.usecase";

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
        return new ProjectRepository(http);
    }

    public getCreateProjectUsecase(repo: ProjectRepository) {
        return new CreateProjectUsecase(repo);
    }

    public getUpdateProjectUsecase(repo: ProjectRepository) {
        return new UpdateProjectUsecase(repo);
    }

    public getRemoveProjectUsecase(repo: ProjectRepository) {
        return new RemoveProjectUsecase(repo);
    }

    public getGetOneProjectUsecase(repo: ProjectRepository) {
        return new GetOneProjectUsecase(repo);
    }

    public getGetManyProjectUsecase(repo: ProjectRepository) {
        return new GetManyProjectUsecase(repo);
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

