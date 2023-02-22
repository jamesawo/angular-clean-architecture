import { RouterModule } from '@angular/router';
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
import { PostFormComponent } from './components/post-form/post-form.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { BookmarkFormComponent } from './components/bookmark-form/bookmark-form.component';

@NgModule({
    declarations: [
        EditorComponent,
        EditorHomeComponent,
        EditorPostsComponent,
        EditorProjectsComponent,
        EditorBookmarksComponent,
        PostFormComponent,
        ProjectFormComponent,
        BookmarkFormComponent
    ],
    providers: [],
    exports: [
        EditorComponent
    ],
    imports: [
        RouterModule,
        ComponentModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EditorRoutingModule,
    ]
})
export class EditorModule { }
