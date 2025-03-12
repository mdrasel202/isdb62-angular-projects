import { Component, OnInit } from '@angular/core';
import { Event } from '../app.component';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent implements OnInit{
 events: Event[] = [];

 isEditing: boolean = false;

 newEvent: Event ={
  event_id: 0,
  event_name: '',
  event_email: '',
  event_pnoneNumber: '',
  event_date: new Date(),
  event_description: '',
  event_location: ''
 }

 private modal: bootstrap.Modal | null = null;


 constructor(private router : Router){}

  ngOnInit(): void {
    this.events = JSON.parse(localStorage.getItem('events') || '[]');
  }

  updateEvent(event : Event){
//     this.router.navigate(['/event'], {state:{event}});
    this.router.navigate(['/event-form'], {state:{event}});
  }

  deleteEvent(singleEvent: Event){
    if(confirm('Cancle this event?')){
      this.events =  this.events.filter(x => x !== singleEvent);
      localStorage.setItem('events', JSON.stringify(this.events));
    }
  }

  openModal(event?: Event){
    if(event){
      this.newEvent = {...event};
      this.isEditing = true;
    }else{
      this.newEvent = new Event(0, '', '', '', new Date(), '', '');
      this.isEditing = false;
    }
  
    const modalElement = document.getElementById('eventModal');
    if(modalElement){
      this.modal = new bootstrap.Modal(modalElement);
      this.modal.show();
    }
  }

  onUpdate() {
    // Fetch the current events from localStorage
    let events: Event[] = JSON.parse(localStorage.getItem('events') || '[]');
    
    // Find and update the matching event
    events = events.map(evt => 
      (evt.event_pnoneNumber === this.newEvent.event_pnoneNumber ? this.newEvent : evt)
    );
  
    // Save the updated events back to localStorage
    localStorage.setItem('events', JSON.stringify(events));
  
    // Update the local list of events to reflect the change
    const index = this.events.findIndex(evt => evt.event_pnoneNumber === this.newEvent.event_pnoneNumber);
    if (index !== -1) {
      this.events[index] = this.newEvent;
    }
  
    // Reset the form and close modal after update
    this.newEvent = { event_id: 0, event_name: '', event_email: '', event_pnoneNumber: '', event_date: new Date(), event_description: '', event_location: '' };
    this.isEditing = false;
  
    // Show success message
    alert('Event successfully updated!');
  
    // Reload the page (optional, could be avoided for a smoother user experience)
    window.location.reload();
  }
  

}
