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
<<<<<<< HEAD
    this.router.navigate(['/event'], {state:{event}});
=======
    this.router.navigate(['/event-form'], {state:{event}});
>>>>>>> ca058001408a1e131c586cddb46092026f53bc87
  }

  deleteEvent(singleEvent: Event){
    if(confirm('Cancle this event?')){
      this.events =  this.events.filter(x => x !== singleEvent);
      localStorage.setItem('events', JSON.stringify(this.events));
    }
  }

}
