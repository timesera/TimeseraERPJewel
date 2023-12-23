import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingCustomersComponent } from './outstanding-customers.component';

describe('OutstandingCustomersComponent', () => {
  let component: OutstandingCustomersComponent;
  let fixture: ComponentFixture<OutstandingCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstandingCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
