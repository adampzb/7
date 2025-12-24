import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  
  selector: 'app-profile-history',
  standalone: true,
  templateUrl: './profile-history.component.html',
  styleUrls: ['./profile-history.component.scss'],
  imports: [CommonModule]
})
export class ProfileHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
