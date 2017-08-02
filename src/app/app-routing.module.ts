import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PaymentsComponent } from './pages/payments/payments.component';

const appRoutes: Routes = [{
    path: '', component: DashboardComponent
  }, {
    path: 'payments', component: PaymentsComponent
  }, {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}