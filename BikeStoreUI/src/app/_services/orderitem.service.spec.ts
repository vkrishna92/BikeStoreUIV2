import { TestBed } from '@angular/core/testing';

import { OrderitemService } from './orderitem.service';

describe('OrderitemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderitemService = TestBed.get(OrderitemService);
    expect(service).toBeTruthy();
  });
});
