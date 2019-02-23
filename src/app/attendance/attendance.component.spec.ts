import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { attendanceComponent } from './attendance.component';

describe('attendanceComponent', () => {
  let component: attendanceComponent;
  let fixture: ComponentFixture<attendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ attendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(attendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
