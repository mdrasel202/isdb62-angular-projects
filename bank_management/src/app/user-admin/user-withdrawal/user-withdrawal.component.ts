import { Component } from '@angular/core';
import { WithdrawalTransaction, WithdrawRequest } from '../../model/bank_withdrawal.model';
import { WithdrawalService } from '../../service/withdrawal.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-withdrawal',
  imports: [NgIf, CommonModule, FormsModule],
  templateUrl: './user-withdrawal.component.html',
  styleUrl: './user-withdrawal.component.css'
})
export class UserWithdrawalComponent {
  accountNumber = '';
  amount = 0;
  successMessage = '';
  errorMessage = '';
  withdrawals: WithdrawalTransaction[] = [];

  constructor(private withdrawalService: WithdrawalService) {}

  ngOnInit(): void {
    this.getAlls();
  }

  withdraw(): void {
    this.successMessage = '';
    this.errorMessage = '';

    const request: WithdrawRequest = {
      accountNumber: this.accountNumber,
      amount: this.amount
    };

    this.withdrawalService.withdrawal(request).subscribe({
  next: (res) => {
    this.successMessage = res.message; 
    this.loadWithdrawals();
  },
  error: (err) => {
    this.errorMessage = err.error?.error || 'Something went wrong';
    this.loadWithdrawals();
  }
});
  }

  loadWithdrawals(): void {
    this.withdrawalService.getUserWithdrawal(this.accountNumber).subscribe(data => {
      this.withdrawals = data;
    });
  }

  getAlls(): void{
    this.withdrawalService.getAllWithdrawal().subscribe({
      next: (data) => {
        this.withdrawals = data;
      },
      error: (err) => {
        console.error('Error loading all withdrawals', err);
      }
    })
  }
}
