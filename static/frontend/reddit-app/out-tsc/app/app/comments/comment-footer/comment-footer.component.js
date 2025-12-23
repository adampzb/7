import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/comment/comment.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
const _c0 = a0 => ({ "button-active": a0 });
function CommentFooterComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵtext(1, "Reply");
    i0.ɵɵelementEnd();
} }
function CommentFooterComponent_a_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Reply");
} }
function CommentFooterComponent_a_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Reply [1]");
} }
function CommentFooterComponent_a_11_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1("Replies [", ctx_r1.comment.child_count, "]");
} }
function CommentFooterComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵlistener("click", function CommentFooterComponent_a_11_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.nestedReplyEvent()); });
    i0.ɵɵtemplate(1, CommentFooterComponent_a_11_ng_template_1_Template, 1, 0, "ng-template", 8)(2, CommentFooterComponent_a_11_ng_template_2_Template, 1, 0, "ng-template", 9)(3, CommentFooterComponent_a_11_ng_template_3_Template, 1, 1, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngPlural", ctx_r1.comment.child_count);
} }
export class CommentFooterComponent {
    constructor(commentService) {
        this.commentService = commentService;
        this.nested = true;
        this.mention = new EventEmitter();
        this.nestedReply = new EventEmitter();
        this.can_reply = true;
        this.nestedReplyFlag = false;
        this.user_vote = 0;
    }
    ngOnInit() {
        if (this.user?.id == this.comment?.user?.id) {
            this.can_reply = false;
        }
        this.checkUserVote();
    }
    checkUserVote() {
        this.commentService.checkUserVote(this.uuid, this.comment.id).subscribe((response) => {
            console.log(response);
            this.setVoteData(response);
        });
    }
    setVoteData(response) {
        this.user_vote = response?.vote;
        this.comment.votes = response?.votes;
    }
    upvoteClicked() {
        if (this.comment?.is_removed) {
            return;
        }
        if (this.user_vote == 1) {
            this.removeVote();
        }
        else {
            this.upvoteComment();
        }
    }
    downvoteClicked() {
        if (this.comment?.is_removed) {
            return;
        }
        if (this.user_vote == -1) {
            this.removeVote();
        }
        else {
            this.downvoteComment();
        }
    }
    upvoteComment() {
        this.commentService.upvoteComment(this.uuid, this.comment.id).subscribe((response) => {
            this.setVoteData(response);
        }, (err) => {
            console.log(err);
        });
    }
    removeVote() {
        this.commentService.removeVote(this.uuid, this.comment.id).subscribe((response) => {
            this.setVoteData(response);
        }, (err) => {
            console.log(err);
        });
    }
    downvoteComment() {
        this.commentService.downvoteComment(this.uuid, this.comment.id).subscribe((response) => {
            console.log(response);
            this.setVoteData(response);
        }, (err) => {
            console.log(err);
        });
    }
    mentionUser() {
        this.mention.emit(this.comment.user);
    }
    nestedReplyEvent() {
        this.nestedReply.emit(true);
    }
    static { this.ɵfac = function CommentFooterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommentFooterComponent)(i0.ɵɵdirectiveInject(i1.CommentService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CommentFooterComponent, selectors: [["app-comment-footer"]], inputs: { comment: "comment", user: "user", uuid: "uuid", nested: "nested" }, outputs: { mention: "mention", nestedReply: "nestedReply" }, standalone: false, decls: 12, vars: 11, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "8px", 1, "width-100"], ["mat-icon-button", "", 1, "border", 3, "click", "ngClass", "disabled"], [1, "comment-votes"], [1, ""], ["class", "reply-btn", 4, "ngIf"], ["class", "reply-btn", 3, "ngPlural", "click", 4, "ngIf"], [1, "reply-btn"], [1, "reply-btn", 3, "click", "ngPlural"], ["ngPluralCase", "=0"], ["ngPluralCase", "=1"], ["ngPluralCase", "other"]], template: function CommentFooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function CommentFooterComponent_Template_button_click_1_listener() { return ctx.upvoteClicked(); });
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "keyboard_arrow_up");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "p", 2);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 1);
            i0.ɵɵlistener("click", function CommentFooterComponent_Template_button_click_6_listener() { return ctx.downvoteClicked(); });
            i0.ɵɵelementStart(7, "mat-icon");
            i0.ɵɵtext(8, "keyboard_arrow_down");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 3);
            i0.ɵɵtemplate(10, CommentFooterComponent_a_10_Template, 2, 0, "a", 4)(11, CommentFooterComponent_a_11_Template, 4, 1, "a", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx.user_vote == 1))("disabled", !ctx.user);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.comment.votes);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, ctx.user_vote == -1))("disabled", !ctx.user);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.user);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.nested);
        } }, dependencies: [i2.NgClass, i2.NgIf, i2.NgPlural, i2.NgPluralCase, i3.MatIconButton, i4.MatIcon], styles: [".button-active[_ngcontent-%COMP%] {\n  color: #DC281E!important;\n  border: 1px solid #DC281E!important;\n  border-radius: 50%;\n}\n\n.button-inactive[_ngcontent-%COMP%] {\n  color : #545454;\n  border: 1px solid #d3d3d3;\n  border-radius: 50%;\n}\n\n.reply-btn[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin-left    : 8px;\n  border         : 1px solid #d3d3d3;\n  padding        : 6px 12px;\n  border-radius  : 4px;\n  font-size: 12px;\n  line-height: 16.41px;\n  color: #232323;\n  font-weight: 400;\n  cursor        : pointer;\n}\n\n.mat-icon-button[_ngcontent-%COMP%] {\n  line-height: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: 1px solid #dedede;\n}\n\n.comment-votes[_ngcontent-%COMP%] {\n  // padding: 0 10px;\n  margin: 8px 0;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommentFooterComponent, [{
        type: Component,
        args: [{ selector: 'app-comment-footer', standalone: false, template: "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"width-100\">\n    <button mat-icon-button class=\"border\" [ngClass]=\"{'button-active': user_vote == 1}\" (click)=\"upvoteClicked()\" [disabled]=\"!user\">\n      <mat-icon>keyboard_arrow_up</mat-icon>\n    </button>\n\n    <p class=\"comment-votes\">{{ comment.votes }}</p>\n\n    <button mat-icon-button class=\"border\" [ngClass]=\"{'button-active': user_vote == -1}\" (click)=\"downvoteClicked()\" [disabled]=\"!user\">\n      <mat-icon>keyboard_arrow_down</mat-icon>\n    </button>\n\n    <div class=\"\">\n      <a *ngIf=\"!user\" class=\"reply-btn\">Reply</a>\n\n      <a *ngIf=\"nested\" (click)=\"nestedReplyEvent()\" class=\"reply-btn\" [ngPlural]=\"comment.child_count\">\n        <ng-template ngPluralCase=\"=0\">Reply</ng-template>\n        <ng-template ngPluralCase=\"=1\">Reply [1]</ng-template>\n        <ng-template ngPluralCase=\"other\">Replies [{{comment.child_count}}]</ng-template>\n      </a>\n    </div>\n</div>\n", styles: [".button-active {\n  color: #DC281E!important;\n  border: 1px solid #DC281E!important;\n  border-radius: 50%;\n}\n\n.button-inactive {\n  color : #545454;\n  border: 1px solid #d3d3d3;\n  border-radius: 50%;\n}\n\n.reply-btn {\n  text-decoration: none;\n  margin-left    : 8px;\n  border         : 1px solid #d3d3d3;\n  padding        : 6px 12px;\n  border-radius  : 4px;\n  font-size: 12px;\n  line-height: 16.41px;\n  color: #232323;\n  font-weight: 400;\n  cursor        : pointer;\n}\n\n.mat-icon-button {\n  line-height: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.border {\n  border: 1px solid #dedede;\n}\n\n.comment-votes {\n  // padding: 0 10px;\n  margin: 8px 0;\n}\n"] }]
    }], () => [{ type: i1.CommentService }], { comment: [{
            type: Input
        }], user: [{
            type: Input
        }], uuid: [{
            type: Input
        }], nested: [{
            type: Input
        }], mention: [{
            type: Output
        }], nestedReply: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CommentFooterComponent, { className: "CommentFooterComponent", filePath: "src/app/comments/comment-footer/comment-footer.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=comment-footer.component.js.map