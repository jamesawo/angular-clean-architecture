import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Param } from 'src/app/core/params/param.payload';
import { IBookmarkRepository } from '../../repositories/ibookmark.repository';
import { Usecase } from './../../../core/contracts/usecase.contract';

@Injectable()
export class RemoveBookmarkUsecase implements Usecase<Param<string>, Observable<void>> {

    constructor(private ibookmarkRepository: IBookmarkRepository) { }

    execute(param: Param<string>): Observable<void> {
        return this.ibookmarkRepository.removeBookmark(param.payload);
    }

}
