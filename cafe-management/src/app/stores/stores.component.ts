import { Component, OnInit } from '@angular/core';
import { Stores } from '../app.component';

@Component({
  selector: 'app-stores',
  imports: [],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css'
})
export class StoresComponent{

  stores: Stores[]=[];

  isEditing: boolean = false;

  newStores: Stores ={
    product_id:0,
    product_name:'',
    product_status:'',
    product_actions:''
  }

  // private modal: bootstrap.Modal | null = null; 

  openModal(store?: Stores){
    if(store){
      this.newStores = {...store};
      this.isEditing = true;
    }else{
      this.newStores = new Stores(0,'','','');
      this.isEditing = false;
    }

    const modalElement = document.getElementById('cafeModal');
      if(modalElement != null){
        modalElement.style.display = 'block';
      }
  }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
}
