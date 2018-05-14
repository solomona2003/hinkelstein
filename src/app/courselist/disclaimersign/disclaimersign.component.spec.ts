import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimersignComponent } from './disclaimersign.component';

describe('DisclaimersignComponent', () => {
  let component: DisclaimersignComponent;
  let fixture: ComponentFixture<DisclaimersignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimersignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimersignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
