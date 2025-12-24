import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { ReportService } from '@discussit/core/services/report/report.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-report-dialog',
  standalone: true,
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonToggleModule
  ]
})
export class ReportDialogComponent implements OnInit {
  public validateUrlRegex = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
  reportInfoControl: FormControl = new FormControl();
  urlControl: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.pattern(this.validateUrlRegex)]
  });
  typeControl: FormControl = new FormControl();
  reporter: number;
  reported_user: string;
  selectedType: any;
  readOnlyUrl: boolean;
  types = [];

  constructor(
    public dialogRef: MatDialogRef<ReportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reportService: ReportService
  ) { }

  ngOnInit(): void {
    // this.isLoading = true;
    // this.slug = this.data.slug ? this.data.slug : null;
    // this.source = this.data.source;
    // if (!this.source || !this.sources.includes(this.source)) {
    //   throw new Error('A valid source is required');
    // }
    // this.reporter = this.data.user?.id;
    this.getReportTypes();
    // if (this.data.url) {
    //   this.urlControl.setValue(this.data.url);
    // } else {
    //   this.urlControl.setValue(window.location.href);
    // }
    // this.readOnlyUrl = this.urlControl.value ? true : false ;
  }

  getReportTypes(){
    this.reportService.getReportTypes().subscribe(
      (response: any) => {
        this.types = response;
      })
  }

  radioSelectEvent(event) {
    console.log(event);
    this.selectedType = event.value;
  }

  create() {
    this.dialogRef.close(this.selectedType);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
