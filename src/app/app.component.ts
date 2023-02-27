import { Component, OnInit } from '@angular/core';

import { PageSeoService } from './presenter/pages/page-seo.service';
import { ThemeSwitcherService } from './presenter/components/shared/theme-switcher/theme-switcher.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {


    public themePref$ = this.themeService.pref$;

    public constructor(
        private themeService: ThemeSwitcherService,
        private seoService: PageSeoService
    ) { }


    ngOnInit(): void {
        this.seoService.setSEO();
    }

}
