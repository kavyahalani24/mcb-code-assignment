import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '@backbase/ui-ang/table';
import { PaginatorModule } from '@backbase/ui-ang/pagination';
import { TrackerModule } from '@backbase/foundation-ang/observability';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBoxModule } from '@backbase/ui-ang/search-box';
import { AccountsModule } from '../accounts/accounts.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule,
    SearchBoxModule,
    FormsModule,
    ReactiveFormsModule,
    AccountsModule,
    TrackerModule,
  ],
})
export class CustomAccountsJourneyBundleModule {}
