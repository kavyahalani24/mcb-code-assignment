import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';
import { ViewWrapperComponent } from './components/view-wrapper/view-wrapper.component';
import { UserContextGuard } from './user-context/user-context.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account-statements',
  },
  {
    path: 'select-context',
    loadChildren: () =>
      import('./user-context/user-context.module').then(
        (m) => m.UserContextModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./error-page/error-page.module').then((m) => m.ErrorPageModule),
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./user-accounts/user-accounts.module').then(
        (m) => m.UserAccountsModule
      ),
    canActivate: [AuthGuard, UserContextGuard],
  },
  {
    path: 'account-statements',
    loadChildren: () =>
      import(
        './journeys/account-statement-business-journey-bundle.module'
      ).then((m) => m.AccountStatementBusinessJourneyBundleModule),
    canActivate: [AuthGuard, UserContextGuard],
    data: {
      title: $localize`:@@account-statements.nav.item.title:Account Statements`,
      redirectTo: 'dashboard',
    },
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () =>
      import('./error-page/error-page.module').then((m) => m.ErrorPageModule),
  },
];

@NgModule({
  declarations: [ViewWrapperComponent],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
