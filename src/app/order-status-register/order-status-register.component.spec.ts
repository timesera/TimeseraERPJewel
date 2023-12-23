import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatusRegisterComponent } from './order-status-register.component';

describe('OrderStatusRegisterComponent', () => {
  let component: OrderStatusRegisterComponent;
  let fixture: ComponentFixture<OrderStatusRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStatusRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderStatusRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
