import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '@discussit/core/services/post/post.service';
import { UserService } from '@discussit/core/services/user/user.service';
import { GroupService } from '@discussit/core/services/group/group.service';
import { User } from '@discussit/core/models/user.model';
import { Post } from '@discussit/core/models/post.model';
import { Group } from '@discussit/core/models/group.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EditorModule } from '@tinymce/tinymce-angular';
@Component({
  
  selector: 'app-group-post',
  standalone: true,
  templateUrl: './group-post.component.html',
  styleUrls: ['./group-post.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    EditorModule
  ]
})
export class GroupPostComponent implements OnInit {
  group: Group;
  user: User;

  constructor(
    private groupService: GroupService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const group_id = this.route.snapshot.params.id;
    if(group_id){
      this.getGroupDetail(group_id);
    }
    this.getAuthUser();
  }

  getAuthUser(): void {
    this.userService.userInitialized.subscribe(
      (initialized: boolean) => {
        if (initialized) {
          this.userService.user.subscribe(
            (user: User) => {
              this.user = user;
              console.log(this.user);
            });
        }
      });
  }

  getGroupDetail(group_id: number){
    this.groupService.getGroupDetail(group_id).subscribe(
      (response: Group) => {
        this.group = response;
      },
      (err: any) => {
        console.log(err);
      })
  }

}
