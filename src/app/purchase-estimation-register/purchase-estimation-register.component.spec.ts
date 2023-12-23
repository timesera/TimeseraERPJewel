import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseEstimationRegisterComponent } from './purchase-estimation-register.component';

describe('PurchaseEstimationRegisterComponent', () => {
  let component: PurchaseEstimationRegisterComponent;
  let fixture: ComponentFixture<PurchaseEstimationRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseEstimationRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseEstimationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
