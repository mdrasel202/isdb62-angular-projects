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
export class User{
  name: string;
  age: number;
  phone: string;
  address: string;

  constructor(name: string, age: number, phone: string, address: string){
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}