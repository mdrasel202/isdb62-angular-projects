import { Component, Input } from '@angular/core';
import { Transaction } from '../modal/transaction';

declare var bootstrap: any;

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  transaction: Transaction[]=[];

  isEditing: boolean = false;

  newtransaction: Transaction ={
    tranaction_id:0,
    tranaction_date:new Date,
    tranaction_from:'',
    tranaction_amount:0,
    tranaction_account:'',
    tranaction_status:'',
    tranaction_payment:''
  }

  openModal(transaction?: Transaction){
    if(transaction){
      this.newtransaction = {...transaction};
      this.isEditing = true;
    }else{
      this.newtransaction = new Transaction(0,new Date(),'',0,'','','');
      this.isEditing = false;
    }

    const modalElement = document.getElementById('tranaction');
    if(modalElement){
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // @Input() isOpen = false;

  // closeModal() {
  //   this.isOpen = false;
  // }
}
