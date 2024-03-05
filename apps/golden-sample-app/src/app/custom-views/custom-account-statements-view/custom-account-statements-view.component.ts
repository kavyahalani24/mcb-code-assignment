import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import {
  AccountStatementBusinessJourneyConfigurationService,
  AccountStatementBusinessViewComponent,
} from '@backbase/account-statement-business-journey-ang';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'gsa-custom-account-statements-view',
  templateUrl: './custom-account-statements-view.component.html',
  styleUrls: ['./custom-account-statements-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomAccountStatementsViewComponent extends AccountStatementBusinessViewComponent {
  // vars
  searchTerm = '';

  constructor(
    configService: AccountStatementBusinessJourneyConfigurationService
  ) {
    super(configService);
  }

  form = new UntypedFormGroup({
    query: new UntypedFormControl(''),
  });

  search() {
    this.searchTerm = this.form.controls['query'].value;
  }
}
