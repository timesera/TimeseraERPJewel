import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerLedgerComponent } from './dealer-ledger.component';

describe('DealerLedgerComponent', () => {
  let component: DealerLedgerComponent;
  let fixture: ComponentFixture<DealerLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerLedgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
