import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanRequest, LoneResponse } from '../model/bank_loan.model';

@Injectable({
  providedIn: 'root'
})
export class BankLoanService {

  private loanRequest = 'http://localhost:8081/loans/request';
  private loanPending = 'http://localhost:8081/loans/pending';
  // private approvedLoan = 'http://localhost:8081/loans/approved';
  private baseUrl = 'http://localhost:8081/loans';

  constructor( private http: HttpClient) { }

  requestLoan(loan : LoanRequest):Observable<LoneResponse>{
    return this.http.post<LoneResponse>(this.loanRequest, loan);
  }

  getUserLoans(userId : number):Observable<LoneResponse[]>{
    return this.http.get<LoneResponse[]>(`${this.baseUrl}/user/${userId}`);
  }

  getPendingLoans():Observable<LoneResponse[]>{
    return this.http.get<LoneResponse[]>(this.loanPending);
  }

  approveLoan(loanId : number, approvedAmount : number): Observable<LoneResponse>{
    return this.http.post<LoneResponse>(`${this.baseUrl}/approved/${loanId}?amount=${approvedAmount}`, {});
  }

//   approveLoan(id: number, amount: number): Observable<any> {
//   return this.http.post(`${this.baseUrl}/approved/${id}?amount=${amount}`, null);
// }


  cancelLoan(id : number):Observable<LoneResponse>{
    return this.http.post<LoneResponse>(`${this.baseUrl}/cancel/${id}`, {});
  }

  getAllLoans(): Observable<LoneResponse[]>{
    return this.http.get<LoneResponse[]>(`${this.baseUrl}/all`);
  }
}
