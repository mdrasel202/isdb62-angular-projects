import { Component, NgModule, OnInit } from '@angular/core';
import { LoneResponse } from '../../model/bank_loan.model';
import { FormsModule} from '@angular/forms';
import { BankLoanService } from '../../service/bank-loan.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-loan',
  imports: [ FormsModule, NgFor],
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent implements OnInit{

  // approvedAmount : number = 0;
  // approvedLoan? : BankLoanService;

 pendingLoan : LoneResponse[] = [];

 constructor(private bankLoanService : BankLoanService){};

 ngOnInit(): void {
    this.loanPendingLoans();
  }

  loanPendingLoans(): void{
    this.bankLoanService.getPendingLoans().subscribe((loanRequest) => this.pendingLoan = loanRequest);
  }

  approveLoan(loan : LoneResponse): void{
    this.bankLoanService.approveLoan(loan.loanId, loan.approvedAmount).subscribe(() => this.loanPendingLoans());
  }
}
