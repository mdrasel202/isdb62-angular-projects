import { Component} from '@angular/core';
import { BankAccountService } from '../../service/bank-account.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass, NgFor } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-bank-account',
  imports: [FormsModule, NgFor, NgClass,CommonModule],
  templateUrl: './bank-account.component.html',
  styleUrl: './bank-account.component.css'
})
export class BankAccountComponent{
  
  id = Number(localStorage.getItem('id'));
  type : string = '';


  constructor(private bankAccountService : BankAccountService){}

accountRequest(){

  const requestBody = {
     userId: this.id,
     type: this.type

  }
  this.bankAccountService.requestAccount(requestBody).subscribe({
next: (res) =>{
  console.log("request sent successfully.", res);
}
  });
}


  // accounts : Account[] = [];
   
  
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
