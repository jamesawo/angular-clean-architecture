import { Router, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { EditorModule } from './editor/editor.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ComponentModule } from "../components/components.module";
import { BrowserModule } from '@angular/platform-browser';
import { BookmarkComponent } from './bookmarks/bookmark/bookmark.component';


@NgModule({
    declarations: [
        BlogComponent,
        BookmarksComponent,
        HomeComponent,
        PostComponent,
        ProjectsComponent,
        BookmarkComponent,
    ],
    exports: [],
    imports: [
        ComponentModule,
        EditorModule,
    ]
})
export class PagesModule { }
