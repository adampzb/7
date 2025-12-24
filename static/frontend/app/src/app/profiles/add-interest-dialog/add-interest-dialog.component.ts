import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  
  selector: 'app-add-interest-dialog',
  standalone: true,
  templateUrl: './add-interest-dialog.component.html',
  styleUrls: ['./add-interest-dialog.component.scss'],
  imports: [CommonModule]
})
export class AddInterestDialogComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
