import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublestreamcontrolComponent } from './doublestreamcontrol.component';

describe('DoublestreamcontrolComponent', () => {
  let component: DoublestreamcontrolComponent;
  let fixture: ComponentFixture<DoublestreamcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublestreamcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublestreamcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
