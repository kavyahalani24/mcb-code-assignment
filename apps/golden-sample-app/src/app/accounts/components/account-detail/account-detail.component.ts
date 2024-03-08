import { Component } from '@angular/core';
import { arrangementsMock } from './../../../../mocks/arrangements-mock.data';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent {
  accountData!: any;
  accountId = '';
  tabs = [
    {
      id: 'accountInfo',
      title: 'Account Information',
      route: 'account-information',
    },
    {
      id: 'transactions',
      title: 'Transactions',
      route: 'transactions',
    },
  ];

  constructor(public route: ActivatedRoute, private service: AccountsService) {
    this.accountData = this.service.accountData;
    this.accountId = this.accountData.id;
  }

  onTabSelect(index: number) {
    console.log(index);
  }

  onClick($event: any) {
    $event.stopPropagation();
    $event.preventDefault();
  }
}
