import { TestBed } from '@angular/core/testing';

import { TimeseraerpserviceService } from './timeseraerpservice.service';

describe('TimeseraerpserviceService', () => {
  let service: TimeseraerpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeseraerpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
