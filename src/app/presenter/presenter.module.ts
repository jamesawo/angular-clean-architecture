import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { EditorComponent } from './pages/editor/editor.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
    declarations: [
        HomeComponent,
        BlogComponent,
        PostComponent,
        ProjectsComponent,
        BookmarksComponent,
        EditorComponent,
        NotFoundComponent,
        ToastComponent
    ]
})
export class PresenterModule { }
