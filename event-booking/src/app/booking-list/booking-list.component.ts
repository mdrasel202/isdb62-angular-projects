import { Component, OnInit } from '@angular/core';
import { Event } from '../app.component';

@Component({
  selector: 'app-booking-list',
  imports: [],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent implements OnInit{
 events: Event[] = [];

  ngOnInit(): void {
    this.events = JSON.parse(localStorage.getItem('events') || '[]');
  }

}
