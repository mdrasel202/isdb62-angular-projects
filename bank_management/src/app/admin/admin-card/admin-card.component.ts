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
  if (!card.accountNumber) {
    console.error("Missing account number for card:", card);
    return;
  }

    const req: CardRequest = {
    accountNumber: card.accountNumber,
    cardType: card.cardType
  };

  this.cardService.approveCard(req).subscribe({
    next: () => {
      alert("Card approved successfully");
      this.pendingCards = this.pendingCards.filter(c => c.id !== card.id);
    },
    error: (err) => console.error('Approval failed', err)
  });
}

  reject(card: CardResponse) {
  if (!card.accountNumber) {
    console.error("Missing account number for card:", card);
    return;
  }

  const req: CardRequest = {
    accountNumber: card.accountNumber,
    cardType: card.cardType,
    cardId: card.id
  };

  this.cardService.rejectCard(req).subscribe({
    next: () => this.loadPendingCards(),
    error: (err) => console.error('Rejection error', err)
  });
}

getStatusColor(status : string): string{
  switch(status){
    case 'PENDING':
      return 'pending-status';
    case 'APPROVED':
      return 'aproves-status';
    case 'REJECTED' :
      return 'rejected-status';
    default :
      return 'unknow-status';       
  }
}
}
