import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardRequest, CardResponse } from '../model/bank_card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardRequest = 'http://localhost:8081/cards/request';
  private cardCreate = 'http://localhost:8081/cards/create';
  private getAll = 'http://localhost:8081/cards/all';
  private rejectCar = 'http://localhost:8081/cards/reject'
  private updateCar = 'http://localhost:8081/cards/update'

  constructor(private http : HttpClient) { }

  requestCard(data: CardRequest): Observable<any>{
    return this.http.post(this.cardRequest, data);
  }

  approveCard(data: CardRequest): Observable<any>{
    return this.http.post(this.cardCreate, data);
  }

  getAllCard(): Observable<CardResponse[]>{
    return this.http.get<CardResponse[]>(this.getAll);
  }

  rejectCard(data: CardRequest): Observable<any> {
  return this.http.post(this.rejectCar, data);
}

  updateCard(data: CardRequest): Observable<CardResponse> {
    return this.http.put<CardResponse>(this.updateCar, data);
  }

}
