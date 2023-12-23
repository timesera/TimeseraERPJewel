import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingDealersComponent } from './outstanding-dealers.component';

describe('OutstandingDealersComponent', () => {
  let component: OutstandingDealersComponent;
  let fixture: ComponentFixture<OutstandingDealersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingDealersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstandingDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
