import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/user/user.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/snack-bar";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/icon";
const _c0 = () => ["../sign-in"];
export class SignUpComponent {
    constructor(userService, router, snackbar) {
        this.userService = userService;
        this.router = router;
        this.snackbar = snackbar;
        this.isLoading = false;
        this.hidePassword = true;
        this.errors = [];
    }
    ngOnInit() {
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
        this.userService.register(formData).subscribe((result) => {
            console.log('Registration successful:', result);
            this.isLoading = false;
            this.registerForm.reset();
            this.snackbar.open('Registered successfully. Proceed to login', 'Close', { duration: 3000 });
            this.router.navigate(['sign-in']);
        }, (err) => {
            console.error('Registration error:', err);
            this.isLoading = false;
            if (err.error) {
                if (err.error.password1) {
                    this.snackbar.open(`${err.error.password1[0]}`, 'Close', { duration: 5000 });
                }
                else if (err.error.email) {
                    this.snackbar.open(`${err.error.email[0]}`, 'Close', { duration: 5000 });
                }
                else if (err.error.non_field_errors) {
                    this.snackbar.open(err.error.non_field_errors[0], 'Close', { duration: 5000 });
                }
                else {
                    this.snackbar.open('Registration failed. Please try again.', 'Close', { duration: 5000 });
                }
            }
            else {
                this.snackbar.open('Network error. Please check your connection.', 'Close', { duration: 5000 });
            }
        });
    }
    // Helper method to mark all form fields as touched
    markFormGroupTouched(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            control?.markAsTouched({ onlySelf: true });
        });
    }
    // Helper method to get form validation errors for debugging
    getFormValidationErrors() {
        let formErrors = {};
        Object.keys(this.registerForm.controls).forEach(key => {
            const controlErrors = this.registerForm.get(key)?.errors;
            if (controlErrors) {
                formErrors[key] = controlErrors;
            }
        });
        return formErrors;
    }
    static { this.ɵfac = function SignUpComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SignUpComponent)(i0.ɵɵdirectiveInject(i1.UserService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.MatSnackBar)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SignUpComponent, selectors: [["app-sign-up"]], standalone: false, decls: 34, vars: 11, consts: [[1, "auth-container"], [1, "login-form"], ["align", "center", 1, "text-white"], ["autocomplete", "off", 1, "width-100", "auth-form", 3, "formGroup"], [1, "width-100", "margin-bottom-4"], ["for", "username"], ["id", "username", "placeholder", "johndoe", "formControlName", "username", "type", "text", 1, "form-input"], ["for", "email"], ["id", "email", "placeholder", "jane@email.com", "formControlName", "email", "type", "email", 1, "form-input"], [1, "input-column", "margin-bottom-4", 2, "display", "flex", "gap", "16px", "position", "relative"], [1, "width-100"], ["for", "password1"], ["id", "password1", "placeholder", "dankworld12", "formControlName", "password1", 1, "form-input", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 1, "toggle-visibility-btn", 3, "click"], ["for", "password2"], ["id", "password2", "placeholder", "dankworld12", "formControlName", "password2", 1, "form-input", 3, "type"], ["mat-button", "", "color", "primary", 1, "width-100", "custom-button", "block-button", 3, "click"], [1, "underline", "button-link", 3, "routerLink"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
            i0.ɵɵtext(3, "Sign up for DiscussIt");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "form", 3)(5, "div", 4)(6, "label", 5);
            i0.ɵɵtext(7, "Username");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 4)(10, "label", 7);
            i0.ɵɵtext(11, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 9)(14, "div", 10)(15, "label", 11);
            i0.ɵɵtext(16, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "input", 12);
            i0.ɵɵelementStart(18, "button", 13);
            i0.ɵɵlistener("click", function SignUpComponent_Template_button_click_18_listener() { return ctx.toggleVisibility(); });
            i0.ɵɵelementStart(19, "mat-icon");
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(21, "div", 10)(22, "label", 14);
            i0.ɵɵtext(23, "Confirm password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(24, "input", 15);
            i0.ɵɵelementStart(25, "button", 13);
            i0.ɵɵlistener("click", function SignUpComponent_Template_button_click_25_listener() { return ctx.toggleVisibility(); });
            i0.ɵɵelementStart(26, "mat-icon");
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(28, "button", 16);
            i0.ɵɵlistener("click", function SignUpComponent_Template_button_click_28_listener() { return ctx.onSubmit(); });
            i0.ɵɵtext(29, "Submit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "p");
            i0.ɵɵtext(31, "Already have an account? ");
            i0.ɵɵelementStart(32, "a", 17);
            i0.ɵɵtext(33, "Sign In");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formGroup", ctx.registerForm);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("type", ctx.hidePassword ? "password" : "text");
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("type", ctx.hidePassword ? "password" : "text");
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(10, _c0));
        } }, dependencies: [i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.FormGroupDirective, i4.FormControlName, i5.MatButton, i5.MatIconButton, i6.MatSuffix, i7.MatIcon, i2.RouterLink], styles: [".width-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.auth-container[_ngcontent-%COMP%] {\n  background-color: brown;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  color: white;\n  padding: 16px;\n  display: block;\n\n  .mat-form-field {\n    margin: 6px 0;\n  }\n}\n\n.form-input[_ngcontent-%COMP%] {\n  outline: none;\n  border: 1px solid #e6e6e6;\n  padding: 16px 12px;\n  margin: 8px 0;\n  font-size: 0.8rem;\n  width: -webkit-fill-available;\n  display: inline-flex;\n  background: transparent;\n  border-radius: 6px;\n  color: white;\n\n  &::placeholder {\n    color: inherit;\n  }\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  outline: none;\n  border: 1px solid white;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  font-size: 0.8rem;\n  color: white;\n  border-radius: 6px;\n  background: transparent;\n  width: 33%;\n  padding: 2px;\n\n  &.block-button {\n    width: 100%;\n  }\n\n  &:hover, &:focus {\n    background: rgba(255,255,255,0.2);\n  }\n\n  &:disabled {\n    background-color: #e6e6e6;\n    color: #707070;\n    cursor: not-allowed;\n  }\n\n  &.submit-button {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: white;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.buttons-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.separator-section[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 12px;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  border-radius: 1px;\n\n  p {\n    margin: 0;\n  }\n}\n\n.button-link[_ngcontent-%COMP%] {\n  outline: none;\n  border: 1px solid white;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  font-size: 0.8rem;\n  color: white;\n  border-radius: 6px;\n  background: transparent;\n  width: 33%;\n  padding: 6px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n@mixin divider {\n  display: block;\n  height: 1px;\n  margin-right: 11px;\n  margin-left: 11px;\n  -webkit-box-flex: 1;\n  flex: 1 1 0%;\n  background-image: linear-gradient(90deg, rgba(233, 237, 241, 0) 35%, rgb(161, 165, 190));\n  border-radius: 2px;\n}\n\n.divider-left[_ngcontent-%COMP%] {\n  @include divider;\n}\n\n.divider-right[_ngcontent-%COMP%] {\n  @include divider;\n  transform: rotate(180deg);\n}\n\n.toggle-visibility-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  top: 33px;\n  background: transparent;\n  color: white;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignUpComponent, [{
        type: Component,
        args: [{ selector: 'app-sign-up', standalone: false, template: "<div class=\"auth-container\">\n  <div class=\"login-form\">\n    <h2 class=\"text-white\" align=\"center\">Sign up for DiscussIt</h2>\n\n    <form class=\"width-100 auth-form\" [formGroup]=\"registerForm\" autocomplete=\"off\">\n      <div class=\"width-100 margin-bottom-4\">\n        <label for=\"username\">Username</label>\n        <input id=\"username\" placeholder=\"johndoe\" formControlName=\"username\" type=\"text\" class=\"form-input\">\n      </div>\n\n      <div class=\"width-100 margin-bottom-4\">\n        <label for=\"email\">Email</label>\n        <input id=\"email\" placeholder=\"jane@email.com\" formControlName=\"email\" type=\"email\" class=\"form-input\">\n      </div>\n\n      <div class=\"input-column margin-bottom-4\" style=\"display: flex; gap: 16px; position: relative\">\n        <div class=\"width-100\">\n          <label for=\"password1\">Password</label>\n          <input id=\"password1\" placeholder=\"dankworld12\" formControlName=\"password1\" [type]=\"hidePassword ? 'password' : 'text'\" class=\"form-input\">\n          <button mat-icon-button matSuffix class=\"toggle-visibility-btn\" (click)=\"toggleVisibility()\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hidePassword\">\n            <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n        </div>\n\n        <div class=\"width-100\">\n          <label for=\"password2\">Confirm password</label>\n          <input id=\"password2\" placeholder=\"dankworld12\" formControlName=\"password2\" [type]=\"hidePassword ? 'password' : 'text'\" class=\"form-input\">\n          <button mat-icon-button matSuffix class=\"toggle-visibility-btn\" (click)=\"toggleVisibility()\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hidePassword\">\n            <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n        </div>\n      </div>\n\n      <button mat-button color=\"primary\" class=\"width-100 custom-button block-button\"\n        (click)=\"onSubmit()\" >Submit</button>\n\n      <p>Already have an account? <a class=\"underline button-link\" [routerLink]=\"['../sign-in']\">Sign In</a></p>\n\n    </form>\n  </div>\n</div>\n", styles: [".width-100 {\n  width: 100%;\n}\n\n.auth-container {\n  background-color: brown;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-form {\n  max-width: 400px;\n  width: 100%;\n  color: white;\n  padding: 16px;\n  display: block;\n\n  .mat-form-field {\n    margin: 6px 0;\n  }\n}\n\n.form-input {\n  outline: none;\n  border: 1px solid #e6e6e6;\n  padding: 16px 12px;\n  margin: 8px 0;\n  font-size: 0.8rem;\n  width: -webkit-fill-available;\n  display: inline-flex;\n  background: transparent;\n  border-radius: 6px;\n  color: white;\n\n  &::placeholder {\n    color: inherit;\n  }\n}\n\n.custom-button {\n  outline: none;\n  border: 1px solid white;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  font-size: 0.8rem;\n  color: white;\n  border-radius: 6px;\n  background: transparent;\n  width: 33%;\n  padding: 2px;\n\n  &.block-button {\n    width: 100%;\n  }\n\n  &:hover, &:focus {\n    background: rgba(255,255,255,0.2);\n  }\n\n  &:disabled {\n    background-color: #e6e6e6;\n    color: #707070;\n    cursor: not-allowed;\n  }\n\n  &.submit-button {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n.text-white {\n  color: white;\n}\n\nlabel {\n  font-size: 14px;\n}\n\n.buttons-section {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.separator-section {\n  display: flex;\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 12px;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  border-radius: 1px;\n\n  p {\n    margin: 0;\n  }\n}\n\n.button-link {\n  outline: none;\n  border: 1px solid white;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  font-size: 0.8rem;\n  color: white;\n  border-radius: 6px;\n  background: transparent;\n  width: 33%;\n  padding: 6px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n@mixin divider {\n  display: block;\n  height: 1px;\n  margin-right: 11px;\n  margin-left: 11px;\n  -webkit-box-flex: 1;\n  flex: 1 1 0%;\n  background-image: linear-gradient(90deg, rgba(233, 237, 241, 0) 35%, rgb(161, 165, 190));\n  border-radius: 2px;\n}\n\n.divider-left {\n  @include divider;\n}\n\n.divider-right {\n  @include divider;\n  transform: rotate(180deg);\n}\n\n.toggle-visibility-btn {\n  position: absolute;\n  right: 6px;\n  top: 33px;\n  background: transparent;\n  color: white;\n}\n"] }]
    }], () => [{ type: i1.UserService }, { type: i2.Router }, { type: i3.MatSnackBar }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SignUpComponent, { className: "SignUpComponent", filePath: "src/app/auth/sign-up/sign-up.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=sign-up.component.js.map