import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Param } from '../../../../core/params/param.payload';
import { BookmarkEntity } from '../../../entities/bookmark.entity';
import { Usecase } from '../../../../core/contracts/usecase.contract';
import { IBookmarkRepository } from '../../../repositories/ibookmark.repository';

@Injectable({ providedIn: 'root' })
export class GetOneBookmarkUsecase implements Usecase<Param<string>, Observable<BookmarkEntity>> {

    constructor(private ibookmarkRepository: IBookmarkRepository) { }

    execute(param: Param<string>): Observable<BookmarkEntity> {
        return this.ibookmarkRepository.getBookmark(param.payload);
    }

}
