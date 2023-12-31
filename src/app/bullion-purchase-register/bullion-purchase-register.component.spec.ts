import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullionPurchaseRegisterComponent } from './bullion-purchase-register.component';

describe('BullionPurchaseRegisterComponent', () => {
  let component: BullionPurchaseRegisterComponent;
  let fixture: ComponentFixture<BullionPurchaseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullionPurchaseRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BullionPurchaseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
