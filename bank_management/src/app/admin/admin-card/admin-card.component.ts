import { Component } from '@angular/core';
import { Cards } from '../../user-admin/modal/cards';
import { CardRequest, CardResponse } from '../../model/bank_card.model';
import { CardService } from '../../service/card.service';
import { NgFor } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-admin-card',
  imports: [NgFor],
  templateUrl: './admin-card.component.html',
  styleUrl: './admin-card.component.css'
})
export class AdminCardComponent {
  requestedCards: CardResponse[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.loadRequestedCards();
  }

  loadRequestedCards(): void {
    this.cardService.getAllCard().subscribe(res => {
      this.requestedCards = res;
    });
  }

  approveCard(card: CardResponse): void {
    const request: CardRequest = {
      bankAccountId: card.id,
      cardType: card.card as 'DEBIT' | 'CREDIT',
    };

    this.cardService.approveCard(request).subscribe(res => {
      alert(`Card Approved: ${res.cardNumber}`);
      this.loadRequestedCards();
    });
  }
}
