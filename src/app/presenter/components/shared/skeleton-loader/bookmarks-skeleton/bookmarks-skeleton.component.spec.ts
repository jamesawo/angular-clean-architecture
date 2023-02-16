import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksSkeletonComponent } from './bookmarks-skeleton.component';

describe('BookmarksSkeletonComponent', () => {
  let component: BookmarksSkeletonComponent;
  let fixture: ComponentFixture<BookmarksSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarksSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarksSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
