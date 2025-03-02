import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BirthdayComponent } from './events/birthday/birthday.component';
import { WeddingComponent } from './events/wedding/wedding.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'event/birthday', component: BirthdayComponent},
    {path: 'event/wedding', component: WeddingComponent}
];
