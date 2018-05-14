import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhocmodalComponent } from './adhocmodal.component';

describe('AdhocmodalComponent', () => {
  let component: AdhocmodalComponent;
  let fixture: ComponentFixture<AdhocmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhocmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhocmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
