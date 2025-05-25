import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardRequest, CardResponse, GetAllInfo} from '../model/bank_card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardRequest = 'http://localhost:8081/cards/request';
  private cardCreate = 'http://localhost:8081/cards/create';
  private getAll = 'http://localhost:8081/cards/all';
  private rejectCar = 'http://localhost:8081/cards/reject';
  private updateCar = 'http://localhost:8081/cards/update';
  private approvedCard = 'http://localhost:8081/cards/approve';

  constructor(private http : HttpClient) { }

  requestCard(data: CardRequest): Observable<CardResponse>{
    return this.http.post<CardResponse>(this.cardRequest, data);
  }

  approveCard(data: CardRequest): Observable<CardResponse>{
    return this.http.post<CardResponse>(this.approvedCard, data);
  }

  getAllCard(): Observable<GetAllInfo[]>{
    return this.http.get<GetAllInfo[]>(this.getAll);
  }

  rejectCard(data: CardRequest): Observable<CardResponse> {
  return this.http.post<CardResponse>(this.rejectCar, data);
}

  updateCard(data: CardRequest): Observable<CardResponse> {
    return this.http.put<CardResponse>(this.updateCar, data);
  }

  getPendingCards(): Observable<CardResponse[]> {
  return this.http.get<CardResponse[]>('http://localhost:8081/cards/pending');
}

}
