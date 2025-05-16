import { Component, NgModule, OnInit } from '@angular/core';
import {LoanStatus, LoneResponse } from '../../model/bank_loan.model';
import { LoanService } from '../../service/loan.service';
import { NgFor } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-loan',
  imports: [NgFor, FormsModule],
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent implements OnInit{

  allLoans: LoneResponse[] = [];

  loanStatus = Object.values(LoanStatus);

  constructor(private loanService: LoanService) {}


  loneResponse: LoneResponse = {
    userId: 0,
    accountNumber: '',
    amount: 0,
    approvedAmount: 0,
    availableAmount: 0,
    interestRate: 0,
    dueDate: new Date(),
    acceptDate: new Date(),
    status: LoanStatus.PENDING
  };

  ngOnInit(): void {
    this.getAllLoans();
  }

  getAllLoans(): void {
    this.loanService.getAllLoans().subscribe({
      next: (data) => (this.allLoans = data),
      error: (err) => console.error('Failed to load loans', err)
    });
  }

  onSubmit():void{
   const newLoan = new LoneResponse(
      this.loneResponse.userId,
      this.loneResponse.accountNumber,
      this.loneResponse.amount,
      this.loneResponse.approvedAmount,
      this.loneResponse.availableAmount,
      this.loneResponse.interestRate,
      this.loneResponse.dueDate,
      this.loneResponse.acceptDate,
      this.loneResponse.status
   );
   this.loanService.addminCrateLoan (newLoan).subscribe(
    (response) => {
      console.log('Loan create successfully', response);
    },
    (error) => {
      console.error('Error creating account', error);
    }
   )
  }

  // onSubmit(): void {
  //   this.loneResponse.acceptDate = new Date(); // set current date

  //   this.loanService.addminCrateLoan(this.loneResponse).subscribe({
  //     next: (response) => {
  //       console.log('Loan created successfully', response);
  //       this.getAllLoans();
  //       this.resetForm();
  //     },
  //     error: (err) => {
  //       console.error('Error creating loan', err);
  //     }
  //   });
  // }

  // resetForm(): void {
  //   this.loneResponse = {
  //     userId: 0,
  //     accountNumber: '',
  //     amount: 0,
  //     approvedAmount: 0,
  //     availableAmount: 0,
  //     interestRate: 0,
  //     dueDate: new Date(),
  //     acceptDate: new Date(),
  //     status: LoanStatus.PENDING
  //   };
  // }
}
