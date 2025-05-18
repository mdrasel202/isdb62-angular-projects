import { TestBed } from '@angular/core/testing';

import { BankTraferService } from './bank-trafer.service';

describe('BankTraferService', () => {
  let service: BankTraferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankTraferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
