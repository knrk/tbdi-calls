import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomersService } from '../../services/customers.service';

import { Customer as ICustomer } from '../../interfaces/customer';

@Component({
  selector: 'app-customers',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  customers: ICustomer[];
  loading: boolean;

  constructor(private dataService:CustomersService) { }

  lookupRowClass(rowData: any, rowIndex: number): string {
    return rowData.active ? '' : 'disabled';
  }

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

  deactivateCustomer(customerId: number, customerActivity: boolean) {
    let findIndex = this.customers.findIndex(customer => customer.id === customerId);
    this.customers[findIndex].active = !this.customers[findIndex].active;

    this.dataService.toggleActivity(customerId, customerActivity).subscribe();
  }

  deleteCustomer(customerId: number) {    
    this.dataService.deleteCustomer(customerId).subscribe(() => {
      let findIndex = this.customers.findIndex(customer => customer.id === customerId);
      this.customers.splice(findIndex, 1);
      this.loadData();
    });
  }
} 