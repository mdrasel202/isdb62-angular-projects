import { Component, OnInit } from '@angular/core';
import { WithdrawalTransaction } from '../../model/bank_withdrawal.model';
import { WithdrawalService } from '../../service/withdrawal.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-withdrawal',
  imports: [NgIf, NgFor, CommonModule, FormsModule],
  templateUrl: './admin-withdrawal.component.html',
  styleUrl: './admin-withdrawal.component.css'
})
export class AdminWithdrawalComponent implements OnInit{

  withdrawals: WithdrawalTransaction[] = [];

  constructor(private withdrawalService: WithdrawalService){};

  ngOnInit(): void {
    this.loadAllWithdrawals();
  }

  loadAllWithdrawals(): void{
    this.withdrawalService.getAllWithdrawal().subscribe({
      next: (data) => {
        this.withdrawals = data;
      },
      error: (err) => {
        console.error('Error loading withdrawals', err);
      }
    })
  }
}
