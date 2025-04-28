import { Routes } from '@angular/router';
import { UserComponent } from './user-admin/user/user.component';
import { UserViewControllerComponent } from './settings/user-view-controller/user-view-controller.component';
import { DeshboardComponent } from './user-admin/deshboard/deshboard.component';
import { MainLayoutComponent } from './user-admin/main-layout/main-layout.component';

export const routes: Routes = [
    //user-panal
    {
        path: '',
        component:MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'deshboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DeshboardComponent
            },
            {path: 'user',
                component:UserComponent
            }
        ]
    }
   
];
