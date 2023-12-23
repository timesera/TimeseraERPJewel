import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWiseSaleSummaryComponent } from './product-wise-sale-summary.component';

describe('ProductWiseSaleSummaryComponent', () => {
  let component: ProductWiseSaleSummaryComponent;
  let fixture: ComponentFixture<ProductWiseSaleSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWiseSaleSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWiseSaleSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
