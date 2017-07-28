import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CustomersService {

  constructor(public http:Http) { }

  getCustomers() {
    return this.http.get('http://localhost:3000/customers')
      .map(response => response.json()); 
  }
}