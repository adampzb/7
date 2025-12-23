import { Component, OnInit, Input } from '@angular/core';

@Component({
  
  selector: 'app-profile-comments',
  standalone: false,
  templateUrl: './profile-comments.component.html',
  styleUrls: ['./profile-comments.component.scss']
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
