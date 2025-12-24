import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  
  selector: 'app-profile-overview',
  standalone: true,
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.scss'],
  imports: [CommonModule]
})
export class ProfileOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
