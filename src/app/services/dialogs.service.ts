import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { ConfirmDialogComponent } from '../components/dialogs/confirm-dialog.component';
import { AddCustomerDialogComponent } from '../components/dialogs/add-customer/add-customer.component';

@Injectable()
export class DialogsService {

  constructor(private dialog: MdDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MdDialogRef<ConfirmDialogComponent>;

    dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.content = message;

    return dialogRef.afterClosed();
  }

  public addCustomer() {
    let dialogRef: MdDialogRef<AddCustomerDialogComponent>;

    dialogRef = this.dialog.open(AddCustomerDialogComponent);
    
    return dialogRef.afterClosed();
  }
}