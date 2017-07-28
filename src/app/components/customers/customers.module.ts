import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer.component';

import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule
  ],
  declarations: [
    CustomersComponent,
    CustomerComponent
  ],
  providers: []
})

export class CustomersModule {}