import { Component, OnInit } from '@angular/core';
import { LoanRequest, LoneResponse } from '../../model/bank_loan.model';
import { LoanService } from '../../service/loan.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-loan',
  imports: [FormsModule, NgFor],
  templateUrl: './user-loan.component.html',
  styleUrl: './user-loan.component.css'
})
export class UserLoanComponent implements OnInit{

  userLoan : LoneResponse[] = [];

  loanRequest: LoanRequest = {
    userId: 0,
    accountNumber: '',
    amount: 0,
    interestRate: 0,
    dueDate: new Date()
  };

  constructor(private loanService: LoanService) {}
  
  ngOnInit(): void {
    this.getAllLoans();
    // this.loadUserLoans();
  }

  submitLoanRequest(form: any): void {
    if (form.valid) {
      this.loanService.reqestLoan(this.loanRequest).subscribe({
        next: () => alert('Loan request submitted successfully'),
        error: (err) => console.error('Loan request failed', err)
      });
    }
  }


  getAllLoans(): void {
    this.loanService.getAllLoans().subscribe({
      next: (data) => (this.userLoan = data),
      error: (err) => console.error('Failed to load loans', err)
    });
  }


  // loadUserLoans(): void {
  //   // Optionally filter by userId if backend returns all
  //   this.loanService.getAllLoans().subscribe({
  //     next: (loans) => {
  //       const currentUserId = this.loanRequest.userId;
  //       this.userLoan = loans.filter(l => l.userId === currentUserId);
  //     },
  //     error: (err) => console.error('Failed to fetch user loans', err)
  //   });
  // }
}
