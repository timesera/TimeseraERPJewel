import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReOrderStockComponent } from './re-order-stock.component';

describe('ReOrderStockComponent', () => {
  let component: ReOrderStockComponent;
  let fixture: ComponentFixture<ReOrderStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReOrderStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReOrderStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
