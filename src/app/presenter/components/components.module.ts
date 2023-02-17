import { DarkThemeSwitchComponent } from './shared/theme-switcher/dark-theme-switch/dark-theme-switch.component';
import { ThemeSwitcherService } from './shared/theme-switcher/theme-switcher.service';
import { ToastService } from './shared/toast/toast.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToastComponent } from './shared/toast/toast.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SkeletonLoaderComponent } from './shared/skeleton-loader/skeleton-loader.component';
import { BlogSkeletonComponent } from './shared/skeleton-loader/blog-skeleton/blog-skeleton.component';
import { ProjectsSkeletonComponent } from './shared/skeleton-loader/projects-skeleton/projects-skeleton.component';
import { BookmarksSkeletonComponent } from './shared/skeleton-loader/bookmarks-skeleton/bookmarks-skeleton.component';
import { BrowserModule } from '@angular/platform-browser';
import { ThemeSwitcherComponent } from './shared/theme-switcher/theme-switcher.component';
import { LightThemeSwitchComponent } from './shared/theme-switcher/light-theme-switch/light-theme-switch.component';


@NgModule({
    declarations: [
        FooterComponent,
        NotFoundComponent,
        ToastComponent,
        HeaderComponent,
        SkeletonLoaderComponent,
        BlogSkeletonComponent,
        ProjectsSkeletonComponent,
        BookmarksSkeletonComponent,
        LightThemeSwitchComponent,
        DarkThemeSwitchComponent,
        ThemeSwitcherComponent,

    ],
    exports: [
        FooterComponent,
        NotFoundComponent,
        ToastComponent,
        HeaderComponent,
        SkeletonLoaderComponent,
        LightThemeSwitchComponent,
        DarkThemeSwitchComponent,
        ThemeSwitcherComponent,
        RouterModule
    ],
    imports: [
        RouterModule,
        BrowserModule
    ],
    providers: [ToastService, ThemeSwitcherService]
})
export class ComponentModule { }
