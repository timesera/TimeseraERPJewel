import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamentPurchaseRegisterComponent } from './ornament-purchase-register.component';

describe('OrnamentPurchaseRegisterComponent', () => {
  let component: OrnamentPurchaseRegisterComponent;
  let fixture: ComponentFixture<OrnamentPurchaseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrnamentPurchaseRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrnamentPurchaseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
