import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeWiseStockComponent } from './size-wise-stock.component';

describe('SizeWiseStockComponent', () => {
  let component: SizeWiseStockComponent;
  let fixture: ComponentFixture<SizeWiseStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeWiseStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeWiseStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
