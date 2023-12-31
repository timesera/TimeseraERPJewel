import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWiseSalesComponent } from './employee-wise-sales.component';

describe('EmployeeWiseSalesComponent', () => {
  let component: EmployeeWiseSalesComponent;
  let fixture: ComponentFixture<EmployeeWiseSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeWiseSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeWiseSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
