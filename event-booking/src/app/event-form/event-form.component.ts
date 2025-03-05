import { Component } from '@angular/core';
import { Event } from '../app.component';
import { Route,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  imports: [FormsModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  event: Event = new Event(0, '', '', '', new Date(), '', '');
  // event: Event = new Event(0, '', '', '', new Date(), '', ''); 
  Update = false;

  constructor(private router : Router){
    const nav = this.router.getCurrentNavigation();
    if(nav?.extras.state && nav.extras.state['user']){
      this.event = nav.extras.state['event'];
      this.Update = true;
    }
  }

  onSubmit(){
    let events: Event[]= JSON.parse(localStorage.getItem('events') || '[]');
    if(this.Update){
      events = events.map(evt=>(evt.event_pnoneNumber == this.event.event_pnoneNumber ? this.event : evt));
    }else{
      events.push(this.event);
    }

    // console.log(events);
      
    localStorage.setItem('events', JSON.stringify(events));
    this.event = new Event(0, '', '', '', new Date(), '', '');
    // this.router.navigate(['/booking-list']);
    window.location.href="/booking-list";
  }
}
