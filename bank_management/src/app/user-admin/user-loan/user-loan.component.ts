import { Component, OnInit } from '@angular/core';
import { LoanRequest, LoneResponse } from '../../model/bank_loan.model';
import { LoanService } from '../../service/loan.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Transaction } from '../modal/transaction';
import { BankTraferService } from '../../service/bank-trafer.service';

@Component({
  selector: 'app-user-loan',
  imports: [FormsModule],
  templateUrl: './user-loan.component.html',
  styleUrl: './user-loan.component.css'
})
export class UserLoanComponent{

  transact: Transaction[] = [];

  constructor(private transactionService: BankTraferService) {}

  loadTransactions(accountId: number) {
    this.transactionService.getTransactions(accountId).subscribe(data => {
      this.transact = data;
    });
  }
  
  
}
