import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@discussit/core/services/user/user.service';
import { PostService } from '@discussit/core/services/post/post.service';
import { User } from '@discussit/core/models/user.model';
import { Post } from '@discussit/core/models/post.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PostComponent } from '@discussit/app/post/post/post.component';
import { PostLoaderComponent } from '@discussit/app/post/post-loader/post-loader.component';

@Component({
  
  selector: 'app-profile-posts',
  standalone: true,
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.scss'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    PostComponent,
    PostLoaderComponent
  ]
})
export class ProfilePostsComponent implements OnInit {
  @Input() user: User;
  @Input() self: boolean;
  @Input() currentUser: string;

  posts: Post[] = [];
  page: number = 1;
  isLoading: boolean = false;
  showLoader: boolean = false;
  next: string;
  
  constructor(
    private userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postService.filterPosts(this.page, '', '', '', this.currentUser).subscribe(
      (response: any) => {
        this.posts = [...this.posts, ...response.results];
        this.next = response.next;
        if (this.next) {
          this.page = parseInt(this.next.split('=')[1]);
        }
        this.isLoading = false;
        this.showLoader = false;
      },
      (err: any) => {
        console.log(err);
        this.isLoading = false;
        this.showLoader = false;
      })
  }

  loadMorePosts(): void {
    this.showLoader = true;
    this.getPosts();
  }

}
