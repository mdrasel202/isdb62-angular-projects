import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardService } from '../../service/card.service';
import { CommonModule } from '@angular/common';


declare var bootstrap: any;

@Component({
  selector: 'app-cards',
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private cardService: CardService) {
    this.form = this.fb.group({
      bankAccountId: [null, Validators.required],
      cardType: ['DEBIT', Validators.required]
    });
  }

  requestCard(): void {
    this.cardService.requestCard(this.form.value).subscribe(() => {
      alert('Card request submitted!');
      this.form.reset({ cardType: 'DEBIT' });
    });
  }
}
