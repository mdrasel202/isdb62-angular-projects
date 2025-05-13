import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, BankAccount } from '../model/bank_account.model';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

   private baseUrl = 'http://localhost:8081/bank';

  constructor(private http: HttpClient) { }

   // POST: Create new account
  saveAccount(account: BankAccount):Observable<any>{
    return this.http.post(this.baseUrl, account);
  }

   // GET: Fetch all accounts
  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl);
  }
}
