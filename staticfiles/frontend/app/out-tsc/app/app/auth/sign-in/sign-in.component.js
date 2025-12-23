import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/user/user.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/snack-bar";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/input";
const _c0 = () => ["../sign-up"];
function SignInComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Submit");
    i0.ɵɵelementEnd();
} }
function SignInComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Logging in...");
    i0.ɵɵelementEnd();
} }
export class SignInComponent {
    constructor(userService, router, snackbar) {
        this.userService = userService;
        this.router = router;
        this.snackbar = snackbar;
        this.isLoading = false;
        this.hidePassword = true;
    }
    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl('', {
                validators: [Validators.required]
            }),
            password: new FormControl('', { validators: [Validators.required] })
        });
    }
    toggleVisibility() {
        this.hidePassword = !this.hidePassword;
    }
    onSubmit() {
        console.log('Sign-in form submitted');
        console.log('Form valid:', this.loginForm.valid);
        console.log('Form values:', this.loginForm.value);
        console.log('Form errors:', this.loginForm.errors);
        console.log('Email control errors:', this.loginForm.get('email')?.errors);
        console.log('Password control errors:', this.loginForm.get('password')?.errors);
        if (!this.loginForm.valid) {
            console.log('Form is invalid, not submitting');
            this.snackbar.open('Please fill in all required fields', 'Close', { duration: 3000 });
            return;
        }
        const loginData = {
            username: this.loginForm.value.username,
            password: this.loginForm.value.password
        };
        console.log('Sending login request with data:', loginData);
        this.isLoading = true;
        this.userService.login(loginData).subscribe((result) => {
            console.log('Login successful:', result);
            this.isLoading = false;
            // Store the auth token if provided
            if (result.key) {
                localStorage.setItem('auth_token', result.key);
                console.log('Auth token stored:', result.key);
            }
            // Fetch user profile after successful login
            this.userService.getAuthUser((user) => {
                console.log('User profile fetched after login:', user);
                if (user) {
                    this.userService.setUser(user);
                }
            });
            this.snackbar.open('Successfully logged in', 'Close', { duration: 3000 });
            this.router.navigate(['']);
        }, (err) => {
            console.error('Login error:', err);
            console.error('Error details:', JSON.stringify(err, null, 2));
            this.isLoading = false;
            if (err.error) {
                if (err.error.non_field_errors) {
                    this.snackbar.open(err.error.non_field_errors[0], 'Close', { duration: 5000 });
                }
                else if (err.error.email) {
                    this.snackbar.open(err.error.email[0], 'Close', { duration: 5000 });
                }
                else {
                    this.snackbar.open('Login failed. Please try again.', 'Close', { duration: 5000 });
                }
            }
            else {
                this.snackbar.open('Network error. Please check your connection.', 'Close', { duration: 5000 });
            }
        });
    }
    onGoogleLogin() {
        console.log('Google login clicked');
        this.snackbar.open('Google login is not configured yet. Please contact the administrator.', 'Close', {
            duration: 5000
        });
        // TODO: Implement Google OAuth when client credentials are configured
        // window.location.href = `${environment.serverUrl}/accounts/google/login/`;
    }
    onFacebookLogin() {
        console.log('Facebook login clicked');
        this.snackbar.open('Facebook login is not configured yet. Please contact the administrator.', 'Close', {
            duration: 5000
        });
        // TODO: Implement Facebook OAuth when app credentials are configured
        // window.location.href = `${environment.serverUrl}/accounts/facebook/login/`;
    }
    static { this.ɵfac = function SignInComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SignInComponent)(i0.ɵɵdirectiveInject(i1.UserService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.MatSnackBar)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SignInComponent, selectors: [["app-sign-in"]], standalone: false, decls: 38, vars: 10, consts: [[1, "auth-container"], [1, "login-form"], ["align", "center", 1, "text-white"], [1, "buttons-section"], ["mat-button", "", 1, "custom-button", 2, "border-color", "rgb(255, 92, 136)", 3, "click"], ["mat-button", "", 1, "custom-button", 2, "border-color", "rgb(255, 192, 93)", 3, "click"], [1, "separator-section"], [1, "divider-left"], ["align", "center"], [1, "divider-right"], ["autocomplete", "off", 1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "width-100", "margin-bottom-4"], ["for", "username"], ["matInput", "", "id", "username", "placeholder", "john_doe", "formControlName", "username", "type", "text", "required", "", 1, "form-input"], [1, ""], [1, "width-100", "margin-bottom-4", 2, "position", "relative"], ["for", "password"], ["matInput", "", "id", "password", "placeholder", "wonderfullemon dankworld", "formControlName", "password", "required", "", 1, "form-input", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 1, "toggle-visibility-btn", 3, "click"], ["type", "submit", "mat-button", "", "color", "primary", 1, "margin-top-4", "width-100", "custom-button", "block-button", "submit-button", 3, "disabled"], [4, "ngIf"], [1, "underline", "button-link", 3, "routerLink"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
            i0.ɵɵtext(3, "Sign in to DiscussIt");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3)(5, "button", 4);
            i0.ɵɵlistener("click", function SignInComponent_Template_button_click_5_listener() { return ctx.onGoogleLogin(); });
            i0.ɵɵelementStart(6, "mat-icon");
            i0.ɵɵtext(7, "account_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(8, " Google ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 5);
            i0.ɵɵlistener("click", function SignInComponent_Template_button_click_9_listener() { return ctx.onFacebookLogin(); });
            i0.ɵɵelementStart(10, "mat-icon");
            i0.ɵɵtext(11, "facebook");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, " Facebook ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 6);
            i0.ɵɵelement(14, "div", 7);
            i0.ɵɵelementStart(15, "p", 8);
            i0.ɵɵtext(16, "OR");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "form", 10);
            i0.ɵɵlistener("ngSubmit", function SignInComponent_Template_form_ngSubmit_18_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(19, "div", 11)(20, "label", 12);
            i0.ɵɵtext(21, "Username");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "input", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(23, "div", 14);
            i0.ɵɵelementStart(24, "div", 15)(25, "label", 16);
            i0.ɵɵtext(26, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(27, "input", 17);
            i0.ɵɵelementStart(28, "button", 18);
            i0.ɵɵlistener("click", function SignInComponent_Template_button_click_28_listener() { return ctx.toggleVisibility(); });
            i0.ɵɵelementStart(29, "mat-icon");
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(31, "button", 19);
            i0.ɵɵtemplate(32, SignInComponent_span_32_Template, 2, 0, "span", 20)(33, SignInComponent_span_33_Template, 2, 0, "span", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "p");
            i0.ɵɵtext(35, "Haven't registered yet? ");
            i0.ɵɵelementStart(36, "a", 21);
            i0.ɵɵtext(37, "Sign Up");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("formGroup", ctx.loginForm);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("type", ctx.hidePassword ? "password" : "text");
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isLoading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isLoading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isLoading);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(9, _c0));
        } }, dependencies: [i4.NgIf, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.FormGroupDirective, i5.FormControlName, i6.MatButton, i6.MatIconButton, i7.MatSuffix, i8.MatIcon, i9.MatInput, i2.RouterLink], styles: [".width-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.auth-container[_ngcontent-%COMP%] {\n  background-color: brown;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  color: white;\n  padding: 16px;\n  display: block;\n\n  .mat-form-field {\n    margin: 6px 0;\n  }\n}\n\n.form-input[_ngcontent-%COMP%] {\n  outline: none;\n  border: 1px solid #e6e6e6;\n  padding: 16px 12px;\n  margin: 8px 0;\n  font-size: 0.8rem;\n  width: -webkit-fill-available;\n  display: inline-flex;\n  background: transparent;\n  border-radius: 6px;\n  color: white;\n\n  &::placeholder {\n    color: inherit;\n  }\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  outline: none;\n  border: 1px solid white;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  font-size: 0.8rem;\n  color: white;\n  border-radius: 6px;\n  background: transparent;\n  width: 50%;\n  padding: 2px;\n\n  &.block-button {\n    width: 100%;\n  }\n\n  &:hover, &:focus {\n    background: rgba(255,255,255,0.2);\n  }\n\n  &:disabled {\n    background-color: #e6e6e6;\n    color: #707070;\n    cursor: not-allowed;\n  }\n\n  &.submit-button {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: white;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.buttons-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.separator-section[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 12px;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  border-radius: 1px;\n\n  p {\n    margin: 0;\n  }\n}\n\n.button-link[_ngcontent-%COMP%] {\n  outline: none;\n  border: 1px solid white;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  font-size: 0.8rem;\n  color: white;\n  border-radius: 6px;\n  background: transparent;\n  width: 33%;\n  padding: 6px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n@mixin divider {\n  display: block;\n  height: 1px;\n  margin-right: 11px;\n  margin-left: 11px;\n  -webkit-box-flex: 1;\n  flex: 1 1 0%;\n  background-image: linear-gradient(90deg, rgba(233, 237, 241, 0) 35%, rgb(161, 165, 190));\n  border-radius: 2px;\n}\n\n.divider-left[_ngcontent-%COMP%] {\n  @include divider;\n}\n\n.divider-right[_ngcontent-%COMP%] {\n  @include divider;\n  transform: rotate(180deg);\n}\n\n.toggle-visibility-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  top: 33px;\n  background: transparent;\n  color: white;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignInComponent, [{
        type: Component,
        args: [{ selector: 'app-sign-in', standalone: false, template: "<div class=\"auth-container\">\n  <div class=\"login-form\">\n    <h2 class=\"text-white\" align=\"center\">Sign in to DiscussIt</h2>\n\n      <div class=\"buttons-section\">\n        <button mat-button class=\"custom-button\" (click)=\"onGoogleLogin()\" style=\"border-color: rgb(255, 92, 136)\">\n          <mat-icon>account_circle</mat-icon>\n          Google\n        </button>\n        <button mat-button class=\"custom-button\" (click)=\"onFacebookLogin()\" style=\"border-color: rgb(255, 192, 93)\">\n          <mat-icon>facebook</mat-icon>\n          Facebook\n        </button>\n      </div>\n\n      <div class=\"separator-section\">\n        <div class=\"divider-left\"></div>\n        <p align=\"center\">OR</p>\n        <div class=\"divider-right\"></div>\n      </div>\n\n      <form class=\"width-100\" [formGroup]=\"loginForm\" class=\"auth-form\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"width-100 margin-bottom-4\">\n          <label for=\"username\">Username</label>\n          <input matInput id=\"username\" placeholder=\"john_doe\" formControlName=\"username\" type=\"text\" class=\"form-input\" required>\n        </div>\n\n        <div class=\"\"></div>\n\n        <div class=\"width-100 margin-bottom-4\" style=\"position: relative\">\n          <label for=\"password\">Password</label>\n          <input matInput id=\"password\" placeholder=\"wonderfullemon dankworld\" formControlName=\"password\" [type]=\"hidePassword ? 'password' : 'text'\" class=\"form-input\" required>\n          <button type=\"button\" mat-icon-button matSuffix class=\"toggle-visibility-btn\" (click)=\"toggleVisibility()\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hidePassword\">\n            <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>\n          </button>\n        </div>\n\n        <button type=\"submit\" mat-button color=\"primary\" class=\"margin-top-4 width-100 custom-button block-button submit-button\" [disabled]=\"isLoading\">\n          <span *ngIf=\"!isLoading\">Submit</span>\n          <span *ngIf=\"isLoading\">Logging in...</span>\n        </button>\n\n\n        <p>Haven't registered yet? <a class=\"underline button-link\" [routerLink]=\"['../sign-up']\">Sign Up</a></p>\n      </form>\n  </div>\n</div>\n", styles: [".width-100 {\n  width: 100%;\n}\n\n.auth-container {\n  background-color: brown;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-form {\n  max-width: 400px;\n  width: 100%;\n  color: white;\n  padding: 16px;\n  display: block;\n\n  .mat-form-field {\n    margin: 6px 0;\n  }\n}\n\n.form-input {\n  outline: none;\n  border: 1px solid #e6e6e6;\n  padding: 16px 12px;\n  margin: 8px 0;\n  font-size: 0.8rem;\n  width: -webkit-fill-available;\n  display: inline-flex;\n  background: transparent;\n  border-radius: 6px;\n  color: white;\n\n  &::placeholder {\n    color: inherit;\n  }\n}\n\n.custom-button {\n  outline: none;\n  border: 1px solid white;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  font-size: 0.8rem;\n  color: white;\n  border-radius: 6px;\n  background: transparent;\n  width: 50%;\n  padding: 2px;\n\n  &.block-button {\n    width: 100%;\n  }\n\n  &:hover, &:focus {\n    background: rgba(255,255,255,0.2);\n  }\n\n  &:disabled {\n    background-color: #e6e6e6;\n    color: #707070;\n    cursor: not-allowed;\n  }\n\n  &.submit-button {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n.text-white {\n  color: white;\n}\n\nlabel {\n  font-size: 14px;\n}\n\n.buttons-section {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.separator-section {\n  display: flex;\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 12px;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  border-radius: 1px;\n\n  p {\n    margin: 0;\n  }\n}\n\n.button-link {\n  outline: none;\n  border: 1px solid white;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  font-size: 0.8rem;\n  color: white;\n  border-radius: 6px;\n  background: transparent;\n  width: 33%;\n  padding: 6px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n@mixin divider {\n  display: block;\n  height: 1px;\n  margin-right: 11px;\n  margin-left: 11px;\n  -webkit-box-flex: 1;\n  flex: 1 1 0%;\n  background-image: linear-gradient(90deg, rgba(233, 237, 241, 0) 35%, rgb(161, 165, 190));\n  border-radius: 2px;\n}\n\n.divider-left {\n  @include divider;\n}\n\n.divider-right {\n  @include divider;\n  transform: rotate(180deg);\n}\n\n.toggle-visibility-btn {\n  position: absolute;\n  right: 6px;\n  top: 33px;\n  background: transparent;\n  color: white;\n}\n"] }]
    }], () => [{ type: i1.UserService }, { type: i2.Router }, { type: i3.MatSnackBar }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SignInComponent, { className: "SignInComponent", filePath: "src/app/auth/sign-in/sign-in.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=sign-in.component.js.map