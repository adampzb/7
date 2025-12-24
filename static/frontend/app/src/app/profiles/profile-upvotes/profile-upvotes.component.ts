import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@discussit/core/services/user/user.service';
import { CommentService } from '@discussit/core/services/comment/comment.service';
import { GroupService } from '@discussit/core/services/group/group.service';
import { User } from '@discussit/core/models/user.model';
import { Group } from '@discussit/core/models/group.model';
import { UserComment } from '@discussit/core/models/comment.model';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PostComponent } from '@discussit/app/post/post/post.component';
import { TimeSincePipe } from '@discussit/core/pipes/time-since/time-since.pipe';

@Component({
  
  selector: 'app-profile-upvotes',
  standalone: true,
  templateUrl: './profile-upvotes.component.html',
  styleUrls: ['./profile-upvotes.component.scss'],
  imports: [CommonModule, MatProgressSpinnerModule, PostComponent, TimeSincePipe]
})
export class ProfileUpvotesComponent implements OnInit {
  isLoading: boolean = false;
  @Input() user: User;
  @Input() self: boolean;
  @Input() currentUser: string;

  upvotes = [];


  constructor(
    private userService: UserService,
    private groupService: GroupService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserUpvotes();
  }

  getUserUpvotes() {
    this.userService.userUpvotes(this.currentUser).subscribe(
      (response: any) => {
        const data = [...response.posts, ...response.comments];
        this.upvotes = data.sort((a, b) => b.created_at - a.created_at);
        console.log(this.upvotes);
      });
  }

}
