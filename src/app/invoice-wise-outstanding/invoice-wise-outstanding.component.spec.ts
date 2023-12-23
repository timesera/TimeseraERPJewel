import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceWiseOutstandingComponent } from './invoice-wise-outstanding.component';

describe('InvoiceWiseOutstandingComponent', () => {
  let component: InvoiceWiseOutstandingComponent;
  let fixture: ComponentFixture<InvoiceWiseOutstandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceWiseOutstandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceWiseOutstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
