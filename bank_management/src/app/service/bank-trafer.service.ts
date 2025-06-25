import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transactions, TransferRequest } from '../model/bank_transfer.model';

@Injectable({
  providedIn: 'root'
})
export class BankTraferService {

  private apiUrl = 'http://localhost:8081/bank';

  constructor(private http: HttpClient) {}

  transfer(request: TransferRequest): Observable<string> {
    return this.http.post(`${this.apiUrl}/transfer`, request, { responseType: 'text' });
  }

  getTransactions(accountId: number): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(`${this.apiUrl}/${accountId}/transactions`);
  }

   // ✅ Request to /getAlls
  getAllTransactions(): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(`${this.apiUrl}/getAlls`);
  }
}
