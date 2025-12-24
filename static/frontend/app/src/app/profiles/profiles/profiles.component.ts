import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '@discussit/core/services/user/user.service';
import { CommentService } from '@discussit/core/services/comment/comment.service';
import { GroupService } from '@discussit/core/services/group/group.service';
import { User } from '@discussit/core/models/user.model';
import { Group } from '@discussit/core/models/group.model';
import { UserComment } from '@discussit/core/models/comment.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNavList } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { ProfileOverviewComponent } from '../profile-overview/profile-overview.component';
import { ProfilePostsComponent } from '../profile-posts/profile-posts.component';
import { ProfileCommentsComponent } from '../profile-comments/profile-comments.component';
import { ProfileBookmarksComponent } from '../profile-bookmarks/profile-bookmarks.component';
import { ProfileUpvotesComponent } from '../profile-upvotes/profile-upvotes.component';
import { ProfileDownvotesComponent } from '../profile-downvotes/profile-downvotes.component';
import { ProfileHistoryComponent } from '../profile-history/profile-history.component';

@Component({
  
  selector: 'app-profiles',
  standalone: true,
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatNavList,
    MatListItem,
    ProfileOverviewComponent,
    ProfilePostsComponent,
    ProfileCommentsComponent,
    ProfileBookmarksComponent,
    ProfileUpvotesComponent,
    ProfileDownvotesComponent,
    ProfileHistoryComponent
  ]
})
export class ProfileComponent implements OnInit {
  isLoading: boolean = false;
  user: User;
  page: number = 1;
  showLoader: boolean = false;
  next: string;
  userGroups: Group[] = [];
  modGroups: any[] = [];
  userComments: UserComment[] = [];
  currentUser: string;
  self: boolean = false;
  profile: User;

  constructor(
    private userService: UserService,
    private groupService: GroupService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.params.username;
    this.getAuthUser();
    if(this.currentUser) {
      this.getUserByUsername();
    }
    // this.getModeratorGroups();
    this.getUserComments();
  }

  getAuthUser() {
    this.userService.userInitialized.subscribe(
      (initialized: boolean) => {
        if(initialized) {
          this.userService.user.subscribe(
            (response: User) => {
              this.user = response;
              if(this.user && this.user.username === this.currentUser) {
                this.self = true;
              }
          })
        }
      })
  }

  getUserByUsername(){
    this.userService.getUserByUsername(this.currentUser).subscribe(
      (response: User) => {
        this.profile = response;
        this.getUserGroups();
      })
  }

  getUserGroups(){
    this.groupService.getUserGroups('', this.profile.id, '').subscribe(
      (response: any) => {
        this.userGroups = response;
      })
  }

  getUserComments(){
    this.commentService.userComments(this.currentUser).subscribe(
      (response: any) => {
        this.userComments = response;
      })
  }

  getModeratorGroups(){
    this.groupService.filterMembers('MODERATOR', '', this.user.id).subscribe(
      (response: any) => {
        this.modGroups = response;
      })
  }
}
