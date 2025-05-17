import { Component, OnInit } from '@angular/core';
import { AccountStatus } from '../../models/bank_account_status.enum';
import { AccountType } from '../../models/bank_account_type.enum';
import { BankAccountService } from '../../service/bank-account.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-account-create',
  imports: [FormsModule, NgFor, NgClass,CommonModule],
  templateUrl: './account-create.component.html',
  styleUrl: './account-create.component.css'
})
export class AccountCreateComponent implements OnInit{

  accounts : Account[] = [];
 

  accountStatus = Object.values(AccountStatus);  // Dropdown options
  accountType = Object.values(AccountType);

  account: BankAccount ={
    accountNumber: '',
    availableBalance: 0,
    openedDate: new Date(),
    accountStatus: AccountStatus.ACTIVE,  // ✅ Default assigned
    accountType: AccountType.SAVING,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor(private bankAccountService : BankAccountService){}


  ngOnInit(): void {
    this.fetchAccounts();
  }

  fetchAccounts(): void{
    this.bankAccountService.getAccounts().subscribe({
      next: (data) => this.accounts = data,
      error: (err) => console.error('Failed to load accounts:', err)
    })
  }

  onSubmit(): void {
  const newAccount = new BankAccount(
    this.account.accountNumber,
    this.account.availableBalance,
    this.account.openedDate,
    this.account.accountStatus,
    this.account.accountType,
    this.account.firstName,
    this.account.lastName,
    this.account.email,
    this.account.phone,
    this.account.address
  );

  this.bankAccountService.saveAccount(newAccount).subscribe(
    (response) => {
      console.log('Account created successfully', response);
    },
    (error) => {
      console.error('Error creating account', error);
    }
  );
}


  formatDate(date: Date): string {
  return new Date(date).toISOString().split('T')[0]; // e.g., "2025-05-13"
}

}
