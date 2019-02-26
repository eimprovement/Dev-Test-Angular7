import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  /*  Public Properties */
  data: { title: string; subtitle: string };
  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) importData: { title: string; subtitle: string }
  ) {
    this.data = importData;
  }

  /*  Life Cycle Hooks */
  ngOnInit() {}

  /*  Public methods */
  confirm() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }
}
