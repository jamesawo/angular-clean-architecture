import { RouterModule, ActivatedRoute } from '@angular/router';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Title, Meta, By } from '@angular/platform-browser';

import { of } from 'rxjs';

import { AppComponent } from './app.component';

import { PageSeoService } from './presenter/pages/page-seo.service';
import { FooterComponent } from './presenter/components/layouts/footer/footer.component';
import { HeaderComponent } from './presenter/components/layouts/header/header.component';
import { ThemeSwitcherComponent } from './presenter/components/shared/theme-switcher/theme-switcher.component';
import { ThemeSwitcherService } from './presenter/components/shared/theme-switcher/theme-switcher.service';
import { DarkThemeSwitchComponent } from './presenter/components/shared/theme-switcher/dark-theme-switch/dark-theme-switch.component';
import { LightThemeSwitchComponent } from './presenter/components/shared/theme-switcher/light-theme-switch/light-theme-switch.component';

const MOCK_THEME_PREF = of('light');

describe('AppComponent', () => {

    let component: AppComponent;
    let themeService: jasmine.SpyObj<ThemeSwitcherService>;
    let seoService: jasmine.SpyObj<PageSeoService>;
    let fixture: ComponentFixture<AppComponent>;


    beforeEach(async () => {
        themeService = jasmine.createSpyObj('ThemeSwitcherService', [], { pref$: MOCK_THEME_PREF });
        seoService = jasmine.createSpyObj('PageSeoService', ['setSEO']);

        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent,
                FooterComponent,
                ThemeSwitcherComponent,
                DarkThemeSwitchComponent,
                LightThemeSwitchComponent
            ],
            providers: [
                { provide: ThemeSwitcherService, useValue: themeService },
                { provide: PageSeoService, useValue: seoService },
            ],
            imports: [RouterModule.forRoot([])]
        }).compileComponents()

        fixture = TestBed.createComponent(AppComponent)
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create the app component', () => {
        expect(component).toBeTruthy();
        expect(component).toBeInstanceOf(AppComponent);
    });

    describe('ngOnInit', () => {
        it('should call ngOnInit', () => {
            spyOn(component, 'ngOnInit');

            component.ngOnInit();

            expect(component.ngOnInit).toHaveBeenCalled();
        });
    });

    describe('themeService', () => {
        it('should populate themePref$ with data from themeService', () => {
            component.ngOnInit();

            expect(component.themePref$).toEqual(MOCK_THEME_PREF);
        });
    });

    describe('seoService', () => {
        it('should call setSEO method of seoService', () => {
            component.ngOnInit();

            expect(seoService.setSEO).toHaveBeenCalled();
        });

        it('should set page title', () => {
            let title = TestBed.inject(Title);
            let meta = TestBed.inject(Meta);

            component['seoService'] = new PageSeoService(meta, title);
            component.ngOnInit();

            expect(seoService.setSEO).toHaveBeenCalled();
            expect(title.getTitle()).toContain("Welcome to my Personal");
        });
    });

    describe('component html', () => {

        it('should have header component present', () => {
            const { debugElement } = fixture;

            const headerComponent = debugElement.queryAll(By.directive(HeaderComponent));

            expect(headerComponent.length).toBeGreaterThan(0);
        });

        it('should have footer component present', () => {
            const { debugElement } = fixture;

            const footerComponent = debugElement.queryAll(By.directive(FooterComponent));

            expect(footerComponent.length).toBeGreaterThan(0);
        });

    });


});
