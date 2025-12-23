import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
function CommentListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "app-comment", 2);
    i0.ɵɵlistener("removed", function CommentListComponent_div_0_div_1_Template_app_comment_removed_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.removed($event)); })("mentioned", function CommentListComponent_div_0_div_1_Template_app_comment_mentioned_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.userMentioned($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const comment_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("comment", comment_r3)("user", ctx_r1.user)("uuid", ctx_r1.uuid)("nested", ctx_r1.current_nest_depth < ctx_r1.max_nest_depth)("current_nest_depth", ctx_r1.current_nest_depth)("max_nested_depth", ctx_r1.max_nest_depth);
} }
function CommentListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CommentListComponent_div_0_div_1_Template, 2, 6, "div", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.comments);
} }
export class CommentListComponent {
    constructor() {
        this.comments = [];
        this.mentioned = new EventEmitter();
        this.max_nest_depth = 0;
        this.current_nest_depth = 0;
    }
    ngOnInit() {
        // console.log(this.comments, "list");
    }
    removed(removed_comment) {
        this.comments.map((comment, index) => {
            if (comment.id == removed_comment.id) {
                this.comments.splice(index, 1);
            }
        });
    }
    hightlight(data) {
        // console.log(data, "Highlight event");
    }
    userMentioned(data) {
        console.log(data);
        this.mentioned.emit(data);
    }
    static { this.ɵfac = function CommentListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommentListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CommentListComponent, selectors: [["app-comment-list"]], inputs: { comments: "comments", user: "user", uuid: "uuid", max_nest_depth: "max_nest_depth", current_nest_depth: "current_nest_depth" }, outputs: { mentioned: "mentioned" }, standalone: false, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "removed", "mentioned", "comment", "user", "uuid", "nested", "current_nest_depth", "max_nested_depth"]], template: function CommentListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CommentListComponent_div_0_Template, 2, 1, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.comments);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommentListComponent, [{
        type: Component,
        args: [{ selector: 'app-comment-list', standalone: false, template: "<div *ngIf=\"comments\">\n  <div *ngFor=\"let comment of comments\">\n    <app-comment\n      [comment]=\"comment\"\n      [user]=\"user\"\n      [uuid]=\"uuid\"\n      (removed)=\"removed($event)\"\n      (mentioned)=\"userMentioned($event)\"\n      [nested]=\"current_nest_depth < max_nest_depth\"\n      [current_nest_depth]=\"current_nest_depth\"\n      [max_nested_depth]=\"max_nest_depth\">\n    </app-comment>\n  </div>\n</div>\n" }]
    }], () => [], { comments: [{
            type: Input
        }], user: [{
            type: Input
        }], uuid: [{
            type: Input
        }], mentioned: [{
            type: Output
        }], max_nest_depth: [{
            type: Input
        }], current_nest_depth: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CommentListComponent, { className: "CommentListComponent", filePath: "src/app/comments/comment-list/comment-list.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=comment-list.component.js.map