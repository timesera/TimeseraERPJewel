import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWiseSalesComponent } from './counter-wise-sales.component';

describe('CounterWiseSalesComponent', () => {
  let component: CounterWiseSalesComponent;
  let fixture: ComponentFixture<CounterWiseSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterWiseSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterWiseSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
