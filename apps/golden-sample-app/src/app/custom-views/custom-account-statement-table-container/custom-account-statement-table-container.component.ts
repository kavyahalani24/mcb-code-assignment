import {
  AccountStatementDataService,
  AccountStatementStoreModel,
} from '@backbase/internal-account-statement-shared-data-access';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnInit,
} from '@angular/core';
import { NotificationService } from '@backbase/ui-ang/notification';
import {
  AccountStatementColumnConfig,
  AccountStatementViewModel,
  ACCOUNT_STATEMENT_TABLE_CONFIG_TOKEN,
} from '@backbase/internal-account-statement-shared-ui';
import { MimeTypeExtensions } from '@backbase/internal-account-statement-shared-util';
import { AccountStatementTableContainerComponent } from '@backbase/internal-account-statement-shared-feature';
import { Subject, takeUntil } from 'rxjs';
import {
  MIME_TYPE_EXTENSIONS_TOKEN,
  ACCOUNT_STATEMENT_CATEGORIES_TOKEN,
} from '@backbase/internal-account-statement-shared-util';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'gsa-custom-account-statement-table-container',
  templateUrl: './custom-account-statement-table-container.component.html',
  styleUrls: ['./custom-account-statement-table-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomAccountStatementTableContainerComponent
  extends AccountStatementTableContainerComponent
  implements OnInit
{
  private _searchTerm = '';

  @Input()
  set searchTerm(value: string) {
    this._searchTerm = value;
    if (this._searchTerm) {
      this.updateStatementsBasedOnSearch();
    }
  }

  get searchTerm(): string {
    return this._searchTerm;
  }
  accountStatements: AccountStatementViewModel[] = [];
  filteredAccountStatements: AccountStatementViewModel[] = [];

  private ngUnsubscribe$ = new Subject<void>();

  constructor(
    store: AccountStatementStoreModel,
    dataService: AccountStatementDataService,
    notificationsService: NotificationService,
    @Inject(MIME_TYPE_EXTENSIONS_TOKEN) mimeTypeExtensions: MimeTypeExtensions,
    @Inject(ACCOUNT_STATEMENT_CATEGORIES_TOKEN)
    accountStatementCategories: Record<string, string>,
    @Inject(ACCOUNT_STATEMENT_TABLE_CONFIG_TOKEN)
    tableConfig: AccountStatementColumnConfig[]
  ) {
    super(
      store,
      dataService,
      notificationsService,
      mimeTypeExtensions,
      accountStatementCategories,
      tableConfig
    );
  }

  ngOnInit(): void {
    this.accountStatementsViewModels$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((statements) => {
        this.accountStatements = statements;
        this.filteredAccountStatements = JSON.parse(
          JSON.stringify(this.accountStatements)
        ); // creating deep copy
      });
  }

  updateStatementsBasedOnSearch() {
    this.filteredAccountStatements = this.accountStatements.filter(
      (statement) =>
        statement?.accountNumber
          ?.toLowerCase()
          .includes(this.searchTerm.toLowerCase())
    );
  }
}
