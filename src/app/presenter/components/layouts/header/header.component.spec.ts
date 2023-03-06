import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSwitcherComponent } from './../../shared/theme-switcher/theme-switcher.component';
import { DarkThemeSwitchComponent } from './../../shared/theme-switcher/dark-theme-switch/dark-theme-switch.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent, ThemeSwitcherComponent, DarkThemeSwitchComponent],
            providers: [],
            imports: [RouterModule.forRoot([])]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load theme switcher component', () => {
        const { debugElement } = fixture;

        const switcherElement = debugElement.query(By.directive(ThemeSwitcherComponent));

        expect(switcherElement).toBeTruthy();
    })
});
