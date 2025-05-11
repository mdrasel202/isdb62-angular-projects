import { Component } from '@angular/core';
import { BankAccount } from '../../model/bank_account.model';
import { AccountStatus } from '../../models/bank_account_status.enum';
import { AccountType } from '../../models/bank_account_type.enum';
import { BankAccountService } from '../../service/bank-account.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-account-create',
  imports: [FormsModule, NgFor],
  templateUrl: './account-create.component.html',
  styleUrl: './account-create.component.css'
})
export class AccountCreateComponent {

  accountStatuses = Object.values(AccountStatus);  // Dropdown options
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

  onSubmit(): void{

    this.bankAccountService.saveAccount(this.account).subscribe(
      response => {
        console.log('Account create successfully', response);
      },
      error =>{
        console.error('Error creating account', error);
      }
      
    );
  }

}
