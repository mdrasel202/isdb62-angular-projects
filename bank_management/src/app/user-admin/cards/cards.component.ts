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
  // allcard: GetAllInfo[] = [];

 cardRequest: CardRequest = { bankAccountId: 0, cardType: 'VISA' };
  approvedCards: CardResponse[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.loadApprovedCards();

  //   this.cardService.getAllCard().subscribe(data => {
  //   this.allcard = data.filter(c => c.status === 'APPROVED');
  // });
  }

  requestCard(): void {
    this.cardService.requestCard(this.cardRequest).subscribe({
      next: () => {
        alert('Card request submitted successfully!');
        this.loadApprovedCards();
      },
      error: () => alert('Error submitting request.')
    });
  }

  loadApprovedCards(): void {
    this.cardService.getAllCard().subscribe(cards => {
    console.log('Response:', cards);
    this.userCards = cards.filter(card => card.status === 'APPROVED');
    });
  }

// cardRequest: CardRequest = {
//   bankAccountId: 0,
//   cardType: 'VISA'
// };

// userAccounts: any[] = []; // Populate with user's accounts
// cards: CardResponse[] = [];

// constructor(private cardService: CardService, private accountService: BankAccountService) {}

// ngOnInit() {
//   this.loadUserAccounts();
//   this.loadUserCards();
// }

// requestCard() {
//   this.cardService.requestCard(this.cardRequest).subscribe({
//     next: () => {
//       alert('Card requested successfully');
//       this.loadUserCards();
//     },
//     error: (err) => console.error(err)
//   });
// }

// loadUserAccounts() {
//   this.accountService.getAllAccount().subscribe(accounts => {
//     this.userAccounts = accounts.filter(acc => acc.userId === 1); // adjust for auth
//   });
// }

// loadUserCards() {
//   this.cardService.getAllCard().subscribe(cards => {
//     this.cards = cards.filter(c => c.status !== 'APPROVED' || c.cardNumber); // optionally filter
//   });
// }


  // form: FormGroup;

  // constructor(private fb: FormBuilder, private cardService: CardService) {
  //   this.form = this.fb.group({
  //     bankAccountId: [null, Validators.required],
  //     cardType: ['DEBIT', Validators.required]
  //   });
  // }

  // requestCard(): void {
  //   this.cardService.requestCard(this.form.value).subscribe(() => {
  //     alert('Card request submitted!');
  //     this.form.reset({ cardType: 'DEBIT' });
  //   });
  // }
}
