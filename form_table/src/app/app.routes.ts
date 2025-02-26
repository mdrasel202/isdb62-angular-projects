import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListfileComponent } from './listfile/listfile.component';

export const routes: Routes = [
    {path: 'create', component: CreateComponent},
    {path: 'listfile', component:ListfileComponent}
];
