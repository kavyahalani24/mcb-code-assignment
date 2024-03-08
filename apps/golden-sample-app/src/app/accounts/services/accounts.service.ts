import { arrangementsMock } from './../../../mocks/arrangements-mock.data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private _accounts = arrangementsMock;
  private _accountData = arrangementsMock[0];
  private _transactions = [];

  get accounts(): any[] {
    return this._accounts;
  }

  get accountData(): any {
    return this._accountData;
  }

  get transactions(): any[] {
    return this._transactions;
  }
}
