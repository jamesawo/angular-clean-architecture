import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToastComponent } from './shared/toast/toast.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ToggleSwitchComponent } from './shared/toggle-switch/toggle-switch.component';
import { SkeletonLoaderComponent } from './shared/skeleton-loader/skeleton-loader.component';
import { BlogSkeletonComponent } from './shared/skeleton-loader/blog-skeleton/blog-skeleton.component';
import { ProjectsSkeletonComponent } from './shared/skeleton-loader/projects-skeleton/projects-skeleton.component';
import { BookmarksSkeletonComponent } from './shared/skeleton-loader/bookmarks-skeleton/bookmarks-skeleton.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        FooterComponent,
        NotFoundComponent,
        ToastComponent,
        ToggleSwitchComponent,
        HeaderComponent,
        SkeletonLoaderComponent,
        BlogSkeletonComponent,
        ProjectsSkeletonComponent,
        BookmarksSkeletonComponent,
    ],
    exports: [
        FooterComponent,
        ToggleSwitchComponent,
        NotFoundComponent,
        ToastComponent,
        HeaderComponent,
        SkeletonLoaderComponent
    ],
    imports: [
        RouterModule,
        BrowserModule

    ]
})
export class ComponentModule { }
