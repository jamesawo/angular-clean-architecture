import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSkeletonComponent } from './blog-skeleton.component';

describe('BlogSkeletonComponent', () => {
  let component: BlogSkeletonComponent;
  let fixture: ComponentFixture<BlogSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
