// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';
import { AchPositivePayInterceptor } from '../app/interceptors/ach-positive-pay.interceptor';
import { Environment } from './type';
import {
  createMocks,
  createMocksInterceptor,
} from '@backbase/foundation-ang/data-http';
import { arrangementsMock } from '../mocks/arrangements-mock.data';
import { accountStatementsCategoriesMock } from '../mocks/account-statement-categories-mock.data';
import { accountStatementsMock } from '../mocks/account-statements-mock.data';

export const ServiceAgreementsHttpServiceMocksProviderTemp = createMocks([
  {
    urlPattern: '/client-api/v3/accessgroups/user-context/service-agreements',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: [
          {
            additions: {},
            id: '8a80976e7e783818017e7a93c70c0015',
            externalId: 'sa_BBNDB003',
            name: 'BBNDB003',
            description: 'Master Service Agreement for BBNDB003',
            isMaster: true,
            validFromDate: null,
            validFromTime: null,
            validUntilDate: null,
            validUntilTime: null,
          },
        ],
      },
    ],
  },
  {
    urlPattern: '/client-api/v3/accessgroups/user-context',
    method: 'POST',
    responses: [
      {
        status: 204,
        body: {},
      },
    ],
  },
  {
    urlPattern: '/client-api/v3/accessgroups/service-agreements/context',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {
          additions: {},
          creatorLegalEntity: '8a80976e7e783818017e7a93c3ca0014',
          status: 'ENABLED',
          id: '8a80976e7e783818017e7a93c70c0015',
          externalId: 'sa_BBNDB003',
          approvalId: null,
          name: 'BBNDB003',
          description: 'Master Service Agreement for BBNDB003',
          isMaster: true,
          validFromDate: null,
          validFromTime: null,
          validUntilDate: null,
          validUntilTime: null,
        },
      },
    ],
  },
  {
    urlPattern: '/client-api/v3/accessgroups/serviceagreements/context',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {
          additions: {},
          creatorLegalEntity: '8a80976e7e783818017e7a93c3ca0014',
          status: 'ENABLED',
          id: '8a80976e7e783818017e7a93c70c0015',
          externalId: 'sa_BBNDB003',
          approvalId: null,
          name: 'BBNDB003',
          description: 'Master Service Agreement for BBNDB003',
          isMaster: true,
          validFromDate: null,
          validFromTime: null,
          validUntilDate: null,
          validUntilTime: null,
        },
      },
    ],
  },
  {
    urlPattern: '/client-api/v3/accessgroups/users/permissions/summary',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: [
          {
            resource: 'Contacts',
            function: 'Contacts',
            permissions: {
              view: true,
              edit: true,
            },
          },
          {
            resource: 'Payments',
            function: 'US Domestic Wire',
            permissions: {
              create: true,
              view: true,
              approve: true,
            },
          },
          {
            resource: 'Payments',
            function: 'US Foreign Wire',
            permissions: {
              create: true,
              view: true,
              approve: true,
            },
          },
          {
            resource: 'Payments',
            function: 'SEPA CT',
            permissions: {
              create: true,
              view: true,
              approve: true,
            },
          },
          {
            resource: 'Entitlements',
            function: 'Manage Data Groups',
            permissions: {
              view: true,
              edit: true,
              create: true,
              delete: true,
            },
          },
          {
            resource: 'Entitlements',
            function: 'Manage Function Groups',
            permissions: {
              view: true,
              edit: true,
              create: true,
              delete: true,
            },
          },
          {
            resource: 'Limits',
            function: 'Manage Limits',
            permissions: {
              view: true,
              edit: true,
              create: true,
              delete: true,
            },
          },
          {
            resource: 'Actions',
            function: 'Manage Action Recipes',
            permissions: {
              execute: true,
              view: true,
              edit: true,
              create: true,
              delete: true,
            },
          },
          {
            resource: 'User',
            function: 'Manage Users',
            permissions: {
              execute: true,
              view: true,
              edit: true,
              create: true,
              delete: true,
            },
          },
          {
            resource: 'Service Agreement',
            function: 'Assign Users',
            permissions: {
              execute: true,
              view: true,
              edit: true,
              create: true,
              delete: true,
            },
          },
          {
            resource: 'Service Agreement',
            function: 'Assign Permissions',
            permissions: {
              execute: true,
              view: true,
              edit: true,
              create: true,
              delete: true,
              approve: true,
            },
          },
          {
            resource: 'Service Agreement',
            function: 'Manage Service Agreements',
            permissions: {
              execute: true,
              view: true,
              edit: true,
              create: true,
              delete: true,
            },
          },
          {
            resource: 'Legal Entity',
            function: 'Manage Legal Entities',
            permissions: {
              view: true,
            },
          },
          {
            resource: 'Approvals',
            function: 'Assign Approval Policies',
            permissions: {
              create: true,
              delete: true,
              edit: true,
              view: true,
            },
          },
        ],
      },
    ],
  },
  {
    urlPattern: '/client-api/v2/productsummary/context/arrangements',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: arrangementsMock,
      },
    ],
  },
  {
    urlPattern: '/client-api/v2/account/statements/categories',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: accountStatementsCategoriesMock,
      },
    ],
  },
  {
    urlPattern: '/client-api/v2/account/statements',
    method: 'POST',
    responses: [
      {
        status: 200,
        body: accountStatementsMock,
      },
    ],
  },
  {
    urlPattern: '/client-api/v2/account/statements/arrangements',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {
          arrangements: [
            {
              id: '1cdb2224-8926-4b4d-a99f-1c9dfbbb4691',
              IBAN: 'CY3887370130MJFTJ3B8Y9W7IGRO',
              BBAN: 'K8873701303897',
              number: 'PANS',
              productKindName: 'Current Account',
              displayName: 'Mr and Mrs J. Smith',
              bookedBalance: 1000,
              principalAmount: 620.54,
              currentInvestmentValue: 0.16,
              currency: 'AED',
              favorite: true,
            },
            {
              id: '1cdb2224-8926-4b4d-a99f-1c9dfbbb4692',
              IBAN: 'GB60OHSF29521903589133',
              BBAN: 'K029521903589133',
              number: 'PANS',
              productKindName: 'Current Account',
              displayName: 'Howlin Wolf',
              bookedBalance: 15000,
              principalAmount: 620.54,
              currentInvestmentValue: 0.16,
              currency: 'AED',
              favorite: true,
            },
          ],
        },
      },
    ],
  },
]);

const mockProviders: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AchPositivePayInterceptor,
    multi: true,
  },
  createMocksInterceptor(),
  ServiceAgreementsHttpServiceMocksProviderTemp,
];

export const environment: Environment = {
  production: false,
  apiRoot: '/api',
  mockProviders,
  locales: ['en-US', 'nl-NL'],
  common: {
    designSlimMode: false,
  },
  isTelemetryTracerEnabled: true,
  bbApiKey: 'a554d1b4-6514-4f33-8211-3f52a03ca142',
  telemetryCollectorURL: 'https://rum-collector.backbase.io/v1/traces',
  env: 'local',
};

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer:
    'https://identity.dev.sdbxaz.azure.backbaseservices.com/auth/realms/customer',

  // URL of the SPA to redirect the user to after login
  redirectUri: document.baseURI,

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'bb-web-client',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications. (IE: does not support PKCE)
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  scope: 'openid',

  requireHttps: false,

  showDebugInformation: true,

  logoutUrl: document.baseURI + 'logout',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
