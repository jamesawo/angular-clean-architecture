import { Observable } from 'rxjs';
import { PageSeoService } from './../page-seo.service';
import { IPostInteractor } from 'src/app/data/interactors/contracts/ipost.interactor';
import { PostRequest } from './../../../data/requests/posts.request';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
})
export class PostDetailComponent implements OnInit {

    public post$?: Observable<PostRequest>
    public content?: any;

    public constructor(
        private route: ActivatedRoute,
        private interactor: IPostInteractor,
        private seoService: PageSeoService,
        private router: Router
    ) { }

    ngOnInit(): void {
        const routeParam = this.route.snapshot.paramMap;
        const postId = routeParam.get('postId')!;

        if (!postId) {
            this.router.navigateByUrl('blog');
            return;
        }

        this.post$ = this.interactor.getOne(postId);
    }

    public setSeo(post?: PostRequest): void {
        this.seoService.setSEO({
            pageTitle: `${post?.title}`,
            pageDescription: `${post?.excerpt}`,
            pageKeywords: `${post?.tags?.toString()}`
        });
    }

}
