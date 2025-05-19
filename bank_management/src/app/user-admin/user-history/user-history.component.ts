import { Component, OnInit } from '@angular/core';
import { Transactions } from '../../model/bank_transfer.model';
import { BankTraferService } from '../../service/bank-trafer.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-history',
  imports: [NgFor],
  templateUrl: './user-history.component.html',
  styleUrl: './user-history.component.css'
})
export class UserHistoryComponent implements OnInit {
   transact: Transactions[] = [];

  constructor(private transactionService: BankTraferService) {}
  ngOnInit(): void {
    const userId= Number(localStorage.getItem('id'));
    this.loadTransactions(userId);
  }

  loadTransactions(accountId: number) {
    this.transactionService.getTransactions(accountId).subscribe(data => {
      this.transact = data;
    });
  }
  
}
