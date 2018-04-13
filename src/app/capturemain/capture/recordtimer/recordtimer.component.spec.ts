import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordtimerComponent } from './recordtimer.component';

describe('RecordtimerComponent', () => {
  let component: RecordtimerComponent;
  let fixture: ComponentFixture<RecordtimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordtimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordtimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
