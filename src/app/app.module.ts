import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { FormModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { CustomersComponent } from './components/customers/customers.component';

import { DataService } from './services/data.service';

const appRoutes: Routes = [{
    path: '', component: DashboardComponent
  }, {
    path: 'payments', component: PaymentsComponent
  }, {
    path: 'customers', component: CustomersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PaymentsComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule {

}