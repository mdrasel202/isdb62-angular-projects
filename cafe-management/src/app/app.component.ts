import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cafe-management';
}

export class Stores{
    product_id:number;
    product_name:string;
    product_status:string;
    product_actions:string

    constructor(
      product_id:number,
      product_name:string,
      product_status:string,
      product_actions:string
    ){
      this.product_id=product_id;
      this.product_name=product_name;
      this.product_status=product_status;
      this.product_actions=product_actions
    }
}
