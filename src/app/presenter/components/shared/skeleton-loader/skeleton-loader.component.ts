import { Component, Input } from '@angular/core';

export enum PageEnum {
    blog,
    project,
    bookmark,
}

@Component({
    selector: 'app-skeleton-loader',
    templateUrl: './skeleton-loader.component.html',
})
export class SkeletonLoaderComponent {

    @Input()
    public pageEnum!: PageEnum;

    public blog = PageEnum.blog;
    public project = PageEnum.project;
    public bookmark = PageEnum.bookmark;

}
