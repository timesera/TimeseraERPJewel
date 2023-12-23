import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairDeliveryRegisterComponent } from './repair-delivery-register.component';

describe('RepairDeliveryRegisterComponent', () => {
  let component: RepairDeliveryRegisterComponent;
  let fixture: ComponentFixture<RepairDeliveryRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairDeliveryRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairDeliveryRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
