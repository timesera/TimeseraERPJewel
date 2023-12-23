import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseEstimationComponent } from './purchase-estimation.component';

describe('PurchaseEstimationComponent', () => {
  let component: PurchaseEstimationComponent;
  let fixture: ComponentFixture<PurchaseEstimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseEstimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
