import { Component, OnInit } from '@angular/core';
import { PageEnum } from '../../components/shared/skeleton-loader/skeleton-loader.component';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styles: []
})
export class BlogComponent implements OnInit {

    public blog = PageEnum.blog;

    constructor() {
    }

    ngOnInit(): void {
    }



}
