import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import {
  AccountStatementBusinessJourneyConfigurationService,
  AccountStatementBusinessViewComponent,
} from '@backbase/account-statement-business-journey-ang';
import { AccountStatementStatementsContainerComponent } from '@backbase/internal-account-statement-shared-feature';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'gsa-custom-account-statements-view',
  templateUrl: './custom-account-statements-view.component.html',
  styleUrls: ['./custom-account-statements-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomAccountStatementsViewComponent extends AccountStatementBusinessViewComponent {
  @ViewChild('statements', { static: true })
  statementsComponent!: AccountStatementStatementsContainerComponent;
  constructor(
    configService: AccountStatementBusinessJourneyConfigurationService
  ) {
    super(configService);
  }

  form = new UntypedFormGroup({
    query: new UntypedFormControl(''),
  });

  startSearching(value: any) {
    alert(`You are searching for ${value}`);
  }

  search(text: Observable<string>): Observable<Array<string>> {
    return text.pipe(
      switchMap((term) =>
        this.statementsComponent.accountStatements$.pipe(
          map((items) =>
            items.filter(
              (item) =>
                item.accountNumber
                  ?.toLowerCase()
                  .indexOf(term.toLowerCase()) === 0
            )
          )
        )
      ),
      map((filteredItems) =>
        filteredItems.map((item) => item.accountNumber || '')
      )
    );
  }
}
