import { Component } from '@angular/core';

import { DialogsService } from './services/dialogs.service';

@Component({
  selector: 'tbdi-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent {

  public result: any;

  constructor(private dialogService: DialogsService) {}

  addCustomer() {
    this.dialogService
      .addCustomer()
      .subscribe(result => {
        this.result = result;
        console.log(this.result);
      });
  }
}