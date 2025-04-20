import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoresComponent } from './stores/stores.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewControllerComponent } from './settings/view-controller/view-controller.component';
import { UserViewControllerComponent } from './settings/user-view-controller/user-view-controller.component';
import { UserHomeComponent } from './user-home/user-home.component';

export const routes: Routes = [
    {
        path: '',
        component: UserViewControllerComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: 'home',
            component: UserHomeComponent
          }
        ]
    },
    {
        path: 'admin',
        component: ViewControllerComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'stores',
            component: StoresComponent
          },
          {
            path: 'products',
            component: ProductsComponent
          },
          {
            path: 'orders',
            component: OrdersComponent
          },
          {
            path: 'users',
            component: UsersComponent
          }
        ]
      },
    // {path: 'dashboard', component:DashboardComponent},
    // {path: 'stores', component: StoresComponent},
    // {path: 'products', component: ProductsComponent},
    // {path: 'orders', component: OrdersComponent},
    // {path: 'users', component: UsersComponent}
];
