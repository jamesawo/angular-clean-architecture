import { Component } from '@angular/core';
import { ThemeSwitcherService } from './presenter/components/shared/theme-switcher/theme-switcher.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    public themePref$ = this.themeService.pref$;

    public constructor(private themeService: ThemeSwitcherService) { }

}
