import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOCK_POSTS } from 'src/app/data/datasources/remote/repo-implementations/post/post.repository.spec';

import { TagComponent } from './../../../components/shared/tag/tag.component';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PostComponent, TagComponent],
            imports: [RouterModule.forRoot([])]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
        component.post = MOCK_POSTS[0];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should set post input', () => {
        expect(component.post).toBeTruthy();
    });

    it('should add tag to page', () => {

        const { debugElement } = fixture;

        const tag = debugElement.query(By.directive(TagComponent));

        expect(tag).toBeTruthy();
    })

});
