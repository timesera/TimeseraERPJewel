import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerPaymentRegisterComponent } from './dealer-payment-register.component';

describe('DealerPaymentRegisterComponent', () => {
  let component: DealerPaymentRegisterComponent;
  let fixture: ComponentFixture<DealerPaymentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerPaymentRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerPaymentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
