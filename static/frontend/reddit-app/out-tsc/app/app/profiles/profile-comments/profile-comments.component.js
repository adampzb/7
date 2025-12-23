import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@discussit/core/pipes/time-since/time-since.pipe";
function ProfileCommentsComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "span", 5);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "timeSince");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, comment_r1.created_at), " ago");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", comment_r1.comment, " ");
} }
function ProfileCommentsComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("u/", ctx_r1.user.username, " has no comments.");
} }
function ProfileCommentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, ProfileCommentsComponent_div_0_ng_container_1_Template, 6, 4, "ng-container", 3)(2, ProfileCommentsComponent_div_0_ng_template_2_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noComments_r3 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.comments)("ngForElse", noComments_r3);
} }
export class ProfileCommentsComponent {
    constructor() {
        this.comments = [];
    }
    ngOnInit() {
    }
    static { this.ɵfac = function ProfileCommentsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfileCommentsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileCommentsComponent, selectors: [["app-profile-comments"]], inputs: { comments: "comments", user: "user", self: "self", currentUser: "currentUser" }, standalone: false, decls: 1, vars: 1, consts: [["noComments", ""], ["fxLayout", "column", 4, "ngIf"], ["fxLayout", "column"], [4, "ngFor", "ngForOf", "ngForElse"], [1, "comment-item"], [1, "comment-subtext"]], template: function ProfileCommentsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProfileCommentsComponent_div_0_Template, 4, 2, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.comments.length);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.TimeSincePipe], styles: [".comment-item[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: inline-grid;\n  background: white;\n  padding: 16px;\n  width: inherit;\n  gap: 6px;\n  color: #707070;\n  width: -webkit-fill-available;\n  \n  .comment-subtext {\n    font-size: 14px;\n    color: #232323;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileCommentsComponent, [{
        type: Component,
        args: [{ selector: 'app-profile-comments', standalone: false, template: "<div fxLayout=\"column\" *ngIf=\"comments.length\">\n  <ng-container *ngFor=\"let comment of comments; else noComments\">\n    <div class=\"comment-item\">\n      <span class=\"comment-subtext\">{{ comment.created_at | timeSince }} ago</span>\n      {{ comment.comment }}\n    </div>\n  </ng-container>\n  <ng-template #noComments>\n    <p>u/{{ user.username }} has no comments.</p>\n  </ng-template>\n</div>\n", styles: [".comment-item {\n  margin: 8px 0;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: inline-grid;\n  background: white;\n  padding: 16px;\n  width: inherit;\n  gap: 6px;\n  color: #707070;\n  width: -webkit-fill-available;\n  \n  .comment-subtext {\n    font-size: 14px;\n    color: #232323;\n  }\n}\n"] }]
    }], () => [], { comments: [{
            type: Input
        }], user: [{
            type: Input
        }], self: [{
            type: Input
        }], currentUser: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfileCommentsComponent, { className: "ProfileCommentsComponent", filePath: "src/app/profiles/profile-comments/profile-comments.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=profile-comments.component.js.map