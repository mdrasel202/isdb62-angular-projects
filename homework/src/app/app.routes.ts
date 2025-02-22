import { Routes } from '@angular/router';
import { FormdataComponent } from './formdata/formdata.component';
import { ListdataComponent } from './listdata/listdata.component';

export const routes: Routes = [
    
    {path: 'product', component: FormdataComponent},
    {path: 'product-list', component: ListdataComponent},
    {path: '**', redirectTo: ''}
];
