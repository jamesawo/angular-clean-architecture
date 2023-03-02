import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookmarkEntity } from '../../../entities/bookmark.entity';
import { Usecase } from '../../../../core/contracts/usecase.contract';
import { Param } from 'src/app/core/params/param.payload';
import { IBookmarkRepository } from '../../../repositories/ibookmark.repository';
import { Result } from 'src/app/core/types/types';


@Injectable({ providedIn: 'root' })
export class CreateBookmarkUsecase implements Usecase<Param<BookmarkEntity>, Observable<Result>> {

    constructor(private ibookmarkRepository: IBookmarkRepository) { }

    execute(param: Param<BookmarkEntity>): Observable<Result> {
        return this.ibookmarkRepository.createBookmark(param.payload);
    }
}
