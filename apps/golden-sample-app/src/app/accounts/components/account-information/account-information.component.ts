import { Component } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss'],
})
export class AccountInformationComponent {
  accountData!: any;
  constructor(private service: AccountsService) {
    this.accountData = this.service.accountData;
  }
}
