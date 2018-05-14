import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamcontrolComponent } from './streamcontrol.component';

describe('StreamcontrolComponent', () => {
  let component: StreamcontrolComponent;
  let fixture: ComponentFixture<StreamcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
