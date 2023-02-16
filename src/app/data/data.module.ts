import { NgModule } from '@angular/core';
import { BookmarkInteractor } from './interactors/implementations/bookmark.interactor';

@NgModule({
    providers: [
        BookmarkInteractor
    ],
    exports: []
})
export class DataModule { }
