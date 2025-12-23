import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../comment-edit/comment-edit.component";
const _c0 = [[["", "commentPlaceholder", ""]]];
const _c1 = ["[commentPlaceholder]"];
function CommentCreateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "app-comment-edit", 1);
    i0.ɵɵlistener("remove_mention", function CommentCreateComponent_div_0_Template_app_comment_edit_remove_mention_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.removeMention($event)); })("clear_comment", function CommentCreateComponent_div_0_Template_app_comment_edit_clear_comment_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clearComment($event)); })("comment_response", function CommentCreateComponent_div_0_Template_app_comment_edit_comment_response_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.emitComment($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("user", ctx_r1.user)("uuid", ctx_r1.uuid)("new", true)("mentioned_users", ctx_r1.mentioned_users)("nested", ctx_r1.nested)("parent", ctx_r1.parent)("child_group", ctx_r1.child_group);
} }
export class CommentCreateComponent {
    constructor() {
        this.child_group = false;
        this.comment_response = new EventEmitter();
        this.remove_mention = new EventEmitter();
        this.clear_comment = new EventEmitter();
    }
    ngOnInit() {
    }
    emitComment(data) {
        this.comment_response.emit(data);
    }
    removeMention(data) {
        this.remove_mention.emit(data);
    }
    clearComment(data) {
        this.clear_comment.emit(data);
    }
    static { this.ɵfac = function CommentCreateComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommentCreateComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CommentCreateComponent, selectors: [["app-comment-create"]], inputs: { user: "user", uuid: "uuid", nested: "nested", parent: "parent", child_group: "child_group", mentioned_users: "mentioned_users" }, outputs: { comment_response: "comment_response", remove_mention: "remove_mention", clear_comment: "clear_comment" }, standalone: false, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [[4, "ngIf"], [3, "remove_mention", "clear_comment", "comment_response", "user", "uuid", "new", "mentioned_users", "nested", "parent", "child_group"]], template: function CommentCreateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵtemplate(0, CommentCreateComponent_div_0_Template, 2, 7, "div", 0);
            i0.ɵɵprojection(1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.user);
        } }, dependencies: [i1.NgIf, i2.CommentEditComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommentCreateComponent, [{
        type: Component,
        args: [{ selector: 'app-comment-create', standalone: false, template: "<div *ngIf=\"user\">\n  <app-comment-edit\n    [user]=\"user\"\n    [uuid]=\"uuid\"\n    [new]=\"true\"\n    [mentioned_users]=\"mentioned_users\"\n    (remove_mention)=\"removeMention($event)\"\n    (clear_comment)=\"clearComment($event)\"\n    (comment_response)=\"emitComment($event)\"\n    [nested]=\"nested\"\n    [parent]=\"parent\"\n    [child_group]=\"child_group\">\n  </app-comment-edit>\n</div>\n<ng-content select=\"[commentPlaceholder]\"></ng-content>\n" }]
    }], () => [], { user: [{
            type: Input
        }], uuid: [{
            type: Input
        }], nested: [{
            type: Input
        }], parent: [{
            type: Input
        }], child_group: [{
            type: Input
        }], mentioned_users: [{
            type: Input
        }], comment_response: [{
            type: Output
        }], remove_mention: [{
            type: Output
        }], clear_comment: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CommentCreateComponent, { className: "CommentCreateComponent", filePath: "src/app/comments/comment-create/comment-create.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=comment-create.component.js.map