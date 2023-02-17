import { DataModule } from './../data/data.module';
import { PagesModule } from './pages/pages.module';
import { ComponentModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    exports: [
        CommonModule,
        ComponentModule,
        PagesModule,
    ],
    imports: [
        CommonModule,
        DataModule,
        ComponentModule,
        PagesModule
    ],
})
export class PresenterModule { }
