import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorBookmarksComponent } from './editor-bookmarks.component';

describe('EditorBookmarksComponent', () => {
  let component: EditorBookmarksComponent;
  let fixture: ComponentFixture<EditorBookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorBookmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
