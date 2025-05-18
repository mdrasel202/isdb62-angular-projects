import { Component, OnInit } from '@angular/core';
import { Cards } from '../../user-admin/modal/cards';
import { CardRequest, CardResponse } from '../../model/bank_card.model';
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

 pendingCards: CardResponse[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.loadPendingCards();
  }

  loadPendingCards(): void {
    this.cardService.getAllCard().subscribe(cards => {
      this.pendingCards = cards.filter(card => card.status === 'PENDING');
    });
  }

  approve(card: CardResponse): void {
    const request: CardRequest = {
      bankAccountId: card.id,
      cardType: card.card as any,
      cardStatus: 'APPROVED'
    };
    this.cardService.approveCard(request).subscribe(() => this.loadPendingCards());
  }

  reject(card: CardResponse): void {
    const request: CardRequest = {
      bankAccountId: card.id,
      cardType: card.card as any,
      cardStatus: 'REJECTED'
    };
    this.cardService.rejectCard(request).subscribe(() => this.loadPendingCards());
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

