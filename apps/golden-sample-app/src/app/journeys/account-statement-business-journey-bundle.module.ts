import { NgModule } from '@angular/core';
import {
  ACCOUNT_STATEMENT_BUSINESS_JOURNEY_ACCOUNT_STATEMENT_BASE_PATH,
  ACCOUNT_STATEMENT_BUSINESS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
  ACCOUNT_STATEMENT_BUSINESS_JOURNEY_CONFIGURATION_TOKEN,
  AccountStatementArchiveDownloadViewComponent,
  AccountStatementBusinessJourneyComponent,
  AccountStatementBusinessJourneyConfiguration,
  AccountStatementBusinessJourneyModule,
  AccountStatementBusinessViewComponent,
  PaginationType,
} from '@backbase/account-statement-business-journey-ang';
import {
  AccountStatementAccountPickerContainerComponent,
  AccountStatementStatementsContainerComponent,
  AccountStatementFiltersContainerComponent,
  AccountStatementTableContainerComponent,
  AccountStatementPaginationContainerComponent,
} from '@backbase/internal-account-statement-shared-feature';
import {
  ACCOUNT_STATEMENT_TABLE_CONFIG_TOKEN,
  AccountStatementBaseFiltersComponent,
} from '@backbase/internal-account-statement-shared-ui';
import {
  APP_ACCOUNT_STATEMENT_BASE_PATH,
  APP_ARRANGEMENT_MANAGER_BASE_PATH,
} from '../service-paths.module';
import { CommonModule } from '@angular/common';
import { TableModule } from '@backbase/ui-ang/table';
import { PaginatorModule } from '@backbase/ui-ang/pagination';
import { CustomAccountStatementsViewComponent } from '../custom-views/custom-account-statements-view/custom-account-statements-view.component';
import { TrackerModule } from '@backbase/foundation-ang/observability';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBoxModule } from '@backbase/ui-ang/search-box';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule,
    SearchBoxModule,
    FormsModule,
    ReactiveFormsModule,
    AccountStatementBusinessJourneyModule.forRoot({
      extensionSlots: {
        ext: CustomAccountStatementsViewComponent,
      },
      routes: {
        path: '',
        component: AccountStatementBusinessJourneyComponent,
        children: [
          {
            path: '',
            // component: AccountStatementBusinessViewComponent, // !! original component from journey
            component: CustomAccountStatementsViewComponent, // !! custom component
          },
          {
            path: 'preview',
            component: AccountStatementArchiveDownloadViewComponent,
          },
          {
            path: 'download',
            component: AccountStatementArchiveDownloadViewComponent,
          },
          { path: '**', redirectTo: '', pathMatch: 'full' },
        ],
      },
    }),
    TrackerModule,
    AccountStatementAccountPickerContainerComponent,
    AccountStatementStatementsContainerComponent,
    AccountStatementFiltersContainerComponent,
    AccountStatementTableContainerComponent,
    AccountStatementPaginationContainerComponent,
    AccountStatementBaseFiltersComponent,
  ],
  providers: [
    {
      provide: ACCOUNT_STATEMENT_BUSINESS_JOURNEY_CONFIGURATION_TOKEN,
      useValue: {
        multipleStatementsDownload: true,
        statementsDownloadSelectionLimit: 5,
        selectMultipleAccounts: true,
        showManageStatementsNavigation: true,
        manageStatementsNavigationUrl: '/manage-statements',
        hideManageStatementsNavigationWhenMissingPermissions: true,
        paginationType: PaginationType.pagination,
        pageSize: 5,
      } as Partial<AccountStatementBusinessJourneyConfiguration>,
    },
    {
      provide: ACCOUNT_STATEMENT_BUSINESS_JOURNEY_ACCOUNT_STATEMENT_BASE_PATH,
      useExisting: APP_ACCOUNT_STATEMENT_BASE_PATH,
    },
    {
      provide: ACCOUNT_STATEMENT_BUSINESS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
      useExisting: APP_ARRANGEMENT_MANAGER_BASE_PATH,
    },
  ],
  declarations: [CustomAccountStatementsViewComponent],
})
export class AccountStatementBusinessJourneyBundleModule {}
