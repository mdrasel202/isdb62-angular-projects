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

  // accounts: AccountResponce[] = [];
  // message: string = '';

  // constructor(private accountService: BankAccountService) {}

  // ngOnInit(): void {
  //   this.loadAllAccounts();
  // }

  // loadAllAccounts(): void {
  //   this.accountService.getAllAccount().subscribe({
  //     next: (data) => this.accounts = data,
  //     error: (err) => console.error('Error fetching accounts', err)
  //   });
  // }

  // approveAccount(accountId: number): void {
  //   this.accountService.approveAccount(accountId).subscribe({
  //     next: (updatedAccount) => {
  //       this.message = 'Account approved successfully!';
  //       const index = this.accounts.findIndex(acc => acc.id === updatedAccount.id);
  //       if (index !== -1) {
  //         this.accounts[index] = updatedAccount;
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Error approving account', err);
  //       this.message = 'Error approving account.';
  //     }
  //   });
  // }

  // // updateAccountStatus(account: AccountResponce): void {
  // //   this.accountService.updateAccountStatus(account.id, account.status).subscribe({
  // //     next: (updated) => {
  // //       this.message = `Status updated to ${account.status}`;
  // //     },
  // //     error: (err) => {
  // //       console.error('Error updating status', err);
  // //       this.message = 'Error updating account status.';
  // //     }
  // //   });
  // }





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


  // approveAccounts(accountId: number): void {
  //   this.accountService.approveAccount(accountId).subscribe({
  //     next: (data) => {
  //       this.accounts = data;
  //       this.message = 'Requested accounts approved successfully!';
  //     },
  //     error: (err) => {
  //       console.error('Error approving accounts', err);
  //       this.message = 'Error approving accounts.';
  //     }
  //   });
  // }
//   accounts : Account[] = [];
 

//   accountStatus = Object.values(AccountStatus);  // Dropdown options
//   accountType = Object.values(AccountType);

//   account: BankAccount ={
//     accountNumber: '',
//     availableBalance: 0,
//     openedDate: new Date(),
//     accountStatus: AccountStatus.ACTIVE,  // ✅ Default assigned
//     accountType: AccountType.SAVING,
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     address: ''
//   };

//   constructor(private bankAccountService : BankAccountService){}


//   ngOnInit(): void {
//     this.fetchAccounts();
//   }

//   fetchAccounts(): void{
//     this.bankAccountService.getAccounts().subscribe({
//       next: (data) => this.accounts = data,
//       error: (err) => console.error('Failed to load accounts:', err)
//     })
//   }

//   onSubmit(): void {
//   const newAccount = new BankAccount(
//     this.account.accountNumber,
//     this.account.availableBalance,
//     this.account.openedDate,
//     this.account.accountStatus,
//     this.account.accountType,
//     this.account.firstName,
//     this.account.lastName,
//     this.account.email,
//     this.account.phone,
//     this.account.address
//   );

//   this.bankAccountService.saveAccount(newAccount).subscribe(
//     (response) => {
//       console.log('Account created successfully', response);
//     },
//     (error) => {
//       console.error('Error creating account', error);
//     }
//   );
// }


//   formatDate(date: Date): string {
//   return new Date(date).toISOString().split('T')[0]; // e.g., "2025-05-13"
// }

}
