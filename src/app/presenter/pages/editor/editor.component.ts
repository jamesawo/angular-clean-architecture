import { Component, OnInit } from '@angular/core';

import { PageSeoService } from '../page-seo.service';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styles: [
    ]
})
export class EditorComponent implements OnInit {

    constructor(
        private seoService: PageSeoService,
    ) { }

    ngOnInit(): void {
        this.seoService.setSEO();
    }


}
