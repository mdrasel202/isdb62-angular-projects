import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-booking';
  
}

export class Event{
  event_id:number;
  event_name: string;
  event_email: string;
  event_pnoneNumber:string;
  event_date:Date;
  event_description:string;
  event_location:string;

  constructor(
  event_id:number,
  event_name: string,
  event_email: string,
  event_pnoneNumber:string,
  event_date:Date,
  event_description:string,
  event_location:string
  )

  {
    this.event_id=event_id;
    this.event_name=event_name;
    this.event_email=event_email;
    this.event_pnoneNumber=event_pnoneNumber;
    this.event_date=event_date;
    this.event_description=event_description;
    this.event_location=event_location;
  }

}

export class User {
  userId: string;
  userName: string;
  userEmail: string;
  userPassword: string;

  constructor(userId: string, userName: string, userEmail: string, userPassword: string) {
    this.userId = userId;
    this.userName = userName;
    this.userEmail = userEmail;
    this.userPassword = userPassword
  }
}