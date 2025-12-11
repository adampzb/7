import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@reddit/core/services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  isLoading: boolean = false;
  hidePassword: boolean = true;
  errors = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // Updated to use username instead of first_name/last_name
    this.registerForm = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required]
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password1: new FormControl('', { validators: [Validators.required] }),
      password2: new FormControl('', { validators: [Validators.required] })
    });
    console.log('Updated registration form:', this.registerForm);
  }

  get formControl() {
    return this.registerForm.controls;
  }

  toggleVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    console.log('Sign-up form submitted');
    console.log('Form valid:', this.registerForm.valid);
    console.log('Form values:', this.registerForm.value);
    console.log('Form errors:', this.getFormValidationErrors());
    
    // Mark all fields as touched to show validation errors
    this.markFormGroupTouched(this.registerForm);
    
    if (!this.registerForm.valid) {
      console.log('Form is invalid, not submitting');
      this.snackbar.open('Please fill in all required fields', 'Close', { duration: 3000 });
      return;
    }

    const formData = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password1: this.registerForm.value.password1,
      password2: this.registerForm.value.password2
    };
    
    console.log('Sending registration request with data:', formData);
    this.isLoading = true;
    
    this.userService.register(formData).subscribe(
      (result) => {
        console.log('Registration successful:', result);
        this.isLoading = false;
        this.registerForm.reset();
        this.snackbar.open('Registered successfully. Proceed to login', 'Close', { duration: 3000 });
        this.router.navigate(['sign-in']);
      },
      (err) => {
        console.error('Registration error:', err);
        this.isLoading = false;
        if (err.error) {
          if (err.error.password1) {
            this.snackbar.open(`${err.error.password1[0]}`, 'Close', { duration: 5000 });
          } else if (err.error.email) {
            this.snackbar.open(`${err.error.email[0]}`, 'Close', { duration: 5000 });
          } else if (err.error.non_field_errors) {
            this.snackbar.open(err.error.non_field_errors[0], 'Close', { duration: 5000 });
          } else {
            this.snackbar.open('Registration failed. Please try again.', 'Close', { duration: 5000 });
          }
        } else {
          this.snackbar.open('Network error. Please check your connection.', 'Close', { duration: 5000 });
        }
      }
    );
  }

  // Helper method to mark all form fields as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  // Helper method to get form validation errors for debugging
  private getFormValidationErrors() {
    let formErrors: any = {};
    Object.keys(this.registerForm.controls).forEach(key => {
      const controlErrors = this.registerForm.get(key)?.errors;
      if (controlErrors) {
        formErrors[key] = controlErrors;
      }
    });
    return formErrors;
  }
}
