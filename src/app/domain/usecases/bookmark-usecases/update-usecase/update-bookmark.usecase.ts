import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { BookmarkEntity } from '../../../entities';
import { Result } from '../../../../core/types/types';
import { Param } from '../../../../core/params/param.payload';
import { Usecase } from '../../../../core/contracts/usecase.contract';
import { IBookmarkRepository } from '../../../repositories/ibookmark.repository';


@Injectable({ providedIn: 'root' })
export class UpdateBookmarkUsecase implements Usecase<Param<BookmarkEntity>, Observable<Result>>{

    constructor(private ibookmarkRepository: IBookmarkRepository) { }

    execute(param: Param<BookmarkEntity>): Observable<Result> {
        const { id, ...bookmark } = param.payload;
        return this.ibookmarkRepository.updateBookmark(id!, bookmark);
    }

}
