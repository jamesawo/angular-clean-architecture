import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorProjectsComponent } from './editor-projects.component';

describe('EditorProjectsComponent', () => {
  let component: EditorProjectsComponent;
  let fixture: ComponentFixture<EditorProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
