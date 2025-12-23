import { Component, OnInit, Input, Output, ChangeDetectorRef, AfterViewInit } from '@angular/core';
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

declare var tinymce: any;


@Component({
  selector: 'app-create-post',
  standalone: false,
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit, AfterViewInit {


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

  ngAfterViewInit(): void {
    this.initializeTinyMCE();
  }

  initializeTinyMCE(): void {
    tinymce.init({
      selector: '#post-content',
      plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
      toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
      height: 360,
      menubar: true,
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
      setup: (editor) => {
        editor.on('init', () => {
          // Set initial content if available
          if (this.content) {
            editor.setContent(this.content);
          }
        });
        
        editor.on('change', () => {
          const content = editor.getContent();
          this.postForm.controls.content.setValue(content);
        });
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up TinyMCE instance when component is destroyed
    if (tinymce.get('post-content')) {
      tinymce.remove('#post-content');
    }
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
