import { Component } from '@angular/core';
import { environment } from '@discussit/env/environment';
import { FormGroup, FormControl } from '@angular/forms';
import { NavigationEnd } from '@angular/router';
import { CreateGroupComponent } from './group/create-group/create-group.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./core/services/user/user.service";
import * as i3 from "ngx-cookie-service";
import * as i4 from "./core/services/storage/storage-handler.service";
import * as i5 from "@angular/material/dialog";
import * as i6 from "@angular/common/http";
import * as i7 from "@angular/common";
import * as i8 from "@angular/forms";
import * as i9 from "@angular/material/button";
import * as i10 from "@angular/material/icon";
import * as i11 from "@angular/material/toolbar";
const _c0 = (a0, a1) => ({ "bg-container": a0, "app-main": a1 });
const _c1 = a0 => ({ "unauth-container": a0 });
const _c2 = () => [""];
const _c3 = () => ["create"];
const _c4 = () => ["all_groups"];
const _c5 = a0 => ["user", a0];
const _c6 = () => ["sign-in"];
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" \u2705 Angular App is Working! User: ", (ctx_r0.user == null ? null : ctx_r0.user.username) || "Not logged in", " - Time: ", ctx_r0.currentTime, " ");
} }
function AppComponent_mat_toolbar_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 19);
    i0.ɵɵtext(2, " Create post ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 20);
    i0.ɵɵlistener("click", function AppComponent_mat_toolbar_2_ng_container_5_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.createGroup()); });
    i0.ɵɵtext(4, " Create group ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 19);
    i0.ɵɵtext(6, " All groups ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(2, _c3));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(3, _c4));
} }
function AppComponent_mat_toolbar_2_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "a", 23)(2, "mat-icon");
    i0.ɵɵtext(3, "person");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 24);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 25);
    i0.ɵɵlistener("click", function AppComponent_mat_toolbar_2_ng_container_12_div_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.logout()); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "logout");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c5, ctx_r0.user.username));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.user == null ? null : ctx_r0.user.username);
} }
function AppComponent_mat_toolbar_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AppComponent_mat_toolbar_2_ng_container_12_div_1_Template, 9, 4, "div", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.user);
} }
function AppComponent_mat_toolbar_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "a", 27);
    i0.ɵɵtext(2, "Login");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c6));
} }
function AppComponent_mat_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-toolbar", 8)(1, "div", 9);
    i0.ɵɵelement(2, "img", 10);
    i0.ɵɵelementStart(3, "a", 11);
    i0.ɵɵtext(4, " DiscussIt ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AppComponent_mat_toolbar_2_ng_container_5_Template, 7, 4, "ng-container", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 13)(7, "form", 14);
    i0.ɵɵlistener("ngSubmit", function AppComponent_mat_toolbar_2_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.search()); });
    i0.ɵɵelementStart(8, "button", 15)(9, "mat-icon", 16);
    i0.ɵɵtext(10, "search");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(11, "input", 17);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, AppComponent_mat_toolbar_2_ng_container_12_Template, 2, 1, "ng-container", 18)(13, AppComponent_mat_toolbar_2_ng_template_13_Template, 3, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elseTemplate_r5 = i0.ɵɵreference(14);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(5, _c2));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.user);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r0.searchField);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.user)("ngIfElse", elseTemplate_r5);
} }
function AppComponent_footer_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "footer", 28);
    i0.ɵɵtext(1, " Terms of policy . Privacy policy . Copyright @ 2025 . ");
    i0.ɵɵelementStart(2, "a", 29);
    i0.ɵɵtext(3, "Adam P.");
    i0.ɵɵelementEnd()();
} }
export class AppComponent {
    constructor(router, userService, cookieService, storage, dialog, http) {
        this.router = router;
        this.userService = userService;
        this.cookieService = cookieService;
        this.storage = storage;
        this.dialog = dialog;
        this.http = http;
        this.title = 'discussit';
        this.authRoute = false;
        this.value = 'Search';
        this.router.events.subscribe((event) => {
            this.path = this.router.url;
            // Refresh user state when navigating away from auth routes
            if (event instanceof NavigationEnd) {
                const wasAuthRoute = this.authRoute;
                this.authRoute = this.path.includes('sign-in') || this.path.includes('sign-up');
                // If we just left an auth route, refresh user state
                if (wasAuthRoute && !this.authRoute) {
                    console.log('Left auth route, refreshing user state');
                    this.refreshUserState();
                }
            }
        });
        this.path = this.router.url;
    }
    ngOnInit() {
        console.log('AppComponent ngOnInit called');
        this.currentTime = new Date().toLocaleTimeString();
        this.searchField = new FormGroup({
            search: new FormControl('')
        });
        // Test API connectivity
        this.testApiConnectivity();
        // Subscribe to user changes
        this.userService.user?.subscribe((user) => {
            console.log('User state changed:', user);
            this.user = user;
        });
        // Add error handling to prevent initialization issues
        try {
            this.userService.fetchUser((user) => {
                console.log('User fetched:', user);
                this.user = user;
            });
        }
        catch (error) {
            console.error('Error fetching user:', error);
            this.user = null;
        }
    }
    testApiConnectivity() {
        console.log('Testing API connectivity...');
        // Test a simple GET request to see if the API is reachable
        const testUrl = `${environment.serverUrl}${environment.baseUrl}posts/`;
        console.log('Testing API URL:', testUrl);
        this.http.get(testUrl).subscribe((response) => {
            console.log('✅ API connectivity test successful:', response);
        }, (error) => {
            console.error('❌ API connectivity test failed:', error);
        });
    }
    refreshUserState() {
        console.log('Refreshing user state...');
        try {
            this.userService.fetchUser((user) => {
                console.log('User state refreshed:', user);
                this.user = user;
            });
        }
        catch (error) {
            console.error('Error refreshing user state:', error);
        }
    }
    ngAfterContentChecked() {
        if (this.path.includes('/sign-in')
            || this.path.includes('/sign-up')
            || this.path.includes('logout')) {
            this.authRoute = true;
        }
        else {
            this.authRoute = false;
        }
    }
    logout() {
        console.log('Logout button clicked');
        this.userService.logout().subscribe((response) => {
            console.log('Logout response:', response);
            // Clear user data and auth token
            this.storage.removeItem('user');
            localStorage.removeItem('auth_token');
            this.userService.unsetUser();
            this.user = null;
            window.location.href = `${environment.loginUrl}`;
        }, (error) => {
            console.log('Logout error:', error);
            // Even if logout fails on server, clear local data
            this.storage.removeItem('user');
            localStorage.removeItem('auth_token');
            this.userService.unsetUser();
            this.user = null;
            window.location.href = `${environment.loginUrl}`;
        });
    }
    createGroup() {
        console.log('Create group button clicked');
        const dialogRef = this.dialog.open(CreateGroupComponent, {
            data: {
                user: this.user,
            },
            width: '600px',
            minHeight: '300px'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    search() {
        console.log('Search button clicked');
        this.router.navigate(['search'], {
            queryParams: {
                query: this.searchField.value.search,
            },
        });
        this.searchField.reset();
    }
    static { this.ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UserService), i0.ɵɵdirectiveInject(i3.CookieService), i0.ɵɵdirectiveInject(i4.StorageHandlerService), i0.ɵɵdirectiveInject(i5.MatDialog), i0.ɵɵdirectiveInject(i6.HttpClient)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], standalone: false, decls: 7, vars: 10, consts: [["elseTemplate", ""], [1, ""], ["style", "background: green; color: white; padding: 5px; text-align: center;", 4, "ngIf"], ["color", "secondary", "class", "header shadow-sm", 4, "ngIf"], [1, "app", 3, "ngClass"], [1, "container", 3, "ngClass"], ["class", "footer", 4, "ngIf"], [2, "background", "green", "color", "white", "padding", "5px", "text-align", "center"], ["color", "secondary", 1, "header", "shadow-sm"], [1, "nav-links"], ["src", "/static/assets/favicon/apple-touch-icon.png", "alt", "Icon", "height", "30", "width", "30"], ["mat-flat-button", "", 1, "font-bold", "color-primary", "navbar-brand", 2, "text-decoration", "none", 3, "routerLink"], [4, "ngIf"], [1, "search-bar"], [1, "navbar-item-search", 3, "ngSubmit", "formGroup"], ["mat-icon-button", "", 1, "search-icon-wrapper"], [1, "search-icon"], ["formControlName", "search", "placeholder", "Search", "name", "search", "oninput", "this.value = this.value.toLowerCase()", 1, "search-input"], [4, "ngIf", "ngIfElse"], ["mat-flat-button", "", 1, "color-tertiary", 3, "routerLink"], ["mat-flat-button", "", 1, "color-tertiary", 3, "click"], ["class", "buttons-section nav-links", 4, "ngIf"], [1, "buttons-section", "nav-links"], ["mat-icon-button", "", 3, "routerLink"], [2, "vertical-align", "middle", "font-size", "16px"], ["mat-icon-button", "", "aria-label", "Logout", 1, "logout-icon", 3, "click"], [1, "buttons-section"], ["mat-button", "", 3, "routerLink"], [1, "footer"], ["href", "https://github.com/adampzb/discussit"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵtemplate(1, AppComponent_div_1_Template, 2, 2, "div", 2)(2, AppComponent_mat_toolbar_2_Template, 15, 6, "mat-toolbar", 3);
            i0.ɵɵelementStart(3, "main", 4)(4, "div", 5);
            i0.ɵɵelement(5, "router-outlet");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(6, AppComponent_footer_6_Template, 4, 0, "footer", 6);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.authRoute);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.authRoute);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c0, !ctx.authRoute, !ctx.authRoute));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c1, ctx.authRoute));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.authRoute);
        } }, dependencies: [i7.NgClass, i7.NgIf, i8.ɵNgNoValidate, i8.DefaultValueAccessor, i8.NgControlStatus, i8.NgControlStatusGroup, i8.FormGroupDirective, i8.FormControlName, i9.MatButton, i9.MatIconButton, i10.MatIcon, i11.MatToolbar, i1.RouterOutlet, i1.RouterLink], styles: [".navbar-brand[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  background  : #fff;\n  float       : left;\n  width       : 260px;\n  position    : fixed;\n  top         : 64px;\n  border-width: 0 1px 1px 0;\n  border-style: solid;\n  border-color: #e6e6e6;\n  height      : 100vh;\n  z-index     : 1;\n  overflow    : hidden;\n}\n\n.navbar-item-search[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n.app-main[_ngcontent-%COMP%] {\n  padding-top: 56px;\n}\n\n.header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background-color: #FFFFFF;\n  z-index: 14;\n  position: fixed;\n  height: 56px!important;\n}\n\n.bg-container[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n\n.bg-white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 56px);\n  width: auto;\n  overflow-x: hidden;\n  padding: 32px;\n  margin: auto;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.unauth-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh);\n  max-width: 100%;\n  width: 100%;\n  padding: 0;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  border: 1px solid #DC281E;\n  border-radius: 25px;\n  width: 100%;\n  max-width: 500px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 0.75rem;\n  box-sizing: border-box;\n  font-weight: 300;\n  display: flex;\n\n  .search-icon {\n    padding: 4px 0 0 8px;\n    color: #707070;\n    font-size: 20px;\n  }\n\n  .search-input {\n    outline: none;\n    border: none;\n    background: transparent;\n    // padding: 8px 16px 8px 6px;\n    width: 100%;\n  }\n\n  ::placeholder {\n    font-family: 'Roboto', sans-serif;\n    color: #707070;\n    font-weight: 300;\n  }\n\n  @media only screen and (max-width: 720px) {\n    display: none;\n  }\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  color: #232323;\n  font-weight: 300;\n  text-align: center;\n  font-size: 14px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: false, template: "<div class=\"\">\n  <!-- Debug indicator to show Angular is working -->\n  <div style=\"background: green; color: white; padding: 5px; text-align: center;\" *ngIf=\"!authRoute\">\n    \u2705 Angular App is Working! User: {{user?.username || 'Not logged in'}} - Time: {{currentTime}}\n  </div>\n  <mat-toolbar color=\"secondary\" class=\"header shadow-sm\" *ngIf=\"!authRoute\">\n    <div class=\"nav-links\">\n      <img src=\"/static/assets/favicon/apple-touch-icon.png\" alt=\"Icon\" height=\"30\" width=\"30\">\n      <a mat-flat-button [routerLink]=\"['']\" class=\"font-bold color-primary navbar-brand\" style=\"text-decoration:none\">\n        DiscussIt\n      </a>\n      <ng-container *ngIf=\"user\">\n        <a mat-flat-button [routerLink]=\"['create']\" class=\"color-tertiary\">\n          Create post\n        </a>\n        <a mat-flat-button (click)=\"createGroup()\" class=\"color-tertiary\">\n          Create group\n        </a>\n        <a mat-flat-button [routerLink]=\"[ 'all_groups']\" class=\"color-tertiary\">\n          All groups\n        </a>\n      </ng-container>\n    </div>\n\n\n    <div class=\"search-bar\">\n      <form class=\"navbar-item-search\" [formGroup]=\"searchField\" (ngSubmit)=\"search()\">\n        <!-- <div class=\"search-bar\"> -->\n          <button mat-icon-button class=\"search-icon-wrapper\">\n            <mat-icon class=\"search-icon\">search</mat-icon>\n          </button>\n          <input formControlName=\"search\" placeholder=\"Search\" name=\"search\"\n            oninput=\"this.value = this.value.toLowerCase()\" class=\"search-input\">\n        <!-- </div> -->\n      </form>\n    </div>\n\n    <ng-container *ngIf=\"user; else elseTemplate\">\n      <div class=\"buttons-section nav-links\" *ngIf=\"user\" >\n        <a mat-icon-button [routerLink]=\"[ 'user', user.username]\">\n          <mat-icon>person</mat-icon>\n        </a>\n        <span style=\"vertical-align:middle; font-size:16px;\">{{ user?.username }}</span>\n        <button mat-icon-button class=\"logout-icon\" (click)=\"logout()\" aria-label=\"Logout\">\n          <mat-icon>logout</mat-icon>\n        </button>\n      </div>\n    </ng-container>\n    <ng-template #elseTemplate>\n      <div class=\"buttons-section\">\n        <a mat-button [routerLink]=\"[ 'sign-in']\">Login</a>\n      </div>\n    </ng-template>\n\n  </mat-toolbar>\n\n  <main class=\"app\" [ngClass]=\"{'bg-container': !authRoute, 'app-main': !authRoute}\">\n    <div class=\"container\" [ngClass]=\"{'unauth-container': authRoute}\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n</div>\n\n\n<footer class=\"footer\" *ngIf=\"!authRoute\">\n  Terms of policy . Privacy policy .\n  Copyright &#64; 2025 . <a href=\"https://github.com/adampzb/discussit\">Adam P.</a>\n</footer>\n", styles: [".navbar-brand {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.sidenav {\n  background  : #fff;\n  float       : left;\n  width       : 260px;\n  position    : fixed;\n  top         : 64px;\n  border-width: 0 1px 1px 0;\n  border-style: solid;\n  border-color: #e6e6e6;\n  height      : 100vh;\n  z-index     : 1;\n  overflow    : hidden;\n}\n\n.navbar-item-search {\n  width: 100%;\n}\n\n\n.app-main {\n  padding-top: 56px;\n}\n\n.header {\n  justify-content: space-between;\n  background-color: #FFFFFF;\n  z-index: 14;\n  position: fixed;\n  height: 56px!important;\n}\n\n.bg-container {\n  background-color: #f5f5f5;\n}\n\n.bg-white {\n  background-color: white;\n}\n\n.container {\n  min-height: calc(100vh - 56px);\n  width: auto;\n  overflow-x: hidden;\n  padding: 32px;\n  margin: auto;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.unauth-container {\n  min-height: calc(100vh);\n  max-width: 100%;\n  width: 100%;\n  padding: 0;\n}\n\n.search-bar {\n  border: 1px solid #DC281E;\n  border-radius: 25px;\n  width: 100%;\n  max-width: 500px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 0.75rem;\n  box-sizing: border-box;\n  font-weight: 300;\n  display: flex;\n\n  .search-icon {\n    padding: 4px 0 0 8px;\n    color: #707070;\n    font-size: 20px;\n  }\n\n  .search-input {\n    outline: none;\n    border: none;\n    background: transparent;\n    // padding: 8px 16px 8px 6px;\n    width: 100%;\n  }\n\n  ::placeholder {\n    font-family: 'Roboto', sans-serif;\n    color: #707070;\n    font-weight: 300;\n  }\n\n  @media only screen and (max-width: 720px) {\n    display: none;\n  }\n}\n\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.footer {\n  padding: 8px 16px;\n  color: #232323;\n  font-weight: 300;\n  text-align: center;\n  font-size: 14px;\n}\n"] }]
    }], () => [{ type: i1.Router }, { type: i2.UserService }, { type: i3.CookieService }, { type: i4.StorageHandlerService }, { type: i5.MatDialog }, { type: i6.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=app.component.js.map