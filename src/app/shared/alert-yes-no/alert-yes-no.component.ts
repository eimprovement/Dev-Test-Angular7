import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alert-yes-no',
  templateUrl: './alert-yes-no.component.html',
  styleUrls: ['./alert-yes-no.component.scss']
})
export class AlertYesNoComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AlertYesNoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export const ALERT_YES_NO_DFLT_PROPS = {
  width: '300px'
};
