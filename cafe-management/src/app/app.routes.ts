import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoresComponent } from './stores/stores.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {path: '', component:DashboardComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'stores', component: StoresComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'users', component: UsersComponent}
];
