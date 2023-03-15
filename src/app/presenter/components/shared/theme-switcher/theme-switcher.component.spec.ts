import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSwitcherComponent } from './theme-switcher.component';

import { DarkThemeSwitchComponent } from './dark-theme-switch/dark-theme-switch.component';
import { LightThemeSwitchComponent } from './light-theme-switch/light-theme-switch.component';

describe('ThemeSwitcherComponent', () => {
    let component: ThemeSwitcherComponent;
    let fixture: ComponentFixture<ThemeSwitcherComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ThemeSwitcherComponent,
                DarkThemeSwitchComponent,
                LightThemeSwitchComponent,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ThemeSwitcherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
