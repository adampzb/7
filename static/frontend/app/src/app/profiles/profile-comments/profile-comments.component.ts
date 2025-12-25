import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TimeSincePipe } from '@discussit/core/pipes/time-since/time-since.pipe';
import { NgFor, NgIf } from '@angular/common';

@Component({
  
  selector: 'app-profile-comments',
  standalone: true,
  templateUrl: './profile-comments.component.html',
  styleUrls: ['./profile-comments.component.scss'],
  imports: [CommonModule, MatProgressSpinnerModule, TimeSincePipe, NgFor, NgIf]
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
