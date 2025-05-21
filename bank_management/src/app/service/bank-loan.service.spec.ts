import { TestBed } from '@angular/core/testing';

import { BankLoanService } from './bank-loan.service';

describe('BankLoanService', () => {
  let service: BankLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
