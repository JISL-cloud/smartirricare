// import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbDateAdapter, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';


import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TokenInterceptor } from './authentication/tokeninceptor';
import { CustomAdapter } from './_helpers/custom-adapter';
import { CustomDateParserFormatter } from './_helpers/custom-date-parser-formatter';
import { SpinnerHttpInterceptor } from './_helpers/SpinnerHttpInterceptor';
import { AuthService } from './authentication/auth.service';
import { ToastService } from './component/toast/toast.service';
import { AppConfigService } from './_services/appconfigservice ';
import { OnlydecimalDirective } from './_helpers/onlydecimal.directive';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BlankComponent } from './layouts/blank/blank.component';
import { ToastrModule } from 'ngx-toastr';
import { ConfigurationComponent } from './configuration/configuration.component';
import { BingApiLoaderService } from './dashboard/bing-api-loader.service';
import { SiteConditionsService } from './dashboard/site-conditions.service';
import { WINDOW_PROVIDERS } from './dashboard/window.service';
import { EventsComponent } from './events/events.component';
import { DataTablesModule } from 'angular-datatables';
import { DataloggerComponent } from './datalogger/datalogger.component';
import { UsersComponent } from './users/users.component';
import { UseraddeditComponent } from './users/useraddedit/useraddedit.component';
import { NgSelectModule } from '@ng-select/ng-select';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};   
const initializerConfigFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankComponent,
    NavigationComponent,
    SidebarComponent,
    BreadcrumbComponent,
    OnlydecimalDirective,
    ConfigurationComponent,
    EventsComponent,
    DataloggerComponent,
    UsersComponent,
    UseraddeditComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
	  PerfectScrollbarModule,
    NgbModule,
    NgxSpinnerModule,
    NgSelectModule,
    DataTablesModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-full-width',
      preventDuplicates: true,
      closeButton: true,
      enableHtml: true,
    }),
    RouterModule.forRoot(Approutes, { useHash: false, relativeLinkResolution: 'legacy' })
  ],
  providers: [AuthService, ToastService, SiteConditionsService, WINDOW_PROVIDERS, BingApiLoaderService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerHttpInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializerConfigFn,
      multi: true,
      deps: [AppConfigService],
    },
  ],
  bootstrap: [AppComponent],
  exports: [OnlydecimalDirective]
})
export class AppModule {}
