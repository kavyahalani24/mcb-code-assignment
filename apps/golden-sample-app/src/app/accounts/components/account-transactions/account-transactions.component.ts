import { Component } from '@angular/core';
import { transactionsMock } from '../../../../mocks/transactions-mock.data';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SortEvent } from '@backbase/ui-ang/table';

const sortInteger: { [key: string]: number } = {
  asc: 1,
  desc: -1,
};

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.scss'],
})
export class AccountTransactionsComponent {
  transactions = transactionsMock;
  transactions$?: Observable<any[]>;

  sortDirection = 0;
  sortKey = '';
  pageSize = 10;
  currentPage = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.transactions$ = of(this.getItems(0, this.pageSize));
  }

  onSort({ column, direction }: SortEvent) {
    this.sortDirection = sortInteger[direction] || 0;
    this.sortKey = column;

    this.transactions$ = of(
      this.sort(this.transactions, this.sortKey, this.sortDirection)
    );
  }

  sort(accounts: any[], column: string, direction: number): any[] {
    return [...accounts].sort(
      (a, b) => direction * this.compare(a[column], b[column])
    );
  }

  compare(v1: number | string, v2: number | string) {
    return v1 === v2 ? 0 : v1 < v2 ? -1 : 1;
  }

  getItems(start: number, end: number): any[] {
    return this.transactions.slice(start, end);
  }

  getAriaSort(key: string): string | null {
    if (this.sortKey === key) {
      if (this.sortDirection < 0) {
        return 'descending';
      } else if (this.sortDirection > 0) {
        return 'ascending';
      }
    }

    return null;
  }

  get paginator() {
    return {
      page: this.currentPage,
      boundaryLinks: false,
      directionLinks: true,
      totalItems: this.transactions.length,
      itemsPerPage: this.pageSize,
      maxNavPages: 3,
      onPageChange: (page: number) => {
        this.transactions$ = of(
          this.getItems(
            page * this.pageSize,
            page * this.pageSize + this.pageSize
          )
        );
      },
    };
  }
}
