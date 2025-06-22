import { Component, OnInit } from '@angular/core';
import { LoanRequest, LoneResponse } from '../../model/bank_loan.model';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { BankLoanService } from '../../service/bank-loan.service';

@Component({
  selector: 'app-user-loan',
  imports: [FormsModule, NgFor, NgIf, NgClass, CommonModule],
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

     canceUserlLoan(id: number): void {
     this.bankLoanService.cancelLoan(id).subscribe({
      next : (response) => {
        alert('Loan cancelled by user')
        this.refreshLoans();
      },
      error: (error) => {
        console.error('Cancel error', error)
      }
     });
  }

  refreshLoans(): void{

  }
  
  getStatusClass(status: string): string {
  switch (status) {
    case 'PENDING':
      return 'pending-status';
    case 'APPROVED':
      return 'approved-status';
    case 'CANCEL':
      return 'cancel-status';
    default:
      return '';
  }
}

}