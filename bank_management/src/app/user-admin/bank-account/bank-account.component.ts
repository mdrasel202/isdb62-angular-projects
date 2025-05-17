import { Component} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountRequest, AccountResponce } from '../../model/bank_account.model';
import { NgFor, NgIf } from '@angular/common';
import { BankAccountService } from '../../service/bank-account.service';

declare var bootstrap: any;

@Component({
  selector: 'app-bank-account',
  imports: [FormsModule, ReactiveFormsModule,  FormsModule, NgFor ],
  templateUrl: './bank-account.component.html',
  styleUrl: './bank-account.component.css'
})
export class BankAccountComponent{

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
      this.loadUserAccounts();
    },
    error: (err) => {
      console.error(err);
      alert('Failed to request account');
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


  // accountForm: FormGroup;
  // message: string = '';

  // constructor(
  //   private fb: FormBuilder,
  //   private accountService: BankAccountService
  // ) {
  //   this.accountForm = this.fb.group({
  //     userId: ['', Validators.required],
  //     type: ['SAVING', Validators.required]
  //   });
  // }

  // onSubmit(): void {
  //   if (this.accountForm.valid) {
  //     const requestData: AccountRequest = this.accountForm.value;

  //     this.accountService.requestAccount(requestData).subscribe({
  //       next: () => {
  //         this.message = 'Account request submitted successfully.';
  //         this.accountForm.reset({ type: 'SAVING' });
  //       },
  //       error: (err) => {
  //         console.error('Error:', err);
  //         this.message = 'Failed to submit account request.';
  //       }
  //     });
  //   }
  // }
  
//   id = Number(localStorage.getItem('id'));
//   type : string = '';


//   constructor(private bankAccountService : BankAccountService){}

// accountRequest(){

//   const requestBody = {
//      userId: this.id,
//      type: this.type

//   }
//   this.bankAccountService.requestAccount(requestBody).subscribe({
// next: (res) =>{
//   console.log("request sent successfully.", res);
// }
//   });
}
