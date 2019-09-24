import { TestBed } from '@angular/core/testing';

import { SalesorderService } from './salesorder.service';

describe('SalesorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesorderService = TestBed.get(SalesorderService);
    expect(service).toBeTruthy();
  });
});
