import { Component } from '@angular/core';
import { Cards } from '../../user-admin/modal/cards';
import { CardRequest, CardResponse } from '../../model/bank_card.model';
import { CardService } from '../../service/card.service';
import { NgFor, NgIf } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-admin-card',
  imports: [NgFor, NgIf],
  templateUrl: './admin-card.component.html',
  styleUrl: './admin-card.component.css'
})
export class AdminCardComponent {

 pendingCards: CardResponse[] = [];

constructor(private cardService: CardService) {}

ngOnInit() {
  this.loadPendingCards();
}

loadPendingCards() {
  this.cardService.getAllCard().subscribe(cards => {
    this.pendingCards = cards.filter(c => c.status === 'PENDING');
  });
}

approveCard(card: CardResponse) {
  const request: CardRequest = {
    bankAccountId: card.id,
    cardType: card.card as any // You may need a mapping function if card !== cardType
  };

  this.cardService.approveCard(request).subscribe({
    next: () => {
      alert('Card approved successfully');
      this.loadPendingCards();
    },
    error: err => console.error(err)
  });
}

  // requestedCards: CardResponse[] = [];

  // constructor(private cardService: CardService) {}

  // ngOnInit(): void {
  //   this.loadRequestedCards();
  // }

  // loadRequestedCards(): void {
  //   this.cardService.getAllCard().subscribe(res => {
  //     this.requestedCards = res;
  //   });
  // }

  // approveCard(card: CardResponse): void {
  //   const request: CardRequest = {
  //     bankAccountId: card.id,
  //     cardType: card.card as 'DEBIT' | 'CREDIT',
  //   };

  //   this.cardService.approveCard(request).subscribe(res => {
  //     alert(`Card Approved: ${res.cardNumber}`);
  //     this.loadRequestedCards();
  //   });
  // }
}
