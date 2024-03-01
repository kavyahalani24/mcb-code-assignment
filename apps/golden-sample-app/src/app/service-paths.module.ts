import { InjectionToken, NgModule } from '@angular/core';
import { environment } from '../environments/environment';

export const APP_ACCOUNT_STATEMENT_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_ACCOUNT_STATEMENT_BASE_PATH'
);

export const APP_ARRANGEMENT_MANAGER_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_ARRANGEMENT_MANAGER_BASE_PATH'
);

@NgModule({
  providers: [
    {
      provide: APP_ACCOUNT_STATEMENT_BASE_PATH,
      useValue: `${environment.apiRoot}/account-statement`,
    },
    {
      provide: APP_ARRANGEMENT_MANAGER_BASE_PATH,
      useValue: `${environment.apiRoot}/arrangement-manager`,
    },
  ],
})
export class ServicePathsModule {}
