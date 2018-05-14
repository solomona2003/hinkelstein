import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerrequestComponent } from './disclaimerrequest.component';

describe('DisclaimerrequestComponent', () => {
  let component: DisclaimerrequestComponent;
  let fixture: ComponentFixture<DisclaimerrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimerrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
