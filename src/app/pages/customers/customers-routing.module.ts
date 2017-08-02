import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer.component';

const customersRoutes: Routes = [{
  path: 'customers', component: CustomersComponent
}, {
  path: 'customer/:id', component: CustomerComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(customersRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CustomersRoutingModule {}