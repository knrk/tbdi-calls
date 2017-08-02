import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  MdButtonModule, MdDialogModule, MdInputModule
} from '@angular/material';

import { DialogsService } from '../../services/dialogs.service';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { AddCustomerDialogComponent } from './add-customer/add-customer.component';

@NgModule({
  imports: [
    FormsModule,
    MdDialogModule,
    MdButtonModule,
    MdInputModule
  ],
  exports: [
    ConfirmDialogComponent,
    AddCustomerDialogComponent
  ],
  declarations: [
    ConfirmDialogComponent,
    AddCustomerDialogComponent
  ],
  providers: [
    DialogsService
  ],
  entryComponents: [
    ConfirmDialogComponent,
    AddCustomerDialogComponent
  ]
})
export class DialogModule { }
