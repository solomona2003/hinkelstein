import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtzcontrolmodalComponent } from './ptzcontrolmodal.component';

describe('PtzcontrolmodalComponent', () => {
  let component: PtzcontrolmodalComponent;
  let fixture: ComponentFixture<PtzcontrolmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtzcontrolmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtzcontrolmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
