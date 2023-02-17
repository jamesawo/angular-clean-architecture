import { NgModule } from '@angular/core';
import { IBookmarkInteractor } from 'src/app/data/interactors/contracts/ibookmark.interactor';
import { BookmarkInteractor } from './interactors/implementations/bookmark.interactor';

@NgModule({
    providers: [],
    exports: []
})
export class DataModule { }
