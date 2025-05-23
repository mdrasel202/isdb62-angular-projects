import { Component, OnInit } from '@angular/core';
import { LoanRequest, LoneResponse } from '../../model/bank_loan.model';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { BankLoanService } from '../../service/bank-loan.service';

@Component({
  selector: 'app-user-loan',
  imports: [FormsModule, NgFor],
  templateUrl: './user-loan.component.html',
  styleUrl: './user-loan.component.css'
})
export class UserLoanComponent implements OnInit{

  userId: number = 1;

  loan : LoneResponse[] = [];

  constructor(private bankLoanService : BankLoanService){}
  
  ngOnInit(): void {
    this.loadLoans();
  }

  // loanCreate(): void{
  //   const 
    loanRequest : LoanRequest= {
      userId : this.userId,
      accountNumber : '',
      amount : 0,
      interestRate : 0,
      dueDate : new Date
    };
  
    requestLoan(): void{
      this.loanRequest.userId = this.userId;
      this.bankLoanService.requestLoan(this.loanRequest).subscribe(() => this.loadLoans());
    }

    loadLoans(): void{
      this.bankLoanService.getUserLoans(this.userId).subscribe((data) => this.loan = data);
    }

    cancelLoan():void{

    }
    //  cancelLoan(id: number): void {
    //  this.loanService.cancelLoanByUser(id).subscribe(() => this.loadLoans());
}
