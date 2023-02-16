import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPostsComponent } from './editor-posts.component';

describe('EditorPostsComponent', () => {
  let component: EditorPostsComponent;
  let fixture: ComponentFixture<EditorPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
