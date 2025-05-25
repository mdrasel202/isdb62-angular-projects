import { Component, OnInit } from '@angular/core';
import { BankAccountService } from '../../service/bank-account.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { AccountResponce } from '../../model/bank_account.model';

@Component({
  selector: 'app-account-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './account-create.component.html',
  styleUrl: './account-create.component.css'
})
export class AccountCreateComponent implements OnInit{

  accounts: AccountResponce[] = [];
  message: string = '';

  constructor(private accountService: BankAccountService) {}

  ngOnInit(): void {
    this.loadAllAccounts();
  }

  loadAllAccounts(): void {
    this.accountService.getAllAccount().subscribe({
      next: (data) => this.accounts = data,
      error: (err) => console.error('Error fetching accounts', err)
    });
  }

  approveAccount(accountId: number): void {
  this.accountService.approveAccount(accountId).subscribe({
    next: (updatedAccount) => {
      this.message = 'Account approved successfully!';

      // Find and update the approved account in the local list
      const index = this.accounts.findIndex(acc => acc.id === updatedAccount.id);
      if (index !== -1) {
        this.accounts[index] = updatedAccount;
      }
    },
    error: (err) => {
      console.error('Error approving account', err);
      this.message = 'Error approving account.';
    }
  });
}



}
