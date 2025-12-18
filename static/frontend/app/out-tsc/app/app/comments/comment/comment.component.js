import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationDialogComponent } from '@discussit/app/components/confirmation-dialog/confirmation-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/user/user.service";
import * as i2 from "@discussit/core/services/comment/comment.service";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/menu";
import * as i8 from "../comment-group/comment-group.component";
import * as i9 from "../comment-edit/comment-edit.component";
import * as i10 from "../comment-footer/comment-footer.component";
import * as i11 from "@discussit/core/pipes/time-since/time-since.pipe";
function CommentComponent_div_0_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " (edited) ");
    i0.ɵɵelementEnd();
} }
function CommentComponent_div_0_div_1_div_16_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function CommentComponent_div_0_div_1_div_16_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.editComment()); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "Edit");
    i0.ɵɵelementEnd()();
} }
function CommentComponent_div_0_div_1_div_16_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function CommentComponent_div_0_div_1_div_16_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.removeComment(ctx_r2.comment)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "Delete");
    i0.ɵɵelementEnd()();
} }
function CommentComponent_div_0_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "button", 22)(2, "mat-icon", 23);
    i0.ɵɵtext(3, "more_vert");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "mat-menu", null, 0);
    i0.ɵɵtemplate(6, CommentComponent_div_0_div_1_div_16_button_6_Template, 3, 0, "button", 24)(7, CommentComponent_div_0_div_1_div_16_button_7_Template, 3, 0, "button", 24);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const menu_r5 = i0.ɵɵreference(5);
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matMenuTriggerFor", menu_r5);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r2.can_edit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.can_edit);
} }
function CommentComponent_div_0_div_1_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", user_r6.first_name ? user_r6.first_name : "Jane", " ", user_r6.last_name ? user_r6.last_name : "Doe");
} }
function CommentComponent_div_0_div_1_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.comment.comment);
} }
function CommentComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6);
    i0.ɵɵelement(2, "img", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 8)(4, "div", 9)(5, "div", 10)(6, "span", 11);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 12)(9, "div", 13)(10, "div", 14)(11, "p", 15)(12, "i");
    i0.ɵɵtemplate(13, CommentComponent_div_0_div_1_span_13_Template, 2, 0, "span", 1);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "timeSince");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(16, CommentComponent_div_0_div_1_div_16_Template, 8, 3, "div", 16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 17)(18, "p", 18);
    i0.ɵɵtemplate(19, CommentComponent_div_0_div_1_span_19_Template, 2, 2, "span", 19)(20, CommentComponent_div_0_div_1_span_20_Template, 2, 1, "span", 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 9)(22, "app-comment-footer", 20);
    i0.ɵɵlistener("mention", function CommentComponent_div_0_div_1_Template_app_comment_footer_mention_22_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.userMentioned($event)); })("nestedReply", function CommentComponent_div_0_div_1_Template_app_comment_footer_nestedReply_22_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.nestedReplyEvent($event)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.comment.user.username, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r2.comment.edited);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 10, ctx_r2.comment.updated_at), " ago");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.can_edit);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.comment.mentioned_users);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.comment.comment);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("comment", ctx_r2.comment)("user", ctx_r2.user)("uuid", ctx_r2.uuid)("nested", ctx_r2.nested);
} }
function CommentComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "app-comment-edit", 27);
    i0.ɵɵlistener("comment_response", function CommentComponent_div_0_div_2_Template_app_comment_edit_comment_response_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.commentEditted($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("user", ctx_r2.user)("uuid", ctx_r2.uuid)("new", false)("comment_obj", ctx_r2.comment)("nested", ctx_r2.nested);
} }
function CommentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CommentComponent_div_0_div_1_Template, 23, 12, "div", 4)(2, CommentComponent_div_0_div_2_Template, 2, 5, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.comment && !ctx_r2.edit_mode);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.edit_mode);
} }
function CommentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 29);
    i0.ɵɵelement(2, "img", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 8)(4, "div", 31)(5, "i");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.comment.comment);
} }
function CommentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelement(1, "app-comment-group", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("uuid", ctx_r2.uuid)("user", ctx_r2.user)("max_nest_depth", ctx_r2.max_nested_depth)("current_nest_depth", ctx_r2.current_nest_depth + 1)("parent", ctx_r2.comment.id)("child_group", true);
} }
export class CommentComponent {
    constructor(userService, commentService, dialog) {
        this.userService = userService;
        this.commentService = commentService;
        this.dialog = dialog;
        this.nested = true;
        this.max_nested_depth = 0;
        this.current_nest_depth = 0;
        this.can_edit = false;
        this.edit_mode = false;
        this.nested_reply_event = false;
        this.expanded = false;
        this.removed = new EventEmitter();
        this.mentioned = new EventEmitter();
    }
    ngOnInit() {
        this.getAuthUser();
    }
    getAuthUser() {
        this.userService.userInitialized.subscribe((initialized) => {
            if (initialized) {
                this.userService.user.subscribe((user) => {
                    this.user = user;
                    this.checkAuthUser();
                });
            }
        });
    }
    checkAuthUser() {
        if (this.comment.user.id === this.user.id) {
            this.can_edit = true;
        }
    }
    toggle() {
        this.expanded = !this.expanded;
    }
    nestedReplyEvent(event) {
        this.nested_reply_event = event;
    }
    editComment() {
        this.edit_mode = true;
    }
    commentEditted(data) {
        this.comment = data;
        this.edit_mode = false;
    }
    userMentioned(data) {
        // console.log(data);
        this.mentioned.emit(data);
    }
    removeComment(comment) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '380px',
            height: '200px',
            data: {
                message: `Are you sure you want to
          delete this comment?`,
                okayButtonText: 'Yes'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.commentService.removeComment(this.uuid, comment.id).subscribe((response) => {
                    // console.log(response);
                    if (comment.child_count === 0) {
                        this.removed.emit(comment);
                    }
                    else {
                        comment.comment = 'This comment has been removed';
                        comment.is_removed = true;
                    }
                }, (err) => {
                    console.log(err);
                });
            }
            else {
            }
        });
    }
    static { this.ɵfac = function CommentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommentComponent)(i0.ɵɵdirectiveInject(i1.UserService), i0.ɵɵdirectiveInject(i2.CommentService), i0.ɵɵdirectiveInject(i3.MatDialog)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CommentComponent, selectors: [["app-comment"]], inputs: { comment: "comment", user: "user", uuid: "uuid", nested: "nested", max_nested_depth: "max_nested_depth", current_nest_depth: "current_nest_depth" }, outputs: { removed: "removed", mentioned: "mentioned" }, standalone: false, decls: 3, vars: 3, consts: [["menu", "matMenu"], [4, "ngIf"], ["style", "width:100%; margin:16px 0; padding: 16px 0", 4, "ngIf"], ["style", "border-left: 1px solid #d5d5d5; margin-left: 20px; padding-left: 22px", 4, "ngIf"], ["fxLayout", "row", "style", "width:100%; margin:16px 0; padding: 16px 0", 4, "ngIf"], ["fxLayout", "row", 2, "width", "100%", "margin", "16px 0", "padding", "16px 0"], ["fxLayout", "column", "fxFlex", "56px", 1, "col-user"], ["src", "/static/assets/images/default_user.png", "alt", "", 1, "user-avatar"], ["fxLayout", "column", "fxFlex", "90"], ["fxLayout", "row", 1, "margin-0"], ["fxLayout", "column", "fxFlex", "50"], [1, "font-bold", "color-primary"], ["fxLayout", "column", "fxLayoutAlign", "center end", "fxFlex", "50"], ["fxLayout", "row", "fxFlex", "", 1, "width-100"], ["fxLayout", "column", "fxFlex", "100", "fxLayoutAlign", "center end"], [1, "grey-700", "font-xxs", "margin-0", 2, "margin", "5px 0"], ["fxLayout", "column", "fxLayoutAlign", "center end", "fxFlex", "20", 4, "ngIf"], ["fxLayout", "row"], [1, "comment-text", 2, "line-height", "21px", "white-space", "pre-line", "margin", "0", "margin-bottom", "12px"], ["style", "padding-right:4px; color:#f15a24", 4, "ngFor", "ngForOf"], [3, "mention", "nestedReply", "comment", "user", "uuid", "nested"], ["fxLayout", "column", "fxLayoutAlign", "center end", "fxFlex", "20"], ["mat-icon-button", "", 2, "height", "30px", "width", "30px", 3, "matMenuTriggerFor"], [2, "vertical-align", "baseline"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [2, "padding-right", "4px", "color", "#f15a24"], [2, "width", "100%", 3, "comment_response", "user", "uuid", "new", "comment_obj", "nested"], [2, "width", "100%", "margin", "16px 0", "padding", "16px 0"], ["fxLayout", "column", "fxFlex", "8.65", 1, "col-user"], ["src", "/static/assets/images/default_user.png", "alt", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "font-xs", 2, "height", "40px", "background", "#f4f4f4", "border-radius", "12px"], [2, "border-left", "1px solid #d5d5d5", "margin-left", "20px", "padding-left", "22px"], [3, "uuid", "user", "max_nest_depth", "current_nest_depth", "parent", "child_group"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CommentComponent_div_0_Template, 3, 2, "div", 1)(1, CommentComponent_div_1_Template, 7, 1, "div", 2)(2, CommentComponent_div_2_Template, 2, 6, "div", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.comment && !ctx.comment.is_removed);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.comment.is_removed);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.nested && ctx.nested_reply_event);
        } }, dependencies: [i4.NgForOf, i4.NgIf, i5.MatIconButton, i6.MatIcon, i7.MatMenu, i7.MatMenuItem, i7.MatMenuTrigger, i8.CommentGroupComponent, i9.CommentEditComponent, i10.CommentFooterComponent, i11.TimeSincePipe], styles: [".user-avatar[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.grey-700[_ngcontent-%COMP%] {\n  color: #707070;\n}\n\n.font-xxs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n@media (max-width: 640px) {\n  .col-user[_ngcontent-%COMP%] {\n    max-width: 15%!important;\n  }\n}\n\n.comment-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 22px;\n  white-space: inherit;\n  margin:0;\n  margin-bottom: 12px;\n}\n\n  {\n  .mat-menu-item {\n    line-height: 30px;\n    padding    : 0 12px ;\n    height     : 40px;\n  }\n\n  .mat-menu-content:not(:empty) {\n    padding-top   : 0;\n    padding-bottom: 0;\n  }\n\n  .mat-menu-panel {\n    border-radius: 8px;\n    min-height: inherit;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommentComponent, [{
        type: Component,
        args: [{ selector: 'app-comment', standalone: false, template: "<div *ngIf=\"comment && !comment.is_removed\">\n  <div fxLayout=\"row\" style=\"width:100%; margin:16px 0; padding: 16px 0\" *ngIf=\"comment && !edit_mode\">\n    <div fxLayout=\"column\" fxFlex=\"56px\" class=\"col-user\">\n      <img class=\"user-avatar\" src=\"/static/assets/images/default_user.png\" alt=\"\">\n    </div>\n    <div fxLayout=\"column\" fxFlex=\"90\">\n      <div fxLayout=\"row\" class=\"margin-0\">\n        <div fxLayout=\"column\" fxFlex=\"50\">\n          <span class=\"font-bold color-primary\">\n            {{ comment.user.username }}\n          </span>\n          <!-- <span class=\"font-bold color-primary\">\n            {{ comment.user.first_name ? comment.user.first_name : 'Jane' }}\n            {{ comment.user.last_name ? comment.user.last_name : 'Doe' }}\n          </span> -->\n        </div>\n          <div fxLayout=\"column\" fxLayoutAlign=\"center end\" fxFlex=\"50\">\n            <div fxLayout=\"row\" fxFlex class=\"width-100\">\n              <div fxLayout=\"column\" fxFlex=\"100\" fxLayoutAlign=\"center end\">\n                <p class=\"grey-700 font-xxs margin-0\" style=\"margin: 5px 0\">\n                  <i> <span *ngIf=\"comment.edited\"> (edited) </span>\n                    {{ comment.updated_at | timeSince }} ago</i>\n                </p>\n              </div>\n              <div fxLayout=\"column\" fxLayoutAlign=\"center end\" fxFlex=\"20\" *ngIf=\"can_edit\">\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\" style=\"height:30px; width:30px\">\n                  <mat-icon style=\"vertical-align:baseline\">more_vert</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item *ngIf=\"can_edit\" (click)=\"editComment()\">\n                    <span>Edit</span>\n                  </button>\n                  <button mat-menu-item *ngIf=\"can_edit\" (click)=\"removeComment(comment)\">\n                    <span>Delete</span>\n                  </button>\n                  <!-- <button mat-menu-item (click)=\"report(comment.author)\">\n                    <span>Report</span>\n                  </button> -->\n                </mat-menu>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div fxLayout=\"row\">\n          <p class=\"comment-text\"\n            style=\"line-height:21px; white-space: pre-line; margin:0; margin-bottom: 12px;\">\n            <span *ngFor=\"let user of comment.mentioned_users\" style=\"padding-right:4px; color:#f15a24\">{{ user.first_name ? user.first_name : 'Jane'}} {{ user.last_name ? user.last_name : 'Doe' }}</span>\n            <span *ngIf=\"comment.comment\">{{ comment.comment }}</span>\n            <!-- <span *ngIf=\"comment.comment.length <= 100\">{{ comment.comment }}</span>\n            <span *ngIf=\"comment.comment.length > 100 && expanded\">{{ comment.comment }}\n              <span style=\"cursor: pointer; font-weight: 700;\" (click)=\"toggle()\">Show less</span></span>\n            <span *ngIf=\"comment.comment.length > 100 && !expanded\">{{ comment.comment | truncate: 100 }}\n              <span style=\"cursor: pointer; font-weight: 700;\" (click)=\"toggle()\">Read more</span></span> -->\n          </p>\n        </div>\n        <div fxLayout=\"row\" class=\"margin-0\">\n          <app-comment-footer\n            [comment]=\"comment\"\n            [user]=\"user\"\n            [uuid]=\"uuid\"\n            [nested]=\"nested\"\n            (mention)=\"userMentioned($event)\"\n            (nestedReply)=\"nestedReplyEvent($event)\">\n          </app-comment-footer>\n        </div>\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" style=\"width:100%; margin:16px 0; padding: 16px 0\" *ngIf=\"edit_mode\">\n    <app-comment-edit\n      style=\"width:100%\"\n      [user]=\"user\"\n      [uuid]=\"uuid\"\n      [new]=\"false\"\n      [comment_obj]=\"comment\"\n      (comment_response)=\"commentEditted($event)\"\n      [nested]=\"nested\">\n    </app-comment-edit>\n  </div>\n</div>\n\n<div *ngIf=\"comment.is_removed\" style=\"width:100%; margin:16px 0; padding: 16px 0\">\n  <div fxLayout=\"column\" fxFlex=\"8.65\" class=\"col-user\">\n    <img src=\"/static/assets/images/default_user.png\" alt=\"\">\n  </div>\n  <div fxLayout=\"column\" fxFlex=\"90\">\n    <div class=\"font-xs\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 40px; background: #f4f4f4; border-radius: 12px;\">\n      <i>{{comment.comment}}</i>\n    </div>\n  </div>\n</div>\n\n<div style=\"border-left: 1px solid #d5d5d5; margin-left: 20px; padding-left: 22px\" *ngIf=\"nested && nested_reply_event\">\n  <app-comment-group\n    [uuid]=\"uuid\"\n    [user]=\"user\"\n    [max_nest_depth]=\"max_nested_depth\"\n    [current_nest_depth]=\"current_nest_depth + 1\"\n    [parent]=\"comment.id\"\n    [child_group]=\"true\">\n  </app-comment-group>\n</div>\n", styles: [".user-avatar {\n  height: 40px;\n  width: 40px;\n}\n\n.grey-700 {\n  color: #707070;\n}\n\n.font-xxs {\n  font-size: 0.75rem;\n}\n\n@media (max-width: 640px) {\n  .col-user {\n    max-width: 15%!important;\n  }\n}\n\n.comment-text {\n  font-size: 14px;\n  line-height: 22px;\n  white-space: inherit;\n  margin:0;\n  margin-bottom: 12px;\n}\n\n::ng-deep {\n  .mat-menu-item {\n    line-height: 30px;\n    padding    : 0 12px ;\n    height     : 40px;\n  }\n\n  .mat-menu-content:not(:empty) {\n    padding-top   : 0;\n    padding-bottom: 0;\n  }\n\n  .mat-menu-panel {\n    border-radius: 8px;\n    min-height: inherit;\n  }\n}\n"] }]
    }], () => [{ type: i1.UserService }, { type: i2.CommentService }, { type: i3.MatDialog }], { comment: [{
            type: Input
        }], user: [{
            type: Input
        }], uuid: [{
            type: Input
        }], nested: [{
            type: Input
        }], max_nested_depth: [{
            type: Input
        }], current_nest_depth: [{
            type: Input
        }], removed: [{
            type: Output
        }], mentioned: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CommentComponent, { className: "CommentComponent", filePath: "src/app/comments/comment/comment.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=comment.component.js.map