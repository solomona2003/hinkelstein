import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglestreamcontrolComponent } from './singlestreamcontrol.component';

describe('SinglestreamcontrolComponent', () => {
  let component: SinglestreamcontrolComponent;
  let fixture: ComponentFixture<SinglestreamcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglestreamcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglestreamcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
