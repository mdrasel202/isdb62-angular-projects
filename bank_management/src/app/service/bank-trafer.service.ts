import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../user-admin/modal/transaction';
import { TransferRequest } from '../model/bank_transfer.model';

@Injectable({
  providedIn: 'root'
})
export class BankTraferService {

  private apiUrl = 'http://localhost:8081/bank';

  constructor(private http: HttpClient) {}

  transfer(request: TransferRequest): Observable<string> {
    return this.http.post(`${this.apiUrl}/transfer`, request, { responseType: 'text' });
  }

  getTransactions(accountId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/${accountId}/transactions`);
  }
}
