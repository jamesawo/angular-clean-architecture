import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Param } from 'src/app/core/params/param.payload';
import { Result } from 'src/app/core/types/types';
import { IBookmarkRepository } from '../../repositories/ibookmark.repository';
import { Usecase } from './../../../core/contracts/usecase.contract';

@Injectable({ providedIn: 'root' })
export class RemoveBookmarkUsecase implements Usecase<Param<string>, Observable<Result>> {

    constructor(private ibookmarkRepository: IBookmarkRepository) { }

    execute(param: Param<string>): Observable<Result> {
        return this.ibookmarkRepository.removeBookmark(param.payload);
    }

}
