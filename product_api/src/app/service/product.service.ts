import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'localhost:8080/api/product';

  constructor(private http:HttpClient) {}

  getSpells(): Observable<any>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
