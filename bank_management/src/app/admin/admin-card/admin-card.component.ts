import { Component, OnInit } from '@angular/core';
import { CardRequest, CardResponse, GetAllInfo } from '../../model/bank_card.model';
import { CardService } from '../../service/card.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-admin-card',
  imports: [NgFor,CommonModule  ],
  templateUrl: './admin-card.component.html',
  styleUrl: './admin-card.component.css'
})
export class AdminCardComponent implements OnInit{

  approvedCards: GetAllInfo[] = [];

  pendingCards: CardResponse[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.loadPendingCards();

    this.cardService.getAllCard().subscribe(cards => {
    // this.approvedCards = cards.filter(c => c.status === 'APPROVED');
    this.approvedCards = cards;
  });
  }

  loadPendingCards() {
    this.cardService.getPendingCards().subscribe({
      next: (data) => this.pendingCards = data,
      error: (err) => console.error('Error fetching pending cards', err)
    });
  }


 approve(card: CardResponse) {
  const req: CardRequest = {
    bankAccountId: card.accountId,
    cardType: card.cardType,
  };

  this.cardService.approveCard(req).subscribe({
    next: () => {
      this.pendingCards = this.pendingCards.filter(c => c.id !== card.id);
    },
    error: (err) => console.error('Approval failed', err)
  });
}
  reject(card: CardResponse) {
    const req: CardRequest = {
      bankAccountId: card.accountId,
      cardType: card.cardType
    };

    this.cardService.rejectCard(req).subscribe({
      next: () => this.loadPendingCards(),
      error: (err) => console.error('Rejection error', err)
    });
  }
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

