import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorHeaderComponent } from './editor-header.component';

describe('EditorHeaderComponent', () => {
  let component: EditorHeaderComponent;
  let fixture: ComponentFixture<EditorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
