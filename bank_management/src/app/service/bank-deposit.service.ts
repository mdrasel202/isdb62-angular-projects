import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankDepositRequest, BankDepositResponse } from '../model/bank_deposit.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankDepositService {

  private baseUrl = 'http://localhost:8081/bankdeposit';

  constructor(private http : HttpClient) { }

  createDeposit(request : BankDepositRequest): Observable<BankDepositResponse>{
    return this.http.post<BankDepositResponse>(`${this.baseUrl}/create`, request);
  }

  getDepositsByAccount(accountNumber : string): Observable<BankDepositResponse[]>{
    return this.http.get<BankDepositResponse[]>(`${this.baseUrl}/account/${accountNumber}`);
  }

  getPendingDeposits(): Observable<BankDepositResponse[]>{
    return this.http.get<BankDepositResponse[]>(`${this.baseUrl}/pending`);
  }

  approveDeposit(id : string): Observable<string>{
    return this.http.put(`${this.baseUrl}/approve/${id}`, {}, {responseType: 'text'});
  }

  cancelDeposit(id : string): Observable<string>{
    return this.http.put(`${this.baseUrl}/cancel/${id}`, {}, {responseType: 'text'});
  }

  getAll():Observable<BankDepositResponse[]>{
    return this.http.get<BankDepositResponse[]>(`${this.baseUrl}/getAll`);
  }
}
