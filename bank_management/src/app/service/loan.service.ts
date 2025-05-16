import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanRequest, LoneResponse } from '../model/bank_loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'http://localhost:8081/loans/request';
  private createAdmin = 'http://localhost:8081/loans/request/create';
  private getAll = 'http://localhost:8081/loans/all';

  constructor(private http: HttpClient) { }

  reqestLoan(loanRequest: LoanRequest):Observable<any>{
    return  this.http.post(this.apiUrl, loanRequest);
  }

  addminCrateLoan(adminLoanRequest:LoneResponse):Observable<any>{
    return this.http.post(this.createAdmin, adminLoanRequest);
  }

  getAllLoans():Observable<LoneResponse[]>{
    return this.http.get<LoneResponse[]>(this.getAll);
  }
}
