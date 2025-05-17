import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountRequest, AccountResponce } from '../model/bank_account.model';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

   private approve = 'http://localhost:8081/bank/approve';
   private accountRequest = 'http://localhost:8081/bank/request'
   private getAll = 'http://localhost:8081/bank/requests'

  constructor(private http: HttpClient) { }

   // POST: Create new account
  requestAccount(account: {userId: number; type: string}):Observable<any>{
    return this.http.post(this.accountRequest, account);
  }

  getAllAccount():Observable<AccountResponce[]>{
    return this.http.get<AccountResponce[]>(this.getAll);
  }


  // approveAccount(data : ): Observable<Account[]> {
  //   return this.http.get<Account[]>(this.baseUrl);
  // }
}
