import { Component, NgModule, OnInit } from '@angular/core';
import { LoneResponse } from '../../model/bank_loan.model';
import { FormsModule} from '@angular/forms';
import { BankLoanService } from '../../service/bank-loan.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-loan',
  imports: [ FormsModule, NgFor, NgIf],
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent implements OnInit{

  // approvedAmount : number = 0;
  // approvedLoan? : BankLoanService;

 pendingLoan : LoneResponse[] = [];
 approveAmount : number = 0;
 allLoans : LoneResponse[] = [];

 constructor(private bankLoanService : BankLoanService){};

 ngOnInit(): void {
    this.loanPendingLoans();
    this.loadAllloans();
  }

  loanPendingLoans(): void{
    this.bankLoanService.getPendingLoans().subscribe(loans => this.pendingLoan = loans);
  }
  
  approveLoan(id: number, amount: number | undefined): void {
  if (amount === undefined || amount <= 0) {
    alert('Please enter a valid approved amount.');
    return;
  }

  this.bankLoanService.approveLoan(id, amount).subscribe({
    next: () => {
      alert("Loan Approved");
      this.loanPendingLoans();
      this.loadAllloans();
    },
    error: (err) => {
      console.error("Approval failed", err);
      alert("Approval failed. See console for details.");
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

  loadAllloans(): void{
    this.bankLoanService.getAllLoans().subscribe(res => {
  console.log("Loans: ", res); // <-- Debug
  this.allLoans = res;
});
  }

  refreshLoans(): void{

  }
}
