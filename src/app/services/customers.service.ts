import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Customer as ICustomer } from '../interfaces/customer';

@Injectable()
export class CustomersService {

  server: string = 'http://localhost:3000';

  constructor(public http:Http) { }

  getCustomers() {
    return this.http.get(this.server + '/customers')
      .map(response => response.json()); 
  }

  toggleActivity(customerId: number, activity: boolean) {    
    let body = {active: !activity};

    return this.http.patch(this.server + '/customers/' + customerId, body)
      .map(response => response.json());
  }

  addCustomer(customer: ICustomer) {
    return this.http.post(this.server + '/customers', customer)
      .map(response => response.json());
  }

  deleteCustomer(customerId: number) {
    return this.http.delete(this.server + '/customers/' + customerId);
  }
}