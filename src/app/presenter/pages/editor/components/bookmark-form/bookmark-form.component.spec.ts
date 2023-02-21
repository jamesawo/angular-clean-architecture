import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkFormComponent } from './bookmark-form.component';

describe('BookmarkFormComponent', () => {
  let component: BookmarkFormComponent;
  let fixture: ComponentFixture<BookmarkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
