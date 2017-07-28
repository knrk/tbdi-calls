import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentsComponent } from './components/payments/payments.component';
//import { CustomersComponent } from './components/customers/customers.component';

const appRoutes: Routes = [{
    path: '', component: DashboardComponent
  }, {
    path: 'payments', component: PaymentsComponent
//  }, {
    //path: 'customers', component: CustomersComponent
  }, {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}