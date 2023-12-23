import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNetSummaryComponent } from './counter-net-summary.component';

describe('CounterNetSummaryComponent', () => {
  let component: CounterNetSummaryComponent;
  let fixture: ComponentFixture<CounterNetSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterNetSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterNetSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
