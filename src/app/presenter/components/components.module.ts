import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DarkThemeSwitchComponent } from './shared/theme-switcher/dark-theme-switch/dark-theme-switch.component';
import { ThemeSwitcherService } from './shared/theme-switcher/theme-switcher.service';
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
import { ThemeSwitcherComponent } from './shared/theme-switcher/theme-switcher.component';
import { LightThemeSwitchComponent } from './shared/theme-switcher/light-theme-switch/light-theme-switch.component';
import { TagComponent } from './shared/tag/tag.component';
import { EditorLayoutComponent } from './layouts/editor-layout/editor-layout.component';
import { EditorHeaderComponent } from './layouts/editor-header/editor-header.component';
import { LinkComponent } from './shared/link/link.component';
import { TableComponent } from './shared/table/table.component';
import { ButtonComponent } from './shared/button/button.component';
import { ModalComponent } from './shared/modal/modal.component';
import { FormFieldComponent } from './shared/form-field/form-field.component';


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
        TagComponent,
        EditorLayoutComponent,
        EditorHeaderComponent,
        LinkComponent,
        TableComponent,
        ButtonComponent,
        ModalComponent,
        FormFieldComponent,

    ],
    exports: [
        CommonModule,
        RouterModule,
        FooterComponent,
        NotFoundComponent,
        ToastComponent,
        HeaderComponent,
        SkeletonLoaderComponent,
        LightThemeSwitchComponent,
        DarkThemeSwitchComponent,
        ThemeSwitcherComponent,
        TagComponent,
        TableComponent,
        ButtonComponent,
        ModalComponent,
        FormFieldComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ThemeSwitcherService]
})
export class ComponentModule { }
