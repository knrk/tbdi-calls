import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule, SharedModule, SplitButtonModule } from 'primeng/primeng';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MdButtonModule, MdMenuModule } from '@angular/material';

import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer.component';

import { CustomersRoutingModule } from './customers-routing.module';

import { CustomersService } from '../../services/customers.service';

import { TelPipe } from '../../pipes/tel.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    SplitButtonModule,
    MdButtonModule,
    MdMenuModule,
    SharedModule,
    AngularSvgIconModule,
    CustomersRoutingModule
  ],
  declarations: [
    CustomersComponent,
    CustomerComponent,
    TelPipe
  ],
  providers: [
    CustomersService
  ]
})

export class CustomersModule {}