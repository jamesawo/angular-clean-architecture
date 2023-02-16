import { Component } from '@angular/core';
import { PageEnum } from '../../components/shared/skeleton-loader/skeleton-loader.component';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styles: [
    ]
})
export class BlogComponent {

    public blog = PageEnum.blog;

}
