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
import { DepositsComponent } from './home/deposit/deposit.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AdminCardComponent } from './admin/admin-card/admin-card.component';
import { UserLoanComponent } from './user-admin/user-loan/user-loan.component';
import { UserDepositComponent } from './user-admin/user-deposit/user-deposit.component';
import { AdminDepositComponent } from './admin/admin-deposit/admin-deposit.component';

export const routes: Routes = [

    //home
    {path: '', component:HomeViewControllerComponent,
        children: [
           {path: '', redirectTo: 'home', pathMatch: 'full'},
           {path: 'home', component:HomePageComponent},
           {path: 'deposits', component:DepositsComponent}
        ]
    },

    //user-panal
    {path: 'user', component:MainLayoutComponent,
        children: [
            {path: '', redirectTo: 'deshboard', pathMatch: 'full'},
            {path: 'dashboard', component: DeshboardComponent},
            {path: 'user', component:UserComponent},
            {path: 'transactions', component: TransactionsComponent},
            {path: 'cards', component: CardsComponent},
            {path: 'bank-account', component: BankAccountComponent},
            {path: 'user-loan', component: UserLoanComponent},
            {path: 'user-deposit', component: UserDepositComponent}
        ]
    },
    
    //admin
    {path:'admin', component: AdminMainLayoutComponent,
        children : [
            {path: '' , redirectTo:'admin-deshboard', pathMatch: 'full'},
            {path:'admin-deshboard', component: AdminDeshboardComponent},
            {path:'account-create', component:AccountCreateComponent},
            {path: 'deposit', component:DepositComponent},
            {path: 'loan', component:LoanComponent},
            {path: 'admin_card', component:AdminCardComponent},
            {path: 'admin-deposit', component: AdminDepositComponent}
        ] 
    },

    {path: 'loging', component:LogingComponent},
    {path: 'resgister', component:RegisterComponent}
   
];
