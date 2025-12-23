import { Component, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '@discussit/env/environment';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/comment/comment.service";
import * as i2 from "@discussit/core/services/user/user.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/progress-spinner";
import * as i7 from "../comment-create/comment-create.component";
import * as i8 from "../comment-list/comment-list.component";
function CommentGroupComponent_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "p", 8);
    i0.ɵɵtext(2, "Please \u00A0 ");
    i0.ɵɵelementStart(3, "a", 9);
    i0.ɵɵlistener("click", function CommentGroupComponent_ng_container_1_div_3_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.goToLogin()); });
    i0.ɵɵtext(4, "Login ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, "\u00A0 or \u00A0");
    i0.ɵɵelementStart(6, "a", 9);
    i0.ɵɵlistener("click", function CommentGroupComponent_ng_container_1_div_3_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.goToLogin()); });
    i0.ɵɵtext(7, "Sign up ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, "\u00A0 to add comments ");
    i0.ɵɵelementEnd()();
} }
function CommentGroupComponent_ng_container_1_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 10)(1, "app-comment-list", 11);
    i0.ɵɵlistener("mentioned", function CommentGroupComponent_ng_container_1_section_4_Template_app_comment_list_mentioned_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.userMentioned($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("comments", ctx_r1.comments)("user", ctx_r1.user)("uuid", ctx_r1.uuid)("max_nest_depth", ctx_r1.max_nest_depth)("current_nest_depth", ctx_r1.current_nest_depth);
} }
function CommentGroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 3)(2, "app-comment-create", 4);
    i0.ɵɵlistener("comment_response", function CommentGroupComponent_ng_container_1_Template_app_comment_create_comment_response_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.created($event)); })("remove_mention", function CommentGroupComponent_ng_container_1_Template_app_comment_create_remove_mention_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.removeMention($event)); })("clear_comment", function CommentGroupComponent_ng_container_1_Template_app_comment_create_clear_comment_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clearComment($event)); });
    i0.ɵɵtemplate(3, CommentGroupComponent_ng_container_1_div_3_Template, 9, 0, "div", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, CommentGroupComponent_ng_container_1_section_4_Template, 2, 5, "section", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("user", ctx_r1.user)("uuid", ctx_r1.uuid)("mentioned_users", ctx_r1.mentioned_users)("nested", ctx_r1.nested && ctx_r1.current_nest_depth < ctx_r1.max_nest_depth)("parent", ctx_r1.parent)("child_group", ctx_r1.child_group);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.is_authenticated);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.comments);
} }
function CommentGroupComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 13);
    i0.ɵɵelement(2, "mat-spinner", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("diameter", 20);
} }
function CommentGroupComponent_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "button", 18);
    i0.ɵɵlistener("click", function CommentGroupComponent_ng_container_2_ng_template_2_div_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.loadMoreComments()); });
    i0.ɵɵtext(2, "Load more comments");
    i0.ɵɵelementEnd()();
} }
function CommentGroupComponent_ng_container_2_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 19);
} }
function CommentGroupComponent_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CommentGroupComponent_ng_container_2_ng_template_2_div_0_Template, 3, 0, "div", 15)(1, CommentGroupComponent_ng_container_2_ng_template_2_div_1_Template, 1, 0, "div", 16);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r1.next);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.next && ctx_r1.comments_count > 0 && !ctx_r1.child_group);
} }
function CommentGroupComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CommentGroupComponent_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 12)(2, CommentGroupComponent_ng_container_2_ng_template_2_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const nextButton_r6 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showLoader)("ngIfElse", nextButton_r6);
} }
export class CommentGroupComponent {
    constructor(commentService, userService, router) {
        this.commentService = commentService;
        this.userService = userService;
        this.router = router;
        this.comments = [];
        this.create_only = false;
        this.max_nest_depth = 0;
        this.current_nest_depth = 0;
        this.child_group = false;
        this.commentable = true;
        this.next = null;
        this.page = 1;
        this.is_authenticated = false;
        this.comments_count = 0;
        this.user_checked = false;
        this.mentioned_users = new Set();
        this.showLoader = false;
        this.counter = new EventEmitter();
        this.create_only_toggle = new EventEmitter();
        this.nested = true;
        this.loginUrl = `${environment.loginUrl}/`;
    }
    ngOnInit() {
        this.showLoader = true;
        if (this.user) {
            this.is_authenticated = true;
        }
        else {
            this.getUser();
        }
        this.getComments();
    }
    getUser() {
        this.userService.userInitialized.subscribe((initialized) => {
            if (initialized) {
                this.userService.user.subscribe((user) => {
                    if (user) {
                        this.user = user;
                        console.log(this.user);
                        this.user_checked = true;
                        this.is_authenticated = true;
                    }
                    else {
                        this.user_checked = true;
                        this.is_authenticated = false;
                    }
                });
            }
        });
    }
    getComments() {
        this.commentService.getComments(this.uuid, this.page, this.child_group, this.parent).subscribe((response) => {
            this.showLoader = false;
            this.setComments(response);
        }, (err) => {
            console.log(err);
            this.showLoader = false;
        });
    }
    loadMoreComments() {
        if (this.next != null) {
            this.getComments();
        }
    }
    setComments(response) {
        this.next = response.next;
        if (this.next) {
            this.page = parseInt(this.next.split('=')[1]);
        }
        this.comments = [...this.comments, ...response.results];
        this.comments_count = response.count;
    }
    created(data) {
        this.comments.unshift(data);
        this.create_only = false;
        this.counter.emit(this.comments.length);
    }
    goToLogin() {
        // window.location.href = `${this.loginUrl}&continue=${window.location.href}`;
        this.router.navigate(['sign-in']);
    }
    userMentioned(data) {
        if (this.mentioned_users.size === 0) {
            this.mentioned_users.add(data);
        }
        else {
            let user_found = false;
            this.mentioned_users.forEach((user) => {
                if (data.id === user.id) {
                    user_found = true;
                    // this.mentioned_users.add(data);
                }
            });
            if (!user_found) {
                this.mentioned_users.add(data);
            }
        }
        // console.log(this.mentioned_users);
        this.scrollToCreate();
    }
    removeMention(data) {
        if (this.mentioned_users.has(data)) {
            this.mentioned_users.delete(data);
        }
    }
    clearComment(data) {
        this.mentioned_users.clear();
    }
    scrollToCreate() {
        const el = document.getElementById('createsection');
        el.scrollIntoView({ behavior: 'smooth' });
    }
    static { this.ɵfac = function CommentGroupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommentGroupComponent)(i0.ɵɵdirectiveInject(i1.CommentService), i0.ɵɵdirectiveInject(i2.UserService), i0.ɵɵdirectiveInject(i3.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CommentGroupComponent, selectors: [["app-comment-group"]], inputs: { uuid: "uuid", create_only: "create_only", user: "user", max_nest_depth: "max_nest_depth", current_nest_depth: "current_nest_depth", parent: "parent", child_group: "child_group", commentable: "commentable" }, outputs: { counter: "counter", create_only_toggle: "create_only_toggle" }, standalone: false, decls: 3, vars: 2, consts: [["nextButton", ""], [1, "app-comment-section"], [4, "ngIf"], ["id", "createsection", 1, "comment-create", 2, "margin-bottom", "16px"], [2, "height", "170px", 3, "comment_response", "remove_mention", "clear_comment", "user", "uuid", "mentioned_users", "nested", "parent", "child_group"], ["commentPlaceholder", "", 4, "ngIf"], ["class", "comment-list", "style", "height:100%", 4, "ngIf"], ["commentPlaceholder", ""], [1, "comment-header", "font-xs"], [1, "link", 3, "click"], [1, "comment-list", 2, "height", "100%"], [3, "mentioned", "comments", "user", "uuid", "max_nest_depth", "current_nest_depth"], [4, "ngIf", "ngIfElse"], ["fxLayoutAlign", "center center", 2, "height", "200px"], ["color", "warn", 3, "diameter"], ["fxLayoutAlign", "center center", "style", "margin-top:30px; padding-bottom:30px;", 4, "ngIf"], ["class", "", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayoutAlign", "center center", 2, "margin-top", "30px", "padding-bottom", "30px"], ["mat-flat-button", "", 3, "click"], ["fxLayoutAlign", "center center", 1, ""]], template: function CommentGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 1);
            i0.ɵɵtemplate(1, CommentGroupComponent_ng_container_1_Template, 5, 8, "ng-container", 2)(2, CommentGroupComponent_ng_container_2_Template, 4, 2, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.user_checked || ctx.is_authenticated && ctx.commentable);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.create_only);
        } }, dependencies: [i4.NgIf, i5.MatButton, i6.MatProgressSpinner, i7.CommentCreateComponent, i8.CommentListComponent], styles: [".separator-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  height: 60px;\n  color: #707070;\n  text-align: center;\n  width: auto;\n  display: block;\n}\n\n.comment-header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  font-size: 14px;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: brown;\n  font-size: 14px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommentGroupComponent, [{
        type: Component,
        args: [{ selector: 'app-comment-group', standalone: false, template: "<section class=\"app-comment-section\">\n  <ng-container *ngIf=\"user_checked || is_authenticated && commentable\">\n    <section id=\"createsection\" class=\"comment-create\" style=\"margin-bottom:16px;\">\n      <app-comment-create\n        [user]=\"user\"\n        [uuid]=\"uuid\"\n        [mentioned_users]=\"mentioned_users\"\n        (comment_response)=\"created($event)\"\n        (remove_mention)=\"removeMention($event)\"\n        (clear_comment)=\"clearComment($event)\"\n        [nested]=\"nested && current_nest_depth < max_nest_depth\"\n        style=\"height:170px\"\n        [parent]=\"parent\"\n        [child_group]=\"child_group\">\n\n        <div *ngIf=\"!is_authenticated\" commentPlaceholder>\n          <p class=\"comment-header font-xs\">Please &nbsp;\n            <a class=\"link\" (click)=\"goToLogin()\">Login </a>&nbsp; or &nbsp;<a class=\"link\" (click)=\"goToLogin()\">Sign up </a>&nbsp;\n            to add comments\n          </p>\n        </div>\n      </app-comment-create>\n    </section>\n\n    <section class=\"comment-list\" style=\"height:100%\" *ngIf=\"comments\">\n      <app-comment-list\n        [comments]=\"comments\"\n        [user]=\"user\"\n        [uuid]=\"uuid\"\n        (mentioned)=\"userMentioned($event)\"\n        [max_nest_depth]=\"max_nest_depth\"\n        [current_nest_depth]=\"current_nest_depth\">\n      </app-comment-list>\n    </section>\n  </ng-container>\n  <ng-container *ngIf=\"!create_only\">\n    <ng-container *ngIf=\"showLoader; else nextButton\">\n      <div fxLayoutAlign=\"center center\" style=\"height:200px\">\n        <mat-spinner color=\"warn\" [diameter]=\"20\"></mat-spinner>\n      </div>\n    </ng-container>\n    <ng-template #nextButton>\n      <div *ngIf=\"next\" fxLayoutAlign=\"center center\" style=\"margin-top:30px; padding-bottom:30px;\">\n        <button mat-flat-button (click)=\"loadMoreComments()\">Load more comments</button>\n      </div>\n      <div class=\"\" *ngIf=\"!next && comments_count > 0 && !child_group\" fxLayoutAlign=\"center center\">\n      </div>\n    </ng-template>\n  </ng-container>\n</section>\n", styles: [".separator-icon {\n  font-size: 60px;\n  height: 60px;\n  color: #707070;\n  text-align: center;\n  width: auto;\n  display: block;\n}\n\n.comment-header {\n  width: 100%;\n  padding: 8px 12px;\n  font-size: 14px;\n}\n\n.link {\n  font-weight: 500;\n  color: brown;\n  font-size: 14px;\n}\n"] }]
    }], () => [{ type: i1.CommentService }, { type: i2.UserService }, { type: i3.Router }], { uuid: [{
            type: Input
        }], create_only: [{
            type: Input
        }], user: [{
            type: Input
        }], max_nest_depth: [{
            type: Input
        }], current_nest_depth: [{
            type: Input
        }], parent: [{
            type: Input
        }], child_group: [{
            type: Input
        }], commentable: [{
            type: Input
        }], counter: [{
            type: Output
        }], create_only_toggle: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CommentGroupComponent, { className: "CommentGroupComponent", filePath: "src/app/comments/comment-group/comment-group.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=comment-group.component.js.map