import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoureeditmodalComponent } from './coureeditmodal.component';

describe('CoureeditmodalComponent', () => {
  let component: CoureeditmodalComponent;
  let fixture: ComponentFixture<CoureeditmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoureeditmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoureeditmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
