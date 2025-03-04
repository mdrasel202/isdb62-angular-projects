import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BirthdayComponent } from './events/birthday/birthday.component';
import { WeddingComponent } from './events/wedding/wedding.component';
import { EventPageComponent } from './event-page/event-page.component';
import { BookingListComponent } from './booking-list/booking-list.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'event/birthday', component: BirthdayComponent},
    {path: 'event/wedding', component: WeddingComponent},
    {path: 'event-page', component:EventPageComponent},
    {path: 'booking-list', component:BookingListComponent}
];
