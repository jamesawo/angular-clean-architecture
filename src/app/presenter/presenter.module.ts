import { DataModule } from './../data/data.module';
import { PagesModule } from './pages/pages.module';
import { ComponentModule } from './components/components.module';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [],
    exports: [
        ComponentModule,
        PagesModule,
    ],
    imports: [
        DataModule,
        ComponentModule,
        PagesModule
    ],
})
export class PresenterModule { }
