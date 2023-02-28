import { of } from 'rxjs';

import { AppComponent } from './app.component';

import { PageSeoService } from './presenter/pages/page-seo.service';
import { ThemeSwitcherService } from './presenter/components/shared/theme-switcher/theme-switcher.service';

const MOCK_THEME_PREF = of('light');

describe('AppComponent', () => {

    let component: AppComponent;
    let themeService: jasmine.SpyObj<ThemeSwitcherService>;
    let seoService: jasmine.SpyObj<PageSeoService>;


    beforeEach(async () => {
        themeService = jasmine.createSpyObj('ThemeSwitcherService', [], { pref$: MOCK_THEME_PREF });
        seoService = jasmine.createSpyObj('PageSeoService', ['setSEO']);
        component = new AppComponent(themeService, seoService);
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
    });


});
