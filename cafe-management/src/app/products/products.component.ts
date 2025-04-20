import { Component } from '@angular/core';
import { Product } from '../modal/products';

declare var bootstrap: any;

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  product: Product[]=[];

  isEditing: boolean = false;

  newProduct: Product ={
    product_id:0,
    product_name:'',
    product_category:'',
    product_expire:new Date(),
    product_price:0,
    product_stock:0,
    product_status:''
  }


  openModal(product?: Product){
    if(product){
      this.newProduct = {...product};
      this.isEditing = true;
    }else{
      this.newProduct = new Product(0,'','',new Date(),0,0,'');
      this.isEditing = false;
    }

    const modalElement = document.getElementById('cafeModal');
    if(modalElement){
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
