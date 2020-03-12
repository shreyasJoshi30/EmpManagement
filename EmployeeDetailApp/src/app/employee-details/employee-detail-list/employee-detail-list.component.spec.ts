import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailListComponent } from './employee-detail-list.component';

describe('EmployeeDetailListComponent', () => {
  let component: EmployeeDetailListComponent;
  let fixture: ComponentFixture<EmployeeDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
