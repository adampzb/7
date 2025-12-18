import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/user/user.service";
import * as i2 from "@discussit/core/services/group/group.service";
import * as i3 from "@discussit/core/services/comment/comment.service";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/grid-list";
import * as i8 from "@angular/material/list";
import * as i9 from "@angular/material/tabs";
import * as i10 from "../profile-bookmarks/profile-bookmarks.component";
import * as i11 from "../profile-posts/profile-posts.component";
import * as i12 from "../profile-upvotes/profile-upvotes.component";
import * as i13 from "../profile-comments/profile-comments.component";
import * as i14 from "../profile-downvotes/profile-downvotes.component";
const _c0 = a0 => ["../../group", a0];
function ProfileComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵtext(1, "Follow");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵtext(1, "Message");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵtext(1, "Report User");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_div_36_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " Your groups ");
    i0.ɵɵelementContainerEnd();
} }
function ProfileComponent_div_36_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.user.username, "'s groups ");
} }
function ProfileComponent_div_36_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-item")(1, "a", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, group_r2.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(group_r2.name);
} }
function ProfileComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "span", 26);
    i0.ɵɵtemplate(2, ProfileComponent_div_36_ng_container_2_Template, 2, 0, "ng-container", 27)(3, ProfileComponent_div_36_ng_template_3_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-nav-list");
    i0.ɵɵtemplate(6, ProfileComponent_div_36_mat_list_item_6_Template, 3, 4, "mat-list-item", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elseTemplate_r3 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.self)("ngIfElse", elseTemplate_r3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.userGroups);
} }
function ProfileComponent_div_37_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " You're a moderator of these groups ");
    i0.ɵɵelementContainerEnd();
} }
function ProfileComponent_div_37_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.user.username, "'s moderator of these groups ");
} }
function ProfileComponent_div_37_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-item")(1, "a", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const member_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, member_r4.group.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(member_r4.group.name);
} }
function ProfileComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "span", 26);
    i0.ɵɵtemplate(2, ProfileComponent_div_37_ng_container_2_Template, 2, 0, "ng-container", 27)(3, ProfileComponent_div_37_ng_template_3_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-nav-list");
    i0.ɵɵtemplate(6, ProfileComponent_div_37_mat_list_item_6_Template, 3, 4, "mat-list-item", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elseTemplate_r5 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.self)("ngIfElse", elseTemplate_r5);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.modGroups);
} }
export class ProfileComponent {
    constructor(userService, groupService, commentService, route, router) {
        this.userService = userService;
        this.groupService = groupService;
        this.commentService = commentService;
        this.route = route;
        this.router = router;
        this.isLoading = false;
        this.page = 1;
        this.showLoader = false;
        this.userGroups = [];
        this.modGroups = [];
        this.userComments = [];
        this.self = false;
    }
    ngOnInit() {
        this.currentUser = this.route.snapshot.params.username;
        this.getAuthUser();
        if (this.currentUser) {
            this.getUserByUsername();
        }
        // this.getModeratorGroups();
        this.getUserComments();
    }
    getAuthUser() {
        this.userService.userInitialized.subscribe((initialized) => {
            if (initialized) {
                this.userService.user.subscribe((response) => {
                    this.user = response;
                    if (this.user && this.user.username == this.currentUser) {
                        this.self = true;
                    }
                });
            }
        });
    }
    getUserByUsername() {
        this.userService.getUserByUsername(this.currentUser).subscribe((response) => {
            this.profile = response;
            this.getUserGroups();
        });
    }
    getUserGroups() {
        this.groupService.getUserGroups('', this.profile.id, '').subscribe((response) => {
            this.userGroups = response;
        });
    }
    getUserComments() {
        this.commentService.userComments(this.currentUser).subscribe((response) => {
            this.userComments = response;
        });
    }
    getModeratorGroups() {
        this.groupService.filterMembers('MODERATOR', '', this.user.id).subscribe((response) => {
            this.modGroups = response;
        });
    }
    static { this.ɵfac = function ProfileComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfileComponent)(i0.ɵɵdirectiveInject(i1.UserService), i0.ɵɵdirectiveInject(i2.GroupService), i0.ɵɵdirectiveInject(i3.CommentService), i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i4.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileComponent, selectors: [["app-profiles"]], standalone: false, decls: 38, vars: 27, consts: [["elseTemplate", ""], ["fxLayout", "row", "fxLayoutGap", "16px"], ["fxLayout", "column", "fxFlex", "70", "fxFlex.lt-lg", "100", 1, "profile-container"], [1, "width-100"], ["color", "warn", "dynamicHeight", "", "animationDuration", "0ms", "mat-align-tabs", "center", 1, "width-100"], ["label", "Posts"], [1, "content"], [3, "user", "self", "currentUser"], ["label", "Comments"], [3, "comments", "user", "self", "currentUser"], ["label", "Upvotes"], ["label", "Downvotes"], ["label", "Saved"], ["fxLayout", "column", "fxFlex", "30", "fxHide.lt-lg", "", 1, ""], [1, "related-section"], [1, "bg-blue"], [1, "user-avatar"], ["src", "https://cdn-icons-png.flaticon.com/512/3177/3177440.png", "height", "100", "width", "100"], ["fxLayout", "column", 1, "user-content"], [1, "font-bold"], [1, "color-tertiary"], [1, "font-light", "color-tertiary", "user-meta-text"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "12px", 1, "margin-y-4"], ["mat-stroked-button", "", "color", "primary", 4, "ngIf"], ["class", "related-section", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary"], [1, "heading-5", "font-bold"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["matLine", "", 3, "routerLink"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-tab-group", 4)(4, "mat-tab", 5)(5, "div", 6);
            i0.ɵɵelement(6, "app-profile-posts", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "mat-tab", 8)(8, "div", 6);
            i0.ɵɵelement(9, "app-profile-comments", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "mat-tab", 10)(11, "div", 6);
            i0.ɵɵelement(12, "app-profile-upvotes", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "mat-tab", 11)(14, "div", 6);
            i0.ɵɵelement(15, "app-profile-downvotes", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "mat-tab", 12)(17, "div", 6);
            i0.ɵɵelement(18, "app-profile-bookmarks", 7);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(19, "div", 13)(20, "div", 14);
            i0.ɵɵelement(21, "div", 15);
            i0.ɵɵelementStart(22, "div", 16);
            i0.ɵɵelement(23, "img", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 18)(25, "span", 19);
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "span", 20);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "span", 21);
            i0.ɵɵtext(30);
            i0.ɵɵpipe(31, "date");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div", 22);
            i0.ɵɵtemplate(33, ProfileComponent_button_33_Template, 2, 0, "button", 23)(34, ProfileComponent_button_34_Template, 2, 0, "button", 23)(35, ProfileComponent_button_35_Template, 2, 0, "button", 23);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(36, ProfileComponent_div_36_Template, 7, 3, "div", 24)(37, ProfileComponent_div_37_Template, 7, 3, "div", 24);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("user", ctx.user)("self", ctx.self)("currentUser", ctx.currentUser);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("comments", ctx.userComments)("user", ctx.user)("self", ctx.self)("currentUser", ctx.currentUser);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("user", ctx.user)("self", ctx.self)("currentUser", ctx.currentUser);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("user", ctx.user)("self", ctx.self)("currentUser", ctx.currentUser);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("user", ctx.user)("self", ctx.self)("currentUser", ctx.currentUser);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate2("", ctx.profile.first_name, " ", ctx.profile.last_name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("@", ctx.profile.username);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("User since ", i0.ɵɵpipeBind1(31, 25, ctx.profile.date_joined));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.self);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.self);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.self);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.userGroups.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.modGroups.length);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.MatButton, i7.MatLine, i8.MatNavList, i8.MatListItem, i9.MatTab, i9.MatTabGroup, i4.RouterLink, i10.ProfileBookmarksComponent, i11.ProfilePostsComponent, i12.ProfileUpvotesComponent, i13.ProfileCommentsComponent, i14.ProfileDownvotesComponent, i5.DatePipe], styles: [".profile-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  background-color: white;\n\n  .content {\n    padding: 16px;\n    background-color: inherit;\n    width: auto;\n  }\n}\n\n.related-section[_ngcontent-%COMP%] {\n  background-color: white;\n  // height: 33%;\n  min-height: 300px;\n  margin-top: 16px;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  padding: 16px;\n  position: relative;\n\n  &:first-child {\n    padding: 0;\n  }\n}\n\n.mat-label-label[_ngcontent-%COMP%] {\n  color: #232323;\n  opacity: 1;\n}\n\n\n.bg-blue[_ngcontent-%COMP%] {\n  background: url('https://images.pexels.com/photos/3695238/pexels-photo-3695238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 8px 8px 0 0;\n  height: 130px;\n  width: inherit;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25%;\n  left: 35%;\n}\n\n.user-content[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  text-align: center;\n  gap: 12px;\n}\n\n.user-meta-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-profiles', standalone: false, template: "<div fxLayout=\"row\" fxLayoutGap=\"16px\">\n  <div class=\"profile-container\" fxLayout=\"column\" fxFlex=\"70\" fxFlex.lt-lg=\"100\">\n    <div class=\"width-100\">\n      <mat-tab-group class=\"width-100\" color=\"warn\" dynamicHeight animationDuration=\"0ms\" mat-align-tabs=\"center\">\n        <mat-tab label=\"Posts\">\n          <div class=\"content\">\n            <app-profile-posts [user]=\"user\" [self]=\"self\" [currentUser]=\"currentUser\"></app-profile-posts>\n          </div>\n        </mat-tab>\n\n        <mat-tab label=\"Comments\">\n          <div class=\"content\">\n            <app-profile-comments [comments]=\"userComments\" [user]=\"user\" [self]=\"self\" [currentUser]=\"currentUser\"></app-profile-comments>\n          </div>\n        </mat-tab>\n\n        <mat-tab label=\"Upvotes\">\n          <div class=\"content\">\n            <app-profile-upvotes [user]=\"user\" [self]=\"self\" [currentUser]=\"currentUser\"></app-profile-upvotes>\n          </div>\n        </mat-tab>\n\n        <mat-tab label=\"Downvotes\">\n          <div class=\"content\">\n            <app-profile-downvotes [user]=\"user\" [self]=\"self\" [currentUser]=\"currentUser\"></app-profile-downvotes>\n          </div>\n        </mat-tab>\n\n        <mat-tab label=\"Saved\">\n          <div class=\"content\">\n            <app-profile-bookmarks [user]=\"user\" [self]=\"self\" [currentUser]=\"currentUser\"></app-profile-bookmarks>\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n  </div>\n\n  <div class=\"\" fxLayout=\"column\" fxFlex=\"30\" fxHide.lt-lg>\n    <div class=\"related-section\">\n      <div class=\"bg-blue\"></div>\n      <div class=\"user-avatar\">\n        <img src=\"https://cdn-icons-png.flaticon.com/512/3177/3177440.png\" height=\"100\" width=\"100\">\n      </div>\n\n      <div class=\"user-content\" fxLayout=\"column\">\n        <span class=\"font-bold\">{{ profile.first_name }} {{ profile.last_name }}</span>\n        <span class=\"color-tertiary\">&#64;{{profile.username}}</span>\n        <span class=\"font-light color-tertiary user-meta-text\">User since {{ profile.date_joined | date }}</span>\n      </div>\n\n      <div class=\"margin-y-4\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"12px\">\n        <button mat-stroked-button color=\"primary\" *ngIf=\"!self\">Follow</button>\n        <button mat-stroked-button color=\"primary\" *ngIf=\"!self\">Message</button>\n        <button mat-stroked-button color=\"primary\" *ngIf=\"!self\">Report User</button>\n      </div>\n    </div>\n\n    <div class=\"related-section\" *ngIf=\"userGroups.length\">\n      <span class=\"heading-5 font-bold\">\n        <ng-container *ngIf=\"self; else elseTemplate\">\n          Your groups\n        </ng-container>\n        <ng-template #elseTemplate>\n          {{ user.username}}'s groups\n        </ng-template>\n      </span>\n\n        <mat-nav-list>\n          <mat-list-item *ngFor=\"let group of userGroups\">\n             <a matLine [routerLink]=\"[ '../../group', group.id ]\">{{ group.name }}</a>\n          </mat-list-item>\n        </mat-nav-list>\n    </div>\n\n    <div class=\"related-section\" *ngIf=\"modGroups.length\">\n      <span class=\"heading-5 font-bold\">\n        <ng-container *ngIf=\"self; else elseTemplate\">\n          You're a moderator of these groups\n        </ng-container>\n        <ng-template #elseTemplate>\n          {{user.username}}'s moderator of these groups\n        </ng-template>\n      </span>\n\n        <mat-nav-list>\n          <mat-list-item *ngFor=\"let member of modGroups\">\n             <a matLine [routerLink]=\"[ '../../group', member.group.id ]\">{{member.group.name}}</a>\n          </mat-list-item>\n        </mat-nav-list>\n    </div>\n  </div>\n</div>\n", styles: [".profile-container {\n  margin-top: 16px;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  background-color: white;\n\n  .content {\n    padding: 16px;\n    background-color: inherit;\n    width: auto;\n  }\n}\n\n.related-section {\n  background-color: white;\n  // height: 33%;\n  min-height: 300px;\n  margin-top: 16px;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  padding: 16px;\n  position: relative;\n\n  &:first-child {\n    padding: 0;\n  }\n}\n\n.mat-label-label {\n  color: #232323;\n  opacity: 1;\n}\n\n\n.bg-blue {\n  background: url('https://images.pexels.com/photos/3695238/pexels-photo-3695238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 8px 8px 0 0;\n  height: 130px;\n  width: inherit;\n}\n\n.user-avatar {\n  position: absolute;\n  top: 25%;\n  left: 35%;\n}\n\n.user-content {\n  margin-top: 60px;\n  text-align: center;\n  gap: 12px;\n}\n\n.user-meta-text {\n  font-size: 14px;\n}\n"] }]
    }], () => [{ type: i1.UserService }, { type: i2.GroupService }, { type: i3.CommentService }, { type: i4.ActivatedRoute }, { type: i4.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/profiles/profiles/profiles.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=profiles.component.js.map