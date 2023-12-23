import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamentStockGS12Component } from './ornament-stock-gs12.component';

describe('OrnamentStockGS12Component', () => {
  let component: OrnamentStockGS12Component;
  let fixture: ComponentFixture<OrnamentStockGS12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrnamentStockGS12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrnamentStockGS12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
