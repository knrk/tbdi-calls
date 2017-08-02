import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { Customer as ICustomer } from '../../../interfaces/customer';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'add-customer-dialog',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})

export class AddCustomerDialogComponent {

  private customer: ICustomer;
  
  public name: string;  
  public surname: string;
  public email: string;
  public phone: number;

  constructor(public dialogRef: MdDialogRef<AddCustomerDialogComponent>,
              private dataService: CustomersService) {}

  addCustomer() {
    //console.log('addCustomer from add-customer.component');

    let customer = {
      id: undefined,
      cid: undefined,
      fullname: this.name + ' ' + this.surname,
      active: true,
      email: this.email,
      phone: this.phone,
      registration: new Date().toLocaleString()
    };

    this.dataService.addCustomer(customer)
      .subscribe();
  }
}