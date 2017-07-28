import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  constructor(private dataService:CustomersService) { }

  ngOnInit() {
    this.dataService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }

}

interface Customer {
  id: number;
  cid: number;
  fullname: string;
  active: boolean;
  phone: number;
  email: string;
  registration: string;
}