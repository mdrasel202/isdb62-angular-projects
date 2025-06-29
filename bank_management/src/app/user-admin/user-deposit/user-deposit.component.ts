import { Component, OnInit } from '@angular/core';
import { BankDepositRequest, BankDepositResponse, BankDepositStatus } from '../../model/bank_deposit.model';
import { BankDepositService } from '../../service/bank-deposit.service';
import { FormsModule} from '@angular/forms';
import { CommonModule,  NgIf } from '@angular/common';

@Component({
  selector: 'app-user-deposit',
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './user-deposit.component.html',
  styleUrl: './user-deposit.component.css'
})
export class UserDepositComponent implements OnInit{

  BankDepositStatus = BankDepositStatus;

 request: BankDepositRequest = {
    accountNumber: '',
    depositAmount: 0,
    bankDepositStatus : BankDepositStatus.SUCCESS
  };

  deposits: BankDepositResponse[] = [];
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private depositService: BankDepositService) {}

  ngOnInit(): void {
  }

  createDeposit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    this.depositService.createDeposit(this.request).subscribe({
      next: (res) => {
        this.successMessage = 'Deposit request submitted successfully!';
        this.getDeposits(); // refresh
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Failed to submit deposit.';
      }
    });
  }

  getDeposits(): void {
    if (!this.request.accountNumber) {
      this.errorMessage = 'Please enter an account number first.';
      return;
    }

    this.depositService.getDepositsByAccount(this.request.accountNumber).subscribe({
      next: (res) => {
        this.deposits = res;
      },
      error: (err) => {
        this.errorMessage = 'Error fetching deposits.';
      }
    });
  }

  getAlls(): void{
    this.depositService.getAll().subscribe({
      next: (res) => this.deposits = res,
      error: (err) => this.errorMessage = 'Failed to load deposits.'
    });
  }
}
