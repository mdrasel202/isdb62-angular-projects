import { Component} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccountRequest, AccountResponce } from '../../model/bank_account.model';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { BankAccountService } from '../../service/bank-account.service';

declare var bootstrap: any;

@Component({
  selector: 'app-bank-account',
  imports: [FormsModule, ReactiveFormsModule,  FormsModule, NgFor, NgClass],
  templateUrl: './bank-account.component.html',
  styleUrl: './bank-account.component.css'
})
export class BankAccountComponent{

  // alertMessage: string = '';
  // showAlert: boolean = false;

  accounts: AccountResponce[] = [];
  userId = 1; // from auth/session

accountRequest: AccountRequest = {
  userId: this.userId,
  type: 'SAVING',
  balance: 0,
  name: '',
  requestDate : new Date() // today yyyy-MM-dd
};

constructor(private accountService: BankAccountService) {}

requestAccount() {
  this.accountService.requestAccount(this.accountRequest).subscribe({
    next: (res) => {
      alert('Account requested successfully');
      // this.alertMessage = '✅ Account requested successfully!';
      // this.showAlert = true;
      this.loadUserAccounts();
    },
    error: (err) => {
      console.error(err);
      alert('Failed to request account');
      // if(err.status === 409 || (err.error && err.error.message?.includes('already exists'))){
      //   this.alertMessage = '⚠️ Account with this information already exists.';
      // } else {
      //   this.alertMessage = '❌ Failed to request account.';
      // }
      // this.showAlert = true;
    }
  });
}

loadUserAccounts() {
  this.accountService.getAllAccount().subscribe(accounts => {
    this.accounts = accounts;
  });
}

ngOnInit() {
  this.loadUserAccounts();
}

getStatus(status : string): any{
  switch(status){
    case 'REQUESTED' :
      return 'requested-status';
    case 'ACTIVE' :
      return 'active-status';  
  }
 }

//  closeAlert(){
//   this.showAlert = false;
//  }
}
