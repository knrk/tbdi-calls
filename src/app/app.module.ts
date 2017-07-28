import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomersModule } from './components/customers/customers.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentsComponent } from './components/payments/payments.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    CustomersModule,
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