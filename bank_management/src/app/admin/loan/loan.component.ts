import { Component, NgModule, OnInit } from '@angular/core';
import { LoneResponse } from '../../model/bank_loan.model';
import { FormsModule} from '@angular/forms';
import { BankLoanService } from '../../service/bank-loan.service';
import { NgFor, NgIf } from '@angular/common';

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
    this.bankLoanService.getPendingLoans().subscribe(loans => this.pendingLoan = loans);
  }

  // approveLoan(loan : LoneResponse): void{
  //   this.bankLoanService.approveLoan(loan.loanId, loan.approvedAmount).subscribe(() => {
  //     alert('Loan Approved');
  //     this.loanPendingLoans()});
  // }
  // admin-loan.component.ts
approveLoan(loan: LoneResponse): void {
  if (!loan.approvedAmount || loan.approvedAmount <= 0) {
    alert("Please enter a valid approved amount.");
    return;
  }

  this.bankLoanService.approveLoan(loan.loanId, loan.approvedAmount).subscribe({
    next: () => {
      alert('Loan Approved');
      this.loanPendingLoans();
    },
    error: (err) => {
      console.error('Error approving loan:', err);
      alert('Approval failed. See console.');
    }
  });
}


  cancelLoanAdmin(id : number): void{
    this.bankLoanService.cancelLoan(id).subscribe({
      next : (response) => {
        alert('Loan cancelled by admin');
        this.refreshLoans();
      },
      error: (error) => {
        console.error('Cancle error (admin)', error);
      }
    
    });
  }

  refreshLoans(): void{

  }
}
