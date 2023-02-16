import { NotFoundComponent } from './../../components/not-found/not-found.component';
import { EditorBookmarksComponent } from './pages/editor-bookmarks/editor-bookmarks.component';
import { EditorProjectsComponent } from './pages/editor-projects/editor-projects.component';
import { EditorPostsComponent } from './pages/editor-posts/editor-posts.component';
import { EditorHomeComponent } from './pages/editor-home/editor-home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', component: EditorHomeComponent },
    { path: 'posts', component: EditorPostsComponent },
    { path: 'projects', component: EditorProjectsComponent },
    { path: 'bookmarks', component: EditorBookmarksComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditorRoutingModule { }
