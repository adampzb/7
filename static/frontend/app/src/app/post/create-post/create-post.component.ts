import { Component, OnInit, Input, Output, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { MatDialog } from '@angular/material/dialog';
import { HttpEventType } from '@angular/common/http';
// import FroalaEditor from 'froala-editor';
import { PostService } from '@discussit/core/services/post/post.service';
import { UserService } from '@discussit/core/services/user/user.service';
import { GroupService } from '@discussit/core/services/group/group.service';
import { User } from '@discussit/core/models/user.model';
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
  selector: 'app-create-post',
  standalone: true,
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
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
export class CreatePostComponent implements OnInit {
  public tinymceConfig = {
    plugins: 'link lists code',
    toolbar: 'bold italic underline strikethrough | bullist numlist | blockquote code | link | removeformat',
    menubar: false,
    statusbar: false,
    placeholder: 'Write your post content here...',
    height: 400,
    skin: 'oxide',
    content_css: 'default'
  };

  postForm: FormGroup;
  content: any;
  user: User;
  isLoading: boolean = true;
  selected: null;
  formData: any;
  @Input() group: Group;
  edit: boolean = false;
  
  constructor(
    private postService: PostService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getAuthUser();
  }

  initializeForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', {
        validators: [Validators.required]
      }),
      content: new FormControl(this.content, {
        validators: [Validators.required]
      })
    });

    this.postForm.valueChanges
      .pipe(debounceTime(3000), distinctUntilChanged())
      .subscribe(
        (response) => {
          console.log(response);
        });
    this.isLoading = false;
  }

  public onEditorReady(editor: any) {
    console.log('TinyMCE editor is ready to use!', editor);
  }

  public onEditorChange(event: any) {
    // TinyMCE provides content in the event object
    if (event && event.editor) {
      this.postForm.patchValue({ content: event.editor.getContent() });
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

  submit() {
    const data = {
      title: this.postForm.controls.title.value,
      content: this.postForm.controls.content.value,
      author: this.user.id,
      group: this.group ? this.group.id : null
    }

    this.postService.createPost(data).subscribe(
      (response: any) => {
        this.router.navigate(['', response.uuid])
      },
      (err: any) => {
        console.log(err)
      });
  }

}
