import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsListingComponent } from './components/accounts-listing/accounts-listing.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { TableModule } from '@backbase/ui-ang/table';
import { PaginationModule } from '@backbase/ui-ang/pagination';
import { TabModule } from '@backbase/ui-ang/tab';
import { IconModule } from '@backbase/ui-ang/icon';
import { AccountNumberModule } from '@backbase/ui-ang/account-number';
import { AmountModule } from '@backbase/ui-ang/amount';
import { HeaderModule } from '@backbase/ui-ang/header';
import { AccountInformationComponent } from './components/account-information/account-information.component';
import { AccountTransactionsComponent } from './components/account-transactions/account-transactions.component';

@NgModule({
  declarations: [
    AccountsListingComponent,
    AccountDetailComponent,
    AccountInformationComponent,
    AccountTransactionsComponent,
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    AccountNumberModule,
    AmountModule,
    IconModule,
    HeaderModule,
    TableModule,
    PaginationModule,
    TabModule,
  ],
})
export class AccountsModule {}
