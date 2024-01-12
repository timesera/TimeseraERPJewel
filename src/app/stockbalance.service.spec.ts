import { TestBed } from '@angular/core/testing';

import { StockbalanceService } from './stockbalance.service';

describe('StockbalanceService', () => {
  let service: StockbalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockbalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
