import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoParam } from '../../../../core/params/no-param.paylod';
import { Usecase } from '../../../../core/contracts/usecase.contract';
import { IBookmarkRepository } from '../../../repositories/ibookmark.repository';
import { BookmarkEntity } from '../../../entities';

@Injectable({ providedIn: 'root' })
export class GetManyBookmarksUsecase implements Usecase<NoParam, Observable<BookmarkEntity[]>> {

    constructor(private iBookmarkRepository: IBookmarkRepository) { }

    execute(payload: NoParam): Observable<BookmarkEntity[]> {
        return this.iBookmarkRepository.all();
    }

}
