import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerreceiptregisterComponent } from './customerreceiptregister.component';

describe('CustomerreceiptregisterComponent', () => {
  let component: CustomerreceiptregisterComponent;
  let fixture: ComponentFixture<CustomerreceiptregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerreceiptregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerreceiptregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
