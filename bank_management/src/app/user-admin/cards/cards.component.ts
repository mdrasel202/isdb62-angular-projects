import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardService } from '../../service/card.service';
import { CommonModule } from '@angular/common';
import { CardRequest, CardResponse, GetAllInfo} from '../../model/bank_card.model';
import { BankAccountService } from '../../service/bank-account.service';


declare var bootstrap: any;

@Component({
  selector: 'app-cards',
  imports: [CommonModule, ReactiveFormsModule , FormsModule, ReactiveFormsModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{

  userCards: GetAllInfo[] = [];

 cardRequest: CardRequest = { accountNumber: '', cardType: 'VISA' };
  approvedCards: CardResponse[] = [];

  constructor(private cardService: CardService, private bankaccountService : BankAccountService) {}

  userAccountNumbers :  string[] = [];

  ngOnInit(): void {
    this.bankaccountService.getAllAccount().subscribe(accounts => {
    this.userAccountNumbers = accounts.map(acc => acc.accountNumber);
    if (this.userAccountNumbers.length > 0) {
      this.cardRequest.accountNumber = this.userAccountNumbers[0]; // default
    }
  });


    this.loadApprovedCards();

    setInterval(() => {
    this.loadApprovedCards();
  }, 3000);
  }

  requestCard(): void {
    this.cardService.requestCard(this.cardRequest).subscribe({
      next: (res) => {
        // alert('Card request submitted successfully!');
        if(confirm("Card request submitted successfully!")){
          this.loadApprovedCards();
          location.reload();
        }
        
      },
      error: () => alert('Error submitting request.')
    });
  }

  loadApprovedCards(): void {
    this.cardService.getAllCard().subscribe(cards => {
    // console.log('Response:', cards);
    // this.userCards = cards.filter(card => card.status === 'APPROVED');
    this.userCards = cards;
    });
  }


  getCardTypeClass(type: string): string {
  switch (type.toUpperCase()) {
    case 'ATM':
      return 'atm-type';
    case 'CREDIT':
      return 'credit-type';
    case 'DEBIT':
      return 'debit-type';
    default:
      return '';
  }
}

}
