import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/comment/comment.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/cdk/text-field";
function CommentEditComponent_div_0_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function CommentEditComponent_div_0_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.cancel()); });
    i0.ɵɵtext(1, "Cancel");
    i0.ɵɵelementEnd();
} }
function CommentEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵelement(2, "img", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 4)(4, "form", 5)(5, "div", 6)(6, "div", 7)(7, "textarea", 8);
    i0.ɵɵtext(8, "          ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 9);
    i0.ɵɵtemplate(10, CommentEditComponent_div_0_button_10_Template, 2, 0, "button", 10);
    i0.ɵɵelementStart(11, "button", 11);
    i0.ɵɵlistener("click", function CommentEditComponent_div_0_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submit()); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r2.commentForm);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r2.commentForm.valid);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.comment_loading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.new ? "Comment" : "Save");
} }
export class CommentEditComponent {
    constructor(commentService) {
        this.commentService = commentService;
        this.new = true;
        this.nested = false;
        this.child_group = false;
        this.comment_response = new EventEmitter();
        this.remove_mention = new EventEmitter();
        this.clear_comment = new EventEmitter();
        this.mentioned_user_ids = [];
        this.comment_loading = false;
    }
    ngOnInit() {
        this.initiateCommentForm();
        // console.log(this.source, "comment-create");
    }
    get f() { return this.commentForm.controls; }
    initiateCommentForm() {
        let comment_string = '';
        if (this.comment_obj) {
            comment_string = this.comment_obj.comment;
        }
        this.commentForm = new FormGroup({
            comment: new FormControl(comment_string, {
                validators: [Validators.required, Validators.minLength(2), Validators.maxLength(2000)]
            })
        });
        // console.log(this.mentioned_users);
    }
    submit() {
        console.log('Comment submit clicked');
        console.log('Form valid:', this.commentForm.valid);
        console.log('Form value:', this.commentForm.value);
        console.log('Form errors:', this.commentForm.errors);
        if (this.commentForm.invalid) {
            console.log('Form is invalid, not submitting');
            console.log('Comment control errors:', this.commentForm.get('comment')?.errors);
            console.log('Comment value length:', this.commentForm.value.comment?.length);
            return;
        }
        let id = null;
        if (!this.new) {
            id = this.comment_obj.id;
        }
        if (this.new &&
            this.mentioned_users &&
            this.mentioned_users.size > 0) {
            this.mentioned_users.forEach((user) => {
                this.mentioned_user_ids.push(user.id);
            });
        }
        // console.log(this.mentioned_user_ids);
        let comment = {
            id: id,
            comment: this.commentForm.value.comment,
            user: this.user.id,
            mentioned_users: this.mentioned_user_ids,
            is_nesting_permitted: this.nested
        };
        if (this.child_group) {
            comment['parent'] = this.parent;
        }
        if (this.new) {
            this.createComment(comment);
        }
        else {
            this.updateComment(comment);
        }
    }
    cancel() {
        if (this.new) {
            this.commentForm.reset(this.commentForm.value.comment);
            this.clear_comment.emit(true);
        }
        else {
            this.comment_response.emit(this.comment_obj);
        }
    }
    createComment(comment) {
        console.log('Creating comment with data:', comment);
        console.log('Post UUID:', this.uuid);
        this.commentForm.reset(this.commentForm.value.comment);
        this.clear_comment.emit(true);
        this.comment_loading = true;
        this.commentService.createComment(this.uuid, comment).subscribe((response) => {
            console.log('Comment created successfully:', response);
            this.comment_loading = false;
            this.comment_response.emit(response);
            this.clear_comment.emit(true);
            this.mentioned_user_ids.length = 0;
        }, (err) => {
            console.error('Error creating comment:', err);
            console.error('Error details:', err.error);
            this.comment_loading = false;
        });
    }
    updateComment(comment) {
        this.commentService.updateComment(this.uuid, comment.id, comment).subscribe((response) => {
            // console.log(response);
            this.comment_response.emit(response);
        }, (err) => {
            console.log(err);
        });
    }
    removeMention(user) {
        this.remove_mention.emit(user);
    }
    static { this.ɵfac = function CommentEditComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommentEditComponent)(i0.ɵɵdirectiveInject(i1.CommentService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CommentEditComponent, selectors: [["app-comment-edit"]], inputs: { user: "user", uuid: "uuid", new: "new", comment_obj: "comment_obj", mentioned_users: "mentioned_users", nested: "nested", parent: "parent", child_group: "child_group" }, outputs: { comment_response: "comment_response", remove_mention: "remove_mention", clear_comment: "clear_comment" }, standalone: false, decls: 1, vars: 1, consts: [["fxLayout", "row", "class", "width-100", "style", "margin-bottom:50px; gap: 12px;", 4, "ngIf"], ["fxLayout", "row", 1, "width-100", 2, "margin-bottom", "50px", "gap", "12px"], ["fxLayout", "column", "fxFlex", "50px", 1, "col-user"], ["src", "/static/assets/images/default_user.png", "alt", "", 1, "user-avatar"], ["fxLayout", "column", "fxFlex", "90", 2, "margin", "auto"], [1, "width-100", 3, "formGroup"], [1, "comment-wrapper"], [1, "width-100", "comment-input-field"], ["matInput", "", "formControlName", "comment", "maxlength", "2000", "placeholder", "Comment", "cdkTextareaAutosize", "", "cdkAutosizeMaxRows", "3", "cdkAutosizeMinRows", "3", 1, "font-sm", "sparro-grey-800", "comment-textbox"], ["fxLayout", "row", "fxLayoutGap", "16px", 2, "justify-content", "flex-end"], ["mat-flat-button", "", 3, "click", 4, "ngIf"], ["mat-flat-button", "", 3, "click", "disabled"], ["mat-flat-button", "", 3, "click"]], template: function CommentEditComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CommentEditComponent_div_0_Template, 13, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.user);
        } }, dependencies: [i2.NgIf, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.MaxLengthValidator, i3.FormGroupDirective, i3.FormControlName, i4.MatButton, i5.MatInput, i6.CdkTextareaAutosize], styles: [".comment-form[_ngcontent-%COMP%]   .mat-primary[_ngcontent-%COMP%] {\n  color: #707070;\n}\n\n.mention-list[_ngcontent-%COMP%] {\n  float : left;\n  width : 60px;\n  margin: 5px;\n}\n\n.comment-form.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-start[_ngcontent-%COMP%] {\n  border-radius: 8px 0 0 8px!important;\n}\n\n.comment-form.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-end[_ngcontent-%COMP%] {\n  border-radius: 0 8px 8px 0!important;\n}\n\n.comment-form.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #707070!important;\n}\n\n  {\n  .mat-form-field-wrapper {\n    padding-bottom: 0 !important;\n  }\n  .mat-form-field-infix {\n    border-top: 0;\n  }\n}\n\n@media (max-width: 640px) {\n  .col-user[_ngcontent-%COMP%] {\n    max-width: 15%!important;\n  }\n}\n\n  {\n  .comment-input-field .mat-form-field-wrapper {\n    padding-bottom: 0!important\n  }\n  .comment-input-field .mat-form-field-appearance-outline .mat-form-field-outline {\n    color: transparent!important;\n  }\n  .comment-input-field .mat-form-field-infix {\n    border-top: 0!important;\n  }\n}\n//[_ngcontent-%COMP%]   .textarea-font[_ngcontent-%COMP%] {\n//   font-size: 14px;\n// }\n//[_ngcontent-%COMP%]   @media[_ngcontent-%COMP%]   (max-width[_ngcontent-%COMP%]: 959px) {\n//   .textarea-font {\n//     font-size: 12px!important;\n//   }\n// }\n\n[_ngcontent-%COMP%]::placeholder {\n  font-size  : 14px;\n  font-family: 'Roboto', sans-serif;\n}\n\n.comment-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #d3d3d3;\n  border-radius: 8px;\n  padding: 8px;\n  margin-bottom: 16px\n}\n\n.comment-textbox[_ngcontent-%COMP%] {\n  font-size  : 14px;\n  font-family: 'Roboto', sans-serif;\n  width      : 100%;\n  line-height: 22px;\n  outline    : none;\n  border     : none;\n  margin-top : 8px;\n}\n\n.commentbox-container[_ngcontent-%COMP%] {\n  gap: 24px;\n  @media only screen and (max-width: 960px) {\n    gap: 12px;\n  }\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n  overflow-y: scroll;\n  box-shadow: inset 0 0 4px #929292;\n  border-radius: 15px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f15a24;\n  border-radius: 10px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommentEditComponent, [{
        type: Component,
        args: [{ selector: 'app-comment-edit', standalone: false, template: "<div fxLayout=\"row\" class=\"width-100\" *ngIf=\"user\" style=\"margin-bottom:50px; gap: 12px;\">\n  <div fxLayout=\"column\" fxFlex=\"50px\" class=\"col-user\">\n    <img class=\"user-avatar\" src=\"/static/assets/images/default_user.png\" alt=\"\">\n  </div>\n\n  <div fxLayout=\"column\" fxFlex=\"90\" style=\"margin: auto\">\n    <form [formGroup]=\"commentForm\" class=\"width-100\">\n      <div class=\"comment-wrapper\">\n        <div class=\"width-100 comment-input-field\">\n          <textarea matInput class=\"font-sm sparro-grey-800 comment-textbox\" formControlName=\"comment\" maxlength=\"2000\"\n            placeholder=\"Comment\" cdkTextareaAutosize\n            cdkAutosizeMaxRows=\"3\" cdkAutosizeMinRows=\"3\">\n          </textarea>\n        </div>\n      </div>\n\n      <div fxLayout=\"row\" style=\"justify-content:flex-end\" fxLayoutGap=\"16px\">\n        <button mat-flat-button *ngIf=\"commentForm.valid\" (click)=\"cancel()\">Cancel</button>\n        <button mat-flat-button [disabled]=\"comment_loading\" (click)=\"submit()\">{{ new ? 'Comment': 'Save' }}</button>\n      </div>\n    </form>\n  </div>\n</div>\n", styles: [".comment-form .mat-primary {\n  color: #707070;\n}\n\n.mention-list {\n  float : left;\n  width : 60px;\n  margin: 5px;\n}\n\n.comment-form.mat-form-field-appearance-outline .mat-form-field-outline-start {\n  border-radius: 8px 0 0 8px!important;\n}\n\n.comment-form.mat-form-field-appearance-outline .mat-form-field-outline-end {\n  border-radius: 0 8px 8px 0!important;\n}\n\n.comment-form.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #707070!important;\n}\n\n::ng-deep {\n  .mat-form-field-wrapper {\n    padding-bottom: 0 !important;\n  }\n  .mat-form-field-infix {\n    border-top: 0;\n  }\n}\n\n@media (max-width: 640px) {\n  .col-user {\n    max-width: 15%!important;\n  }\n}\n\n::ng-deep {\n  .comment-input-field .mat-form-field-wrapper {\n    padding-bottom: 0!important\n  }\n  .comment-input-field .mat-form-field-appearance-outline .mat-form-field-outline {\n    color: transparent!important;\n  }\n  .comment-input-field .mat-form-field-infix {\n    border-top: 0!important;\n  }\n}\n// .textarea-font {\n//   font-size: 14px;\n// }\n// @media (max-width: 959px) {\n//   .textarea-font {\n//     font-size: 12px!important;\n//   }\n// }\n\n::placeholder {\n  font-size  : 14px;\n  font-family: 'Roboto', sans-serif;\n}\n\n.comment-wrapper {\n  border: 1px solid #d3d3d3;\n  border-radius: 8px;\n  padding: 8px;\n  margin-bottom: 16px\n}\n\n.comment-textbox {\n  font-size  : 14px;\n  font-family: 'Roboto', sans-serif;\n  width      : 100%;\n  line-height: 22px;\n  outline    : none;\n  border     : none;\n  margin-top : 8px;\n}\n\n.commentbox-container {\n  gap: 24px;\n  @media only screen and (max-width: 960px) {\n    gap: 12px;\n  }\n}\n\n::-webkit-scrollbar {\n  width: 4px;\n  overflow-y: scroll;\n  box-shadow: inset 0 0 4px #929292;\n  border-radius: 15px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #f15a24;\n  border-radius: 10px;\n}\n"] }]
    }], () => [{ type: i1.CommentService }], { user: [{
            type: Input
        }], uuid: [{
            type: Input
        }], new: [{
            type: Input
        }], comment_obj: [{
            type: Input
        }], mentioned_users: [{
            type: Input
        }], nested: [{
            type: Input
        }], parent: [{
            type: Input
        }], child_group: [{
            type: Input
        }], comment_response: [{
            type: Output
        }], remove_mention: [{
            type: Output
        }], clear_comment: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CommentEditComponent, { className: "CommentEditComponent", filePath: "src/app/comments/comment-edit/comment-edit.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=comment-edit.component.js.map