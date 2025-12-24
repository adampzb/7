import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '@discussit/core/models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { GroupService } from '@discussit/core/services/group/group.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  
  selector: 'app-create-group',
  standalone: true,
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class CreateGroupComponent implements OnInit {
  new: boolean = true;
  user: User;
  groupForm: FormGroup;

  types = [
    {
      title: 'Public',
      value: 'PUBLIC',
      info: 'Anyone can view, post, and comment to this community.'
    },
    {
      title: 'Restricted',
      value: 'RESTRICTED',
      info: 'Anyone can view this community, but only approved users can post.'
    },
    {
      title: 'Private',
      value: 'Private',
      info: 'Only approved users can view and submit to this community.'
    }
  ]

  constructor(
    public dialogRef: MatDialogRef<CreateGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router,
    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.user = this.data.user;
    this.initialize();
  }

  initialize(){
    this.groupForm = new FormGroup({
      title: new FormControl('', {
        validators: [Validators.required]
      }),
      description: new FormControl('', {
        validators: [Validators.required]
      }),
      type: new FormControl(this.types[0].value, {
        validators: [Validators.required]
      })
    });

    this.groupForm.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(
        (response) => {
          console.log(response);
        });
  }

  close(){
    this.dialogRef.close();
  }

  submit() {
    const groupData = {
      name: this.groupForm.controls.title.value,
      description: this.groupForm.controls.description.value,
      group_type: this.groupForm.controls.type.value.toUpperCase()
    }

    this.groupService.createGroup(groupData).subscribe(
      (response: any) => {
        console.log(response);
        this.close();
        this.router.navigate(['group', response.id]);
      },
      (err) => {
        console.log(err);
      })
  }
}
