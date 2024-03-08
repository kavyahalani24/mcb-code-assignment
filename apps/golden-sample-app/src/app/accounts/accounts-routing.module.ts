import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsListingComponent } from './components/accounts-listing/accounts-listing.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountInformationComponent } from './components/account-information/account-information.component';
import { AccountTransactionsComponent } from './components/account-transactions/account-transactions.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsListingComponent,
  },
  {
    path: ':accountId',
    component: AccountDetailComponent,
    children: [
      { path: 'account-information', component: AccountInformationComponent },
      { path: 'transactions', component: AccountTransactionsComponent },
      { path: '', redirectTo: 'account-information', pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    redirectTo: 'accounts',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
