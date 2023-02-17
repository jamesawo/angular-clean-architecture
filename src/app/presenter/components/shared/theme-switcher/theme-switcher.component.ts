import { ThemeSwitcherService } from './theme-switcher.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-theme-switcher',
    templateUrl: './theme-switcher.component.html',
    styles: [
    ]
})
export class ThemeSwitcherComponent implements OnInit {

    public isDarkTheme?: boolean;

    public constructor(private themeService: ThemeSwitcherService) { }

    ngOnInit(): void {
        this.themeService
            .pref$.subscribe(res => this.isDarkTheme = res === 'dark');
    }

    public toggleTheme = () => {
        this.isDarkTheme = !this.isDarkTheme;
        this.themeService.updateThemePref(this.isDarkTheme ? 'dark' : 'light');
    }

}
