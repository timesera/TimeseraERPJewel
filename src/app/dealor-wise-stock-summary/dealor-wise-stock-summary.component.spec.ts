import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealorWiseStockSummaryComponent } from './dealor-wise-stock-summary.component';

describe('DealorWiseStockSummaryComponent', () => {
  let component: DealorWiseStockSummaryComponent;
  let fixture: ComponentFixture<DealorWiseStockSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealorWiseStockSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealorWiseStockSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
