import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseeditmodalComponent } from './courseeditmodal.component';

describe('CoureeditmodalComponent', () => {
  let component: CourseeditmodalComponent;
  let fixture: ComponentFixture<CourseeditmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseeditmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseeditmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
