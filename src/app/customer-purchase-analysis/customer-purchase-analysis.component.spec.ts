import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPurchaseAnalysisComponent } from './customer-purchase-analysis.component';

describe('CustomerPurchaseAnalysisComponent', () => {
  let component: CustomerPurchaseAnalysisComponent;
  let fixture: ComponentFixture<CustomerPurchaseAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPurchaseAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPurchaseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
