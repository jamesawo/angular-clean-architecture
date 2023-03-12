import { Component, Input } from '@angular/core';

import { PostRequest } from './../../../../data/requests/posts.request';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
})
export class PostComponent {

    @Input()
    post?: PostRequest;

    ngOnInit(): void {
        if (this.post && this.post.tags && typeof this.post.tags === 'string') {
            const strTag: string = this.post.tags;
            this.post.tags = strTag.split(',');
        }
    }
}
