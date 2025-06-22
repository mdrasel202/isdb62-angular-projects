import { Component, OnInit } from '@angular/core';
import { BankDepositResponse } from '../../model/bank_deposit.model';
import { BankDepositService } from '../../service/bank-deposit.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-deposit',
  imports: [NgIf, NgFor, CommonModule, FormsModule],
  templateUrl: './admin-deposit.component.html',
  styleUrl: './admin-deposit.component.css'
})
export class AdminDepositComponent implements OnInit{
  pendingDeposit : BankDepositResponse [] = []; 
  allDeposits: BankDepositResponse[] = [];
  loading = false;
  error = '';

  constructor(private depositService : BankDepositService){};

  ngOnInit(): void {
    this.loadPendingDeposits();
    this.loadAllDeposit();
  }

  loadPendingDeposits(): void {
    this.loading = true;
    this.depositService.getPendingDeposits().subscribe({
      next: (res) => {
        this.pendingDeposit = res;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load deposits';
        this.loading = false;
      }
    });
  }

  approveDeposit(id: number): void {
    this.depositService.approveDeposit(id.toString()).subscribe({
      next: () => {
        alert('Deposit approved');
        this.loadPendingDeposits(); // refresh list
      },
      error: () => alert('Failed to approve deposit')
    });
  }

  cancelDeposit(id: number): void {
    this.depositService.cancelDeposit(id.toString()).subscribe({
      next: () => {
        alert('Deposit cancelled');
        this.loadPendingDeposits(); // refresh list
      },
      error: () => alert('Failed to cancel deposit')
    });
  }

  loadAllDeposit(): void {
    this.depositService.getAll().subscribe({
      next: (res) => {
        this.allDeposits = res;
      },
      error: () => {
        this.error = 'Failed to load all deposits';
      }
    });
  }
}
