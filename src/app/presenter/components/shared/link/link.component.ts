import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styles: [
    ]
})
export class LinkComponent {

    @Input()
    props?: { link: string, title: string };
}
