import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsliderComponent } from './leftslider.component';

describe('LeftsliderComponent', () => {
  let component: LeftsliderComponent;
  let fixture: ComponentFixture<LeftsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
