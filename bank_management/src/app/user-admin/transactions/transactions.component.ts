import { Component, Input, NgModule, OnInit } from '@angular/core';
import { BankTraferService } from '../../service/bank-trafer.service';
import { Transactions, TransferRequest } from '../../model/bank_transfer.model';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';;

declare var bootstrap: any;

@Component({
  selector: 'app-transactions',
  imports: [FormsModule, NgIf, ReactiveFormsModule, NgFor, CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{

  transact: Transactions[] = [];

  transferForm: FormGroup;
  message: string = '';
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private transactionService: BankTraferService
  ) {
    this.transferForm = this.fb.group({
      fromAccountNumber: ['', Validators.required],
      toAccountNumber: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onTransfer(): void {
    if (this.transferForm.invalid) return;

    const request: TransferRequest = this.transferForm.value;

    this.transactionService.transfer(request).subscribe({
      next: (res) => {
        this.message = res;
        this.error = '';
        this.transferForm.reset();

        // 🔁 Reload transaction list after successful transfer
      const userId = Number(localStorage.getItem("id"));
      this.loadTransactions(userId);
      },
      error: (err) => {
        this.error = err.error;
        this.message = '';
      }
    });
  }

  ngOnInit(): void {
    const userId = Number(localStorage.getItem("id"));
    this.loadTransactions(userId);
  }

  loadTransactions(accountId : number){
    this.transactionService.getTransactions(accountId).subscribe(data =>{
      this.transact = data;
    })
  }
  

  }




  // transaction: Transaction[]=[];

  // isEditing: boolean = false;

  // newtransaction: Transaction ={
  //   tranaction_id:0,
  //   tranaction_date:new Date,
  //   tranaction_from:'',
  //   tranaction_amount:0,
  //   tranaction_account:'',
  //   tranaction_status:'',
  //   tranaction_payment:''
  // }

  // openModal(transaction?: Transaction){
  //   if(transaction){
  //     this.newtransaction = {...transaction};
  //     this.isEditing = true;
  //   }else{
  //     this.newtransaction = new Transaction(0,new Date(),'',0,'','','');
  //     this.isEditing = false;
  //   }

  //   const modalElement = document.getElementById('tranaction');
  //   if(modalElement){
  //     const modal = new bootstrap.Modal(modalElement);
  //     modal.show();
  //   }
  // }

  // @Input() isOpen = false;

  // closeModal() {
  //   this.isOpen = false;
  // }

