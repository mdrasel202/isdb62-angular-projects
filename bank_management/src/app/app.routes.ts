import { Routes } from '@angular/router';
import { UserComponent } from './user-admin/user/user.component';
import { DeshboardComponent } from './user-admin/deshboard/deshboard.component';
import { MainLayoutComponent } from './user-admin/main-layout/main-layout.component';
import { TransactionsComponent } from './user-admin/transactions/transactions.component';
import { CardsComponent } from './user-admin/cards/cards.component';
import { BankAccountComponent } from './user-admin/bank-account/bank-account.component';
import { HomeViewControllerComponent } from './settings/home-view-controller/home-view-controller.component';
import { LogingComponent } from './loging-register/loging/loging.component';
import { RegisterComponent } from './loging-register/register/register.component';
import { AdminMainLayoutComponent } from './admin/admin-main-layout/admin-main-layout.component';
import { AdminDeshboardComponent } from './admin/admin-deshboard/admin-deshboard.component';
import { AccountCreateComponent } from './admin/account-create/account-create.component';
import { DepositComponent } from './admin/deposit/deposit.component';
import { LoanComponent } from './admin/loan/loan.component';

export const routes: Routes = [

    //user-panal
    {path: '', component:MainLayoutComponent,
        children: [
            {path: '', redirectTo: 'deshboard', pathMatch: 'full'},
            {path: 'dashboard', component: DeshboardComponent},
            {path: 'user', component:UserComponent},
            {path: 'transactions', component: TransactionsComponent},
            {path: 'cards', component: CardsComponent},
            {path: 'bank-account', component: BankAccountComponent}
        ]
    },

    //home
    {path: 'home', component:HomeViewControllerComponent,
        children: [
           {path: '', redirectTo: 'home', pathMatch: 'full'}
        ]
    },
    
    //admin
    {path:'admin', component: AdminMainLayoutComponent,
        children : [
            {path: '' , redirectTo:'admin-deshboard', pathMatch: 'full'},
            {path:'admin-deshboard', component: AdminDeshboardComponent},
            {path:'account-create', component:AccountCreateComponent},
            {path: 'deposit', component:DepositComponent},
            {path: 'loan', component:LoanComponent}
        ] 
    },

    {path: 'loging', component:LogingComponent},
    {path: 'resgister', component:RegisterComponent}
   
];
