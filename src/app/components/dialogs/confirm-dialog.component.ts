import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})

export class ConfirmDialogComponent {

  public title: string;

  public content: any;

  constructor(public dialogRef: MdDialogRef<ConfirmDialogComponent>) { }

}