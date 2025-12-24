import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@discussit/core/services/user/user.service';
import { User } from '@discussit/core/models/user.model';
import { Group } from '@discussit/core/models/group.model';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PostComponent } from '@discussit/app/post/post/post.component';

@Component({
  
  selector: 'app-profile-bookmarks',
  standalone: true,
  templateUrl: './profile-bookmarks.component.html',
  styleUrls: ['./profile-bookmarks.component.scss'],
  imports: [CommonModule, MatProgressSpinnerModule, PostComponent]
})
export class ProfileBookmarksComponent implements OnInit {
  isLoading: boolean = false;
  @Input() user: User;
  bookmarks = [];
  @Input() self: boolean;
  @Input() currentUser: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.getUserBookmarks();
  }

  getUserBookmarks(){
    this.userService.getBookmarks(this.currentUser).subscribe(
      (response: any) => {
        this.bookmarks = response;
      })
  }

}
