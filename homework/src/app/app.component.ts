import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
export class Product {
  product_id: number;
  product_name: string;
  product_price: number;
  product_quantity: number;
  purchase_date: Date;
  sell_date: Date;
  buy_from: string;
  sell_to: string;

  constructor(
    product_id: number,
    product_name: string,
    product_price: number,
    product_quantity: number,
    purchase_date: Date,
    sell_date: Date,
    buy_from: string,
    sell_to: string
  ) 
  {
    this.product_id = product_id;
    this.product_name = product_name;
    this.product_price = product_price;
    this.product_quantity = product_quantity;
    this.purchase_date = purchase_date;
    this.sell_date = sell_date;
    this.buy_from = buy_from;
    this.sell_to = sell_to;
  }
}