import { Routes } from '@angular/router';
import { FormdataComponent } from './formdata/formdata.component';
import { ListdataComponent } from './listdata/listdata.component';

export const routes: Routes = [
    
    {path: 'formdata', component: FormdataComponent},
    {path: 'listdata', component: ListdataComponent},
    {path: '**', redirectTo: ''}
];
