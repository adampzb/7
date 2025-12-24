import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '@discussit/core/services/post/post.service';
import { UserService } from '@discussit/core/services/user/user.service';
import { GroupService } from '@discussit/core/services/group/group.service';
import { User } from '@discussit/core/models/user.model';
import { Post } from '@discussit/core/models/post.model';
import { Group } from '@discussit/core/models/group.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PostComponent } from '@discussit/app/post/post/post.component';
import { PostLoaderComponent } from '@discussit/app/post/post-loader/post-loader.component';

@Component({
  
  selector: 'app-group-feed',
  standalone: true,
  templateUrl: './group-feed.component.html',
  styleUrls: ['./group-feed.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    PostComponent,
    PostLoaderComponent
  ]
})
export class GroupFeedComponent implements OnInit, OnChanges {
  groupPosts: Post[] = []
  user: User;
  @Input() group: Group;
  isLoading: boolean = true;

  constructor(
    private groupService: GroupService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAuthUser();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.group){
      this.getFeed();
    }
  }

  getAuthUser(): void {
    this.userService.userInitialized.subscribe(
      (initialized: boolean) => {
        if (initialized) {
          this.userService.user.subscribe(
            (user: User) => {
              this.user = user;
            });
        }
      });
  }

  getFeed(){
    this.groupService.getGroupPosts(this.group.id).subscribe(
      (response: any) => {
        this.groupPosts = response;
        console.log(this.groupPosts);
        this.isLoading = false;
      },
      (err: any) => {
        console.log(err);
        this.isLoading = false;
      })
  }

  redirect(){
    this.router.navigate(['submit-post'], {relativeTo: this.route})
  }

}
