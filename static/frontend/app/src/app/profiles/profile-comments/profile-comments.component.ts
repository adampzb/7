import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  
  selector: 'app-profile-comments',
  standalone: true,
  templateUrl: './profile-comments.component.html',
  styleUrls: ['./profile-comments.component.scss'],
  imports: [CommonModule, MatProgressSpinnerModule]
})
export class ProfileCommentsComponent implements OnInit {
  @Input() comments: any[] = [];
  @Input() user;
  @Input() self: boolean;
  @Input() currentUser: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
