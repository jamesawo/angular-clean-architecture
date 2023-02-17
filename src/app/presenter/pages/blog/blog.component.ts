import { PostInteractor } from './../../../data/interactors/implementations/post.interactor';
import { PageSeoService } from './../page-seo.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEnum } from '../../components/shared/skeleton-loader/skeleton-loader.component';
import { PostRequest } from 'src/app/data/requests/posts.request';
import { IPostInteractor } from 'src/app/data/interactors/contracts/ipost.interactor';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styles: []
})
export class BlogComponent implements OnInit {

    public blog = PageEnum.blog;
    public posts$?: Observable<PostRequest[]>;

    public constructor(
        private interactor: IPostInteractor,
        private seoService: PageSeoService
    ) { }

    ngOnInit(): void {
        this.seoService.setSEO({ pageTitle: 'Blog Posts' });
        this.posts$ = this.interactor.getMany();
    }


}
