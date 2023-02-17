import { MarkdownModule } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './home/home.component';
import { EditorModule } from './editor/editor.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ComponentModule } from "../components/components.module";
import { BookmarkComponent } from './bookmarks/bookmark/bookmark.component';
import { CommonModule } from '@angular/common';
import { PostComponent } from './blog/post/post.component';


@NgModule({
    declarations: [
        BlogComponent,
        BookmarksComponent,
        HomeComponent,
        PostComponent,
        ProjectsComponent,
        BookmarkComponent,
        PostDetailComponent,
    ],
    exports: [
        CommonModule,
        ComponentModule,
        PostComponent,
        BlogComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        ComponentModule,
        EditorModule,
        MarkdownModule.forChild()
    ]
})
export class PagesModule { }
