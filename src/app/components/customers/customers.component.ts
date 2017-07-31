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
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.dataService.getCustomers().subscribe((customers) => {
      this.customers = customers;
      this.loading = false;
    });
  }

  lookupRowClass(rowData: any, rowIndex: number): string {
    return rowData.active ? '' : 'disabled';
  }

  deactivateCustomer(customerId: number, customerActivity: boolean) {
    this.dataService.toggleActivity(customerId, customerActivity).subscribe((customer) => {
      this.loadData();
      console.log(customer);
    });
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