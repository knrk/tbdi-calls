import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  customers: Customer[];
  loading: boolean;

  constructor(private dataService:CustomersService) { }

  ngOnInit() {
    this.loading = true;
    this.dataService.getCustomers().subscribe((customers) => {
      this.customers = customers;
      this.loading = false;
    });
  }

  lookupRowClass(rowData: any, rowIndex: number): string {
    return rowData.active ? '' : 'disabled';
  }

  deactivateCustomer(customerId: number) {
    console.log(customerId);
    // @todo call REST API to deactivate customer
  }

  editCustomer(customerId: number) {
    // @todo Implement edit customer
    console.log(customerId);
  }
}

export interface Customer {
  id: number;
  cid: number;
  fullname: string;
  active: boolean;
  phone: number;
  email: string;
  registration: string;
} 