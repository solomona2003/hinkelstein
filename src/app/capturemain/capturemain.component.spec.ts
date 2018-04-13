import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturemainComponent } from './capturemain.component';

describe('CapturemainComponent', () => {
  let component: CapturemainComponent;
  let fixture: ComponentFixture<CapturemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
