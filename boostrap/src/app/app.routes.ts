import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContractComponent } from './page/contract/contract.component';


export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contract', component: ContractComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', redirectTo: ''}
];
