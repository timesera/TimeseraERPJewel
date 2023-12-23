import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVistingInfoComponent } from './customer-visting-info.component';

describe('CustomerVistingInfoComponent', () => {
  let component: CustomerVistingInfoComponent;
  let fixture: ComponentFixture<CustomerVistingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerVistingInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerVistingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
