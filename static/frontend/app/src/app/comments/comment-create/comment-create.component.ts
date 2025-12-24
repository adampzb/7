import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '@discussit/core/models/comment.model';
import { User } from '@discussit/core/models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CommentEditComponent } from '../comment-edit/comment-edit.component';

@Component({
  
  selector: 'app-comment-create',
  standalone: true,
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    EditorModule,
    CommentEditComponent
  ]
})
export class CommentCreateComponent implements OnInit {
  @Input() user: User;
  @Input() uuid: string;
  @Input() nested: boolean;
  @Input() parent: number;
  @Input() child_group = false;
  @Input() mentioned_users: Set<any>;

  @Output() comment_response = new EventEmitter<Comment>()
  @Output() remove_mention = new EventEmitter<any>()
  @Output() clear_comment = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {

  }

  emitComment(data: any) {
    this.comment_response.emit(data);
  }

  removeMention(data: any) {
    this.remove_mention.emit(data);
  }

  clearComment(data: any) {
    this.clear_comment.emit(data);
  }
}
