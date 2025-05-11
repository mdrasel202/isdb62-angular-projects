import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BankAccount } from '../model/bank_account.model';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

   private baseUrl = 'http://localhost:8081/bank';

  constructor(private http: HttpClient) { }

  saveAccount(data: BankAccount):Observable<any>{
    return this.http.post(this.baseUrl, data);
  }
}
