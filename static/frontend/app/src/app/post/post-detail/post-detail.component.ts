import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '@discussit/core/services/user/user.service';
import { PostService } from '@discussit/core/services/post/post.service';
import { Post } from '@discussit/core/models/post.model';
import { User } from '@discussit/core/models/user.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PostComponent } from '../post/post.component';
import { CommentGroupComponent } from '@discussit/app/comments/comment-group/comment-group.component';


@Component({
  selector: 'app-post-detail',
  standalone: true,
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    PostComponent,
    CommentGroupComponent
  ]
})
export class PostDetailComponent implements OnInit {
  post: Post;
  user: User;
  post_uuid: string;
  isLoading: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.post_uuid = this.route.snapshot.params.uuid;
    this.getAuthUser();
  }

  getAuthUser(): void {
    this.userService.userInitialized.subscribe(
      (initialized: boolean) => {
        if (initialized) {
          this.userService.user.subscribe(
            (user: User) => {
              this.user = user;
              // console.log(this.user);
            });
        }
      });
    this.getPostDetail();
  }

  getPostDetail() {
    this.postService.getPostDetail(this.post_uuid).subscribe(
      (response: any) => {
        this.post = response;
        this.isLoading = false;
      })
  }
}
