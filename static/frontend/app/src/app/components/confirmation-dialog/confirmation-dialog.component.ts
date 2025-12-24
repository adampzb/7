import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule]
})
export class ConfirmationDialogComponent implements OnInit {
  showCancel: boolean;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.showCancel = this.data.showCancel ? this.data.showCancel : true;
  }

  closeDialog(isConfirmed: boolean) {
    this.dialogRef.close(isConfirmed);
  }
}
