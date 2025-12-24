import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '@discussit/core/models/post.model';
import { PostService } from '@discussit/core/services/post/post.service';
import { environment } from '@discussit/env/environment';
import { MatDialog } from '@angular/material/dialog';
import { ReportDialogComponent } from '@discussit/app/components/report-dialog/report-dialog.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { SafeContentPipe } from '@discussit/core/pipes/safe-content/safe-content.pipe';
import { TimeSincePipe } from '@discussit/core/pipes/time-since/time-since.pipe';

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatCardTitle,
    MatCardContent,
    SafeContentPipe,
    TimeSincePipe
  ]
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() user_id: number;
  @Input() showFooter: boolean = true;

  user_vote = 0;

  constructor(
    private postService: PostService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.user_vote = this.post?.user_vote?.vote;
  }

  upvoteClicked(){
    if(!this.user_id) return
    if (this.user_vote === 1) {
      this.removeVote();
    } else {
      this.upvote();
    }
  }

  downvoteClicked(){
    if(!this.user_id) return
    if (this.user_vote === -1) {
      this.removeVote();
    } else {
      this.downvote();
    }
  }

  upvote() {
    this.postService.upvotePost(this.post.uuid).subscribe(
      (response: any) => {
        this.setVoteData(response);
      }, (err) => {
        console.log(err);
      }
    );
  }

  downvote(){
    this.postService.downvotePost(this.post.uuid).subscribe(
      (response) => {
        this.setVoteData(response);
      }, (err) => {
        console.log(err);
      }
    );
  }

  removeVote() {
    this.postService.removePostVote(this.post.uuid).subscribe(
      (response) => {
        this.setVoteData(response);
      }, (err) => {
        console.log(err);
      }
    );
  }

  setVoteData(response) {
    this.user_vote = response?.vote;
    this.post.votes = response?.votes;
  }

  checkBookmark() {
    if(this.post.user_bookmark) {
      this.removeBookmark();
    } else {
      this.addBookmark();
    }
  }

  removeBookmark() {
    this.postService.removeBookmark(this.post.uuid, this.post.user_bookmark.id).subscribe(
      (response: any) => {
        this.post.user_bookmark = null;
      },
      (err) => {
        console.log(err);
      });
  }

  addBookmark() {
    const data = {
      user: this.user_id
    }
    this.postService.addBookmark(this.post.uuid, data).subscribe(
      (response: any) => {
        this.post.user_bookmark = response;
      },
      (err) => {
        console.log(err);
      });
  }

  sharePost(uuid: string) {

  }

  report() {
    if (!this.user_id) {
      this.redirectToLogin();
      return;
    } else {
      const dialogWidth = window.innerWidth <= 540 ? `90vw` : `527px`;
      const dialogRef = this.dialog.open(ReportDialogComponent, {
        width: dialogWidth,
        maxWidth: dialogWidth,
        data: {
          user: this.user_id,
          uuid: this.post.uuid,
          url: `${window.location.href}`
        }
      });
      dialogRef.afterClosed().subscribe(
        (response: any) => {
          if (response) {
            this.post.report = response;
          }
        });
    }
  }

  redirectToLogin() {
    window.location.href = `${environment.loginUrl}`;
  }
}
