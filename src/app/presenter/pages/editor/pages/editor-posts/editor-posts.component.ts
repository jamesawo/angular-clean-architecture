import { Component } from '@angular/core';

@Component({
    selector: 'app-editor-posts',
    templateUrl: './editor-posts.component.html',
    styles: [
    ]
})
export class EditorPostsComponent {

    public postsData = undefined;

    public openPostModal: () => void = () => { }

}
