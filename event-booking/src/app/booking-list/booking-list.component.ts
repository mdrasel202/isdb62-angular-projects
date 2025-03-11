import { Component, OnInit } from '@angular/core';
import { Event } from '../app.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  imports: [],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent implements OnInit{
 events: Event[] = [];

 constructor(private router : Router){}

  ngOnInit(): void {
    this.events = JSON.parse(localStorage.getItem('events') || '[]');
  }

  updateEvent(event : Event){
    this.router.navigate(['/event'], {state:{event}});
  }

  deleteEvent(singleEvent: Event){
    if(confirm('Cancle this event?')){
      this.events =  this.events.filter(x => x !== singleEvent);
      localStorage.setItem('events', JSON.stringify(this.events));
    }
  }

}
