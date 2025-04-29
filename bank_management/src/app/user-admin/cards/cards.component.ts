import { Component } from '@angular/core';
import { Cards } from '../modal/cards';


declare var bootstrap: any;

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  card: Cards[]=[];
  isEditing: boolean=false;

  newCard: Cards={
    account_id:0,
    card_number:'',
    card_type:'',
    expiry_date:new Date,
    is_active:false
  }

  openModal(card?: Cards){
    if(card){
      this.newCard = {...card};
      this.isEditing = true;
    }else{
      this.newCard = new Cards(0,'','',new Date(), false); 
      this.isEditing = false;
    }

    const modalElement = document.getElementById('cardModal');
    if(modalElement){
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
