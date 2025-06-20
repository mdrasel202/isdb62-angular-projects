import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WithdrawalTransaction, WithdrawRequest } from '../model/bank_withdrawal.model';

@Injectable({
  providedIn: 'root'
})
export class WithdrawalService {

  private apiUrl = 'http://localhost:8081/withdrawal';

  constructor(private http : HttpClient) { }

  withdrawal(requests: WithdrawRequest):Observable<any>{
    return this.http.post(`${this.apiUrl}`, requests);
  }

  getUserWithdrawal(accountNumber : string): Observable<WithdrawalTransaction[]>{
    return this.http.get<WithdrawalTransaction[]>(`${this.apiUrl}/user/${accountNumber}`);
  }

   getAllWithdrawal():Observable<WithdrawalTransaction[]>{
    return this.http.get<WithdrawalTransaction[]>(`${this.apiUrl}/admin`);
   }
}
