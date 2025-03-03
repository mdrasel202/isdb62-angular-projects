import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "http://localhost:8081/rasel";

  constructor(private http:HttpClient) { }

  userApi():Observable<String>{
    let params : HttpParams = new HttpParams();
    params = params.append('xy' , 'rasel');
    // params = params.append('father', 'kjfdsfh');
    params = params.append('bb', 28);
    return this.http.get(this.apiUrl, {params: params, responseType: 'text'});
  }
}
