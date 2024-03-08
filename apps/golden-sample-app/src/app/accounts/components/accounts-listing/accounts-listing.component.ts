import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SortEvent } from '@backbase/ui-ang/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';

const sortInteger: { [key: string]: number } = {
  asc: 1,
  desc: -1,
};

@Component({
  selector: 'app-accounts-listing',
  templateUrl: './accounts-listing.component.html',
  styleUrls: ['./accounts-listing.component.scss'],
})
export class AccountsListingComponent {
  accounts$?: Observable<any[]>;
  accounts!: any[];

  sortDirection = 0;
  sortKey = '';
  pageSize = 10;
  currentPage = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: AccountsService
  ) {
    this.accounts = this.service.accounts;
    this.accounts$ = of(this.getItems(0, this.pageSize));
  }

  onRowClick(account: any) {
    this.router.navigate([account.id], { relativeTo: this.activatedRoute });
  }

  onSort({ column, direction }: SortEvent) {
    this.sortDirection = sortInteger[direction] || 0;
    this.sortKey = column;

    this.accounts$ = of(
      this.sort(this.accounts, this.sortKey, this.sortDirection)
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
    return this.accounts.slice(start, end);
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
      totalItems: this.accounts.length,
      itemsPerPage: this.pageSize,
      maxNavPages: 3,
      onPageChange: (page: number) => {
        this.accounts$ = of(
          this.getItems(
            page * this.pageSize,
            page * this.pageSize + this.pageSize
          )
        );
      },
    };
  }
}
