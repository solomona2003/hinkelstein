import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursestartoreditComponent } from './coursestartoredit.component';

describe('CoursestartoreditComponent', () => {
  let component: CoursestartoreditComponent;
  let fixture: ComponentFixture<CoursestartoreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursestartoreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursestartoreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
