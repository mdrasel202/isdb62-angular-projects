import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BirthdayComponent } from './events/birthday/birthday.component';
import { WeddingComponent } from './events/wedding/wedding.component';
import { EventPageComponent } from './event-page/event-page.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { LogingComponent } from './loging/loging.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConferenceComponent } from './events/conference/conference.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'event-page', component:EventPageComponent},
    {path: 'booking-list', component:BookingListComponent},
    {path: 'loging', component:LogingComponent},
    {path: 'registration', component:RegistrationComponent},
    {path: 'event/birthday', component: BirthdayComponent},
    {path: 'event/wedding', component: WeddingComponent},
    {path: 'event/conference', component:ConferenceComponent}
];
