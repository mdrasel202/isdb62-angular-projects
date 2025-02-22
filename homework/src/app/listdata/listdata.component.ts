import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listdata',
  imports: [],
  templateUrl: './listdata.component.html',
  styleUrl: './listdata.component.css'
})
export class ListdataComponent implements OnInit{
  products: Product[] = [];

  constructor(private router: Router) {} 

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
  }

  updateProduct(product: Product) {
    this.router.navigate(['/product'], {state: { product }});
  }

  deleteProduct(singleProduct: Product) {
    if (confirm('Delete this product?')) {
      this.products = this.products.filter(x => x !== singleProduct);
      localStorage.setItem('products', JSON.stringify(this.products))
    }
  }
}
