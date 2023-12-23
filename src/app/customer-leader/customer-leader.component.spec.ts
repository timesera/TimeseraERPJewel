import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLeaderComponent } from './customer-leader.component';

describe('CustomerLeaderComponent', () => {
  let component: CustomerLeaderComponent;
  let fixture: ComponentFixture<CustomerLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
