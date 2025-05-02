import { Component } from '@angular/core';
import { Bankaccount } from '../modal/bankaccount';

declare var bootstrap: any;

@Component({
  selector: 'app-bank-account',
  imports: [],
  templateUrl: './bank-account.component.html',
  styleUrl: './bank-account.component.css'
})
export class BankAccountComponent {
  account : Bankaccount[]=[];

  isEditing : boolean = false;

  newBankaccount : Bankaccount = {
    account_id:0,
    account_number:'',
    account_balance:0,
    account_type:'',
    account_status:false,
    account_available_balance:0,
    account_date: new Date
  }

  openModal(bankAccount?: Bankaccount){
    if(bankAccount){
      this.newBankaccount = {...bankAccount};
      this.isEditing = true;
    }else{
      this.newBankaccount = new Bankaccount(0,'',0,'',false,0, new Date());
      this.isEditing = false;
    }

    const modalElement = document.getElementById('exampleModal');
    if(modalElement){
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
