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
   private getAll = 'http://localhost:8081/bank/getAll'

  constructor(private http: HttpClient) { }

   // POST: Create new account
  requestAccount(account: {userId: number; type: string}):Observable<any>{
    return this.http.post(this.accountRequest, account);
  }

  getAllAccount():Observable<AccountResponce[]>{
    return this.http.get<AccountResponce[]>(this.getAll);
  }

  approveAccount(id: number): Observable<AccountResponce> {
  const url = `http://localhost:8081/bank/approve/${id}`;
  return this.http.post<AccountResponce>(url, null);
}


  // approveAccount(id: number): Observable<AccountResponce[]> {
  //   return this.http.post<AccountResponce[]>(this.approve);
  // }

//   approveAccount(id: number): Observable<AccountResponce> {
//   const url = `${this.approve}/${id}`;
//   return this.http.post<AccountResponce>(url, null);
// }
}
