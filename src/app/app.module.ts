import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app';
import { AppRoutingModule } from './app-routing.module';
import { CustomersModule } from './pages/customers/customers.module';
import { DialogModule } from './components/dialogs/dialogs.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PaymentsComponent } from './pages/payments/payments.component';


@NgModule({
  imports: [
    AngularSvgIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    CustomersModule,
    DialogModule,
    AppRoutingModule // order matters! must be the last
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PaymentsComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}