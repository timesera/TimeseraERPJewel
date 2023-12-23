import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingStockGS11Component } from './billing-stock-gs11.component';

describe('BillingStockGS11Component', () => {
  let component: BillingStockGS11Component;
  let fixture: ComponentFixture<BillingStockGS11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingStockGS11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingStockGS11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
