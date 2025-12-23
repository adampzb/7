import { Component, Input } from '@angular/core';
import { environment } from '@discussit/env/environment';
import { ReportDialogComponent } from '@discussit/app/components/report-dialog/report-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/post/post.service";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/card";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/menu";
import * as i8 from "@angular/router";
import * as i9 from "@discussit/core/pipes/safe-content/safe-content.pipe";
import * as i10 from "@discussit/core/pipes/time-since/time-since.pipe";
const _c0 = a0 => ({ "archived-card": a0 });
const _c1 = a0 => ({ "active-icon": a0 });
const _c2 = a0 => ["user", a0];
const _c3 = a0 => ["", a0];
const _c4 = a0 => ["group", a0];
function PostComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21)(1, "a", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c4, ctx_r1.post.group.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("g/", ctx_r1.post.group.name, " .");
} }
function PostComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 22);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵpipe(3, "safeContent");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHtml", i0.ɵɵpipeBind1(3, 5, i0.ɵɵpipeBind3(2, 1, ctx_r1.post.content, 0, 300)), i0.ɵɵsanitizeHtml);
} }
function PostComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 22);
    i0.ɵɵpipe(2, "safeContent");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHtml", i0.ɵɵpipeBind1(2, 1, ctx_r1.post.content), i0.ɵɵsanitizeHtml);
} }
function PostComponent_ng_container_44_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.post.comments, " comments ");
} }
function PostComponent_ng_container_44_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Add comment ");
} }
function PostComponent_ng_container_44_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-icon", 29);
    i0.ɵɵtext(2, "bookmark");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function PostComponent_ng_container_44_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 29);
    i0.ɵɵtext(1, "bookmark_border");
    i0.ɵɵelementEnd();
} }
function PostComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 23)(2, "a", 13)(3, "mat-icon", 24);
    i0.ɵɵtext(4, "insert_comment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 25);
    i0.ɵɵtemplate(6, PostComponent_ng_container_44_ng_container_6_Template, 2, 1, "ng-container", 26)(7, PostComponent_ng_container_44_ng_template_7_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 27)(10, "mat-icon");
    i0.ɵɵtext(11, "share");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 28);
    i0.ɵɵlistener("click", function PostComponent_ng_container_44_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.checkBookmark()); });
    i0.ɵɵtemplate(13, PostComponent_ng_container_44_ng_container_13_Template, 3, 0, "ng-container", 26)(14, PostComponent_ng_container_44_ng_template_14_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const viewTemplate_r4 = i0.ɵɵreference(8);
    const bookmarkTemplate_r5 = i0.ɵɵreference(15);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(5, _c3, ctx_r1.post.uuid));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.post.comments > 0 || ctx_r1.post.status === "ARCHIVED")("ngIfElse", viewTemplate_r4);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.post.user_bookmark == null ? null : ctx_r1.post.user_bookmark.id)("ngIfElse", bookmarkTemplate_r5);
} }
export class PostComponent {
    constructor(postService, dialog) {
        this.postService = postService;
        this.dialog = dialog;
        this.showFooter = true;
        this.user_vote = 0;
    }
    ngOnInit() {
        this.user_vote = this.post?.user_vote?.vote;
    }
    upvoteClicked() {
        if (!this.user_id)
            return;
        if (this.user_vote == 1) {
            this.removeVote();
        }
        else {
            this.upvote();
        }
    }
    downvoteClicked() {
        if (!this.user_id)
            return;
        if (this.user_vote == -1) {
            this.removeVote();
        }
        else {
            this.downvote();
        }
    }
    upvote() {
        this.postService.upvotePost(this.post.uuid).subscribe((response) => {
            this.setVoteData(response);
        }, (err) => {
            console.log(err);
        });
    }
    downvote() {
        this.postService.downvotePost(this.post.uuid).subscribe((response) => {
            this.setVoteData(response);
        }, (err) => {
            console.log(err);
        });
    }
    removeVote() {
        this.postService.removePostVote(this.post.uuid).subscribe((response) => {
            this.setVoteData(response);
        }, (err) => {
            console.log(err);
        });
    }
    setVoteData(response) {
        this.user_vote = response?.vote;
        this.post.votes = response?.votes;
    }
    checkBookmark() {
        if (this.post.user_bookmark) {
            this.removeBookmark();
        }
        else {
            this.addBookmark();
        }
    }
    removeBookmark() {
        this.postService.removeBookmark(this.post.uuid, this.post.user_bookmark.id).subscribe((response) => {
            this.post.user_bookmark = null;
        }, (err) => {
            console.log(err);
        });
    }
    addBookmark() {
        const data = {
            user: this.user_id
        };
        this.postService.addBookmark(this.post.uuid, data).subscribe((response) => {
            this.post.user_bookmark = response;
        }, (err) => {
            console.log(err);
        });
    }
    sharePost(uuid) {
    }
    report() {
        if (!this.user_id) {
            this.redirectToLogin();
            return;
        }
        else {
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
            dialogRef.afterClosed().subscribe((response) => {
                if (response) {
                    this.post.report = response;
                }
            });
        }
    }
    redirectToLogin() {
        window.location.href = `${environment.loginUrl}`;
    }
    static { this.ɵfac = function PostComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PostComponent)(i0.ɵɵdirectiveInject(i1.PostService), i0.ɵɵdirectiveInject(i2.MatDialog)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PostComponent, selectors: [["app-post"]], inputs: { post: "post", user_id: "user_id", showFooter: "showFooter" }, standalone: false, decls: 45, vars: 31, consts: [["headerMenu", "matMenu"], ["viewTemplate", ""], ["bookmarkTemplate", ""], [1, "post-card", 3, "ngClass"], [1, "likes-section"], ["mat-icon-button", "", 3, "click"], [1, "large-icon", 3, "ngClass"], [1, "count-text"], [1, "card-content"], [1, "card-meta"], ["fxLayout", "row", "fxLayoutGap", "8px", "fxLayoutAlign", "start center"], ["alt", "", "src", "/static/assets/images/default_user.png", 1, "user-avatar"], ["class", "font-bold", 4, "ngIf"], [3, "routerLink"], [1, "timestamp"], [2, "display", "flex", "align-items", "center"], ["mat-icon-button", "", 2, "float", "right", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "disabled", ""], [1, "", 3, "routerLink"], [4, "ngIf"], [1, "font-bold"], [3, "innerHtml"], ["fxLayout", "row", "fxLayoutGap", "12px", "fxLayoutAlign", "start center", 1, "card-actions"], [1, "card-actions-icon", 2, "vertical-align", "middle"], [1, "sub-text"], [4, "ngIf", "ngIfElse"], ["mat-icon-button", "", 1, "card-actions-icon"], ["mat-icon-button", "", 2, "margin-left", "auto", 3, "click"], [1, "card-actions-icon"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-card", 3)(1, "div", 4)(2, "button", 5);
            i0.ɵɵlistener("click", function PostComponent_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.upvoteClicked()); });
            i0.ɵɵelementStart(3, "mat-icon", 6);
            i0.ɵɵtext(4, "keyboard_arrow_up");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "span", 7);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵlistener("click", function PostComponent_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.downvoteClicked()); });
            i0.ɵɵelementStart(8, "mat-icon", 6);
            i0.ɵɵtext(9, "keyboard_arrow_down");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 8)(11, "div", 9)(12, "div", 10);
            i0.ɵɵelement(13, "img", 11);
            i0.ɵɵtemplate(14, PostComponent_span_14_Template, 3, 4, "span", 12);
            i0.ɵɵelementStart(15, "span")(16, "a", 13);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "span", 14);
            i0.ɵɵtext(19);
            i0.ɵɵpipe(20, "timeSince");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 15)(22, "button", 16)(23, "mat-icon");
            i0.ɵɵtext(24, "more_vert");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "mat-menu", null, 0)(27, "button", 17);
            i0.ɵɵlistener("click", function PostComponent_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.report()); });
            i0.ɵɵelementStart(28, "mat-icon");
            i0.ɵɵtext(29, "outlined_flag");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "span");
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "button", 18)(33, "mat-icon");
            i0.ɵɵtext(34, "visibility_off");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "span");
            i0.ɵɵtext(36, "Hide");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(37, "mat-card-title")(38, "a", 19);
            i0.ɵɵtext(39);
            i0.ɵɵpipe(40, "slice");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "mat-card-content");
            i0.ɵɵtemplate(42, PostComponent_ng_container_42_Template, 4, 7, "ng-container", 20)(43, PostComponent_ng_container_43_Template, 3, 3, "ng-container", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(44, PostComponent_ng_container_44_Template, 16, 7, "ng-container", 20);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const headerMenu_r6 = i0.ɵɵreference(26);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(21, _c0, ctx.post.status === "ARCHIVED"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c1, ctx.user_vote === 1));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.post.votes);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(25, _c1, ctx.user_vote === -1));
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.post == null ? null : ctx.post.group);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(27, _c2, ctx.post.author.username));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("Posted by u/", ctx.post.author.username);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(20, 15, ctx.post.created_at), " ago");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matMenuTriggerFor", headerMenu_r6);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate((ctx.post == null ? null : ctx.post.report == null ? null : ctx.post.report.id) ? "Redact" : "Report");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(29, _c3, ctx.post.uuid));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind3(40, 17, ctx.post.title, 0, 100), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.post.content.length > 300);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.post.content.length <= 300);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showFooter);
        } }, dependencies: [i3.NgClass, i3.NgIf, i4.MatIconButton, i5.MatCard, i5.MatCardContent, i5.MatCardTitle, i6.MatIcon, i7.MatMenu, i7.MatMenuItem, i7.MatMenuTrigger, i8.RouterLink, i3.SlicePipe, i9.SafeContentPipe, i10.TimeSincePipe], styles: [".post-card[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  padding: 0;\n  width: 100%;\n  margin: 16px 0;\n}\n\n.archived-card[_ngcontent-%COMP%] {\n  background-color: #dcdcdc;\n}\n\n.likes-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 10px;\n  // background-color: #dedede;\n  padding-left: 10px;\n  padding-top: 20px;\n  padding-right: 10px;\n\n  .count-text {\n    font-size: 0.8rem;\n    color: #707070;\n    text-align: center;\n  }\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-left: 0;\n  width: inherit;\n}\n\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n  margin-bottom: 12px;\n  font-size: 0.7rem;\n\n  .user-avatar {\n    width: 30px;\n    height: 30px;\n    margin-right: 8px\n  }\n\n  span:first-child {\n    font-weight: 500;\n  }\n\n  span:last-child {\n    color: #707070;\n  }\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  float: right;\n  color: #707070;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  .card-actions-icon {\n    color: #707070;\n  }\n}\n\n.sub-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #707070;\n  text-align: center;\n  margin-right: 10px;\n}\n\n.large-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  color: #a19999;\n  display: inherit;\n  font-weight: bold;\n\n  &.active-icon {\n    color: #DC281E!important;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostComponent, [{
        type: Component,
        args: [{ selector: 'app-post', standalone: false, template: "<mat-card class=\"post-card\" [ngClass]=\"{'archived-card': post.status === 'ARCHIVED'}\">\n  <div class=\"likes-section\">\n    <button mat-icon-button (click)=\"upvoteClicked()\">\n      <mat-icon class=\"large-icon\" [ngClass]=\"{'active-icon': user_vote === 1}\">keyboard_arrow_up</mat-icon>\n    </button>\n\n    <span class=\"count-text\">{{ post.votes }}</span>\n\n    <button mat-icon-button (click)=\"downvoteClicked()\">\n      <mat-icon class=\"large-icon\" [ngClass]=\"{'active-icon': user_vote === -1}\">keyboard_arrow_down</mat-icon>\n    </button>\n  </div>\n\n  <div class=\"card-content\">\n    <div class=\"card-meta\">\n      <div fxLayout=\"row\" fxLayoutGap=\"8px\" fxLayoutAlign=\"start center\">\n        <img class=\"user-avatar\" alt=\"\" src=\"/static/assets/images/default_user.png\">\n        <span class=\"font-bold\" *ngIf=\"post?.group\">\n          <a [routerLink]=\"[ 'group', post.group.id ]\">g/{{ post.group.name }} .</a>\n        </span>\n        <span>\n          <a [routerLink]=\"[ 'user', post.author.username]\">Posted by u/{{ post.author.username }}</a>\n        </span>\n        <span class=\"timestamp\">{{ post.created_at | timeSince }} ago</span>\n\n        <!-- <ng-container *ngIf=\"post?.tags?.length\">\n          <ng-container *ngFor=\"let tag of post.tags\">\n            <span>{{ tag.name }}</span>\n          </ng-container>\n        </ng-container> -->\n      </div>\n\n      <div style=\"display:flex; align-items:center;\">\n        <button mat-icon-button style=\"float:right;\" [matMenuTriggerFor]=\"headerMenu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #headerMenu=\"matMenu\">\n          <button mat-menu-item (click)=\"report()\">\n            <mat-icon>outlined_flag</mat-icon>\n            <span>{{ (post?.report?.id) ? 'Redact' : 'Report' }}</span>\n          </button>\n          <button mat-menu-item disabled>\n            <mat-icon>visibility_off</mat-icon>\n            <span>Hide</span>\n          </button>\n        </mat-menu>\n      </div>\n\n    </div>\n    <mat-card-title>\n      <a class=\"\" [routerLink]=\"['', post.uuid]\">\n        {{ post.title | slice:0:100 }}\n      </a>\n    </mat-card-title>\n    <mat-card-content>\n      <ng-container *ngIf=\"post.content.length > 300\">\n        <span [innerHtml]=\"post.content | slice:0:300 | safeContent\"></span>\n      </ng-container>\n      <ng-container *ngIf=\"post.content.length <= 300\">\n        <span [innerHtml]=\"post.content | safeContent\"></span>\n      </ng-container>\n    </mat-card-content>\n\n    <ng-container *ngIf=\"showFooter\">\n      <div class=\"card-actions\" fxLayout=\"row\" fxLayoutGap=\"12px\" fxLayoutAlign=\"start center\">\n        <a [routerLink]=\"[ '', post.uuid ]\">\n          <mat-icon class=\"card-actions-icon\" style=\"vertical-align:middle\">insert_comment</mat-icon>\n          <span class=\"sub-text\">\n            <ng-container  *ngIf=\"post.comments > 0 || post.status === 'ARCHIVED'; else viewTemplate\">\n              {{ post.comments }} comments\n            </ng-container>\n            <ng-template #viewTemplate>\n              Add comment\n            </ng-template>\n          </span>\n        </a>\n\n        <button mat-icon-button class=\"card-actions-icon\"><mat-icon>share</mat-icon></button>\n\n        <button mat-icon-button style=\"margin-left: auto;\" (click)=\"checkBookmark()\">\n          <ng-container *ngIf=\"post.user_bookmark?.id; else bookmarkTemplate\">\n            <mat-icon class=\"card-actions-icon\">bookmark</mat-icon>\n            <!-- <span class=\"sub-text\">Saved</span> -->\n          </ng-container>\n          <ng-template #bookmarkTemplate>\n            <mat-icon class=\"card-actions-icon\">bookmark_border</mat-icon>\n            <!-- <span class=\"sub-text\">Save</span> -->\n          </ng-template>\n        </button>\n\n      </div>\n    </ng-container>\n  </div>\n</mat-card>\n", styles: [".post-card {\n  box-shadow: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  padding: 0;\n  width: 100%;\n  margin: 16px 0;\n}\n\n.archived-card {\n  background-color: #dcdcdc;\n}\n\n.likes-section {\n  display: flex;\n  flex-direction: column;\n  margin-right: 10px;\n  // background-color: #dedede;\n  padding-left: 10px;\n  padding-top: 20px;\n  padding-right: 10px;\n\n  .count-text {\n    font-size: 0.8rem;\n    color: #707070;\n    text-align: center;\n  }\n}\n\n.card-content {\n  padding: 20px;\n  padding-left: 0;\n  width: inherit;\n}\n\n.card-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n  margin-bottom: 12px;\n  font-size: 0.7rem;\n\n  .user-avatar {\n    width: 30px;\n    height: 30px;\n    margin-right: 8px\n  }\n\n  span:first-child {\n    font-weight: 500;\n  }\n\n  span:last-child {\n    color: #707070;\n  }\n}\n\n.timestamp {\n  float: right;\n  color: #707070;\n}\n\n.card-actions {\n  .card-actions-icon {\n    color: #707070;\n  }\n}\n\n.sub-text {\n  font-size: 0.8rem;\n  color: #707070;\n  text-align: center;\n  margin-right: 10px;\n}\n\n.large-icon {\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  color: #a19999;\n  display: inherit;\n  font-weight: bold;\n\n  &.active-icon {\n    color: #DC281E!important;\n  }\n}\n"] }]
    }], () => [{ type: i1.PostService }, { type: i2.MatDialog }], { post: [{
            type: Input
        }], user_id: [{
            type: Input
        }], showFooter: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PostComponent, { className: "PostComponent", filePath: "src/app/post/post/post.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=post.component.js.map