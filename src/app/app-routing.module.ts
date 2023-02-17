import { PostDetailComponent } from './presenter/pages/post-detail/post-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './presenter/pages/blog/blog.component';
import { BookmarksComponent } from './presenter/pages/bookmarks/bookmarks.component';
import { EditorComponent } from './presenter/pages/editor/editor.component';
import { HomeComponent } from './presenter/pages/home/home.component';
import { ProjectsComponent } from './presenter/pages/projects/projects.component';
import { NotFoundComponent } from './presenter/components/shared/not-found/not-found.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:postId', component: PostDetailComponent },

    { path: 'projects', component: ProjectsComponent },
    { path: 'bookmarks', component: BookmarksComponent },
    {
        path: 'editor',
        loadChildren: () => import('./presenter/pages/editor/editor.module').then((c) => c.EditorModule),
        component: EditorComponent
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
