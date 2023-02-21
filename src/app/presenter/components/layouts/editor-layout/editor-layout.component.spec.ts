import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorLayoutComponent } from './editor-layout.component';

describe('EditorLayoutComponent', () => {
  let component: EditorLayoutComponent;
  let fixture: ComponentFixture<EditorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
