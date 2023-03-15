import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPostInteractor } from 'src/app/data/interactors/contracts/ipost.interactor';

import { PageSeoService } from '../page-seo.service';
import { SkeletonLoaderComponent } from './../../components/shared/skeleton-loader/skeleton-loader.component';
import { BlogSkeletonComponent } from './../../components/shared/skeleton-loader/blog-skeleton/blog-skeleton.component';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
    let component: BlogComponent;
    let fixture: ComponentFixture<BlogComponent>;
    let interactor: jasmine.SpyObj<IPostInteractor>;
    let seoService: jasmine.SpyObj<PageSeoService>;

    beforeEach(async () => {
        interactor = jasmine.createSpyObj(IPostInteractor, ['getMany']);
        seoService = jasmine.createSpyObj(PageSeoService, ['setSEO']);

        await TestBed.configureTestingModule({
            declarations: [
                BlogComponent,
                SkeletonLoaderComponent,
                BlogSkeletonComponent,
            ],
            providers: [
                { provide: IPostInteractor, useValue: interactor },
                { provide: PageSeoService, useValue: seoService },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(BlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
