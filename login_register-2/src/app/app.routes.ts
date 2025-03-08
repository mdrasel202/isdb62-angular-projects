import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DeshbordComponent } from './pages/deshbord/deshbord.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component:LoginComponent,
        children : [
            {
                path: 'desgboard',
                component: DeshbordComponent
            }
        ]
    }
];
