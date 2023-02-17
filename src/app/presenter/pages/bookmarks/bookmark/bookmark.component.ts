import { Component, Input } from '@angular/core';
import { BookmarkRequest } from './../../../../data/requests/bookmark.request';

@Component({
    selector: 'app-bookmark',
    templateUrl: './bookmark.component.html',
})
export class BookmarkComponent {

    @Input()
    public bookmark?: BookmarkRequest;
}
