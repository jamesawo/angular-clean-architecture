import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { EditorHomeComponent } from './pages/editor-home/editor-home.component';
import { EditorPostsComponent } from './pages/editor-posts/editor-posts.component';
import { EditorProjectsComponent } from './pages/editor-projects/editor-projects.component';
import { EditorBookmarksComponent } from './pages/editor-bookmarks/editor-bookmarks.component';
import { ComponentModule } from "../../components/components.module";

@NgModule({
    declarations: [
        EditorComponent,
        EditorHomeComponent,
        EditorPostsComponent,
        EditorProjectsComponent,
        EditorBookmarksComponent
    ],
    providers: [],
    exports: [
        EditorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EditorRoutingModule,
        ComponentModule
    ]
})
export class EditorModule { }
