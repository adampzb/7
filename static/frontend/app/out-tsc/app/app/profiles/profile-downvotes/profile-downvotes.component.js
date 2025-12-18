import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/user/user.service";
import * as i2 from "@discussit/core/services/group/group.service";
import * as i3 from "@discussit/core/services/comment/comment.service";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "../../post/post/post.component";
import * as i7 from "@discussit/core/pipes/time-since/time-since.pipe";
function ProfileDownvotesComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-post", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("post", item_r1.post)("showFooter", false);
} }
function ProfileDownvotesComponent_ng_container_0_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "timeSince");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(3, 2, item_r1.created_at), " ago");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r1.post_comment.comment, " ");
} }
function ProfileDownvotesComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ProfileDownvotesComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 2)(2, ProfileDownvotesComponent_ng_container_0_ng_container_1_ng_template_2_Template, 5, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const commentTemplate_r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r1.post)("ngIfElse", commentTemplate_r2);
} }
function ProfileDownvotesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ProfileDownvotesComponent_ng_container_0_ng_container_1_Template, 4, 2, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.downvotes);
} }
function ProfileDownvotesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 7);
    i0.ɵɵtext(1, "No content to show");
    i0.ɵɵelementEnd();
} }
export class ProfileDownvotesComponent {
    constructor(userService, groupService, commentService, route, router) {
        this.userService = userService;
        this.groupService = groupService;
        this.commentService = commentService;
        this.route = route;
        this.router = router;
        this.isLoading = false;
        this.downvotes = [];
    }
    ngOnInit() {
        this.getUserDownvotes();
    }
    getUserDownvotes() {
        this.userService.userDownvotes(this.currentUser).subscribe((response) => {
            const data = [...response.posts, ...response.comments];
            this.downvotes = data.sort((a, b) => b.created_at - a.created_at);
        });
    }
    static { this.ɵfac = function ProfileDownvotesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfileDownvotesComponent)(i0.ɵɵdirectiveInject(i1.UserService), i0.ɵɵdirectiveInject(i2.GroupService), i0.ɵɵdirectiveInject(i3.CommentService), i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i4.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileDownvotesComponent, selectors: [["app-profile-downvotes"]], inputs: { user: "user", self: "self", currentUser: "currentUser" }, standalone: false, decls: 3, vars: 2, consts: [["elseTemplate", ""], ["commentTemplate", ""], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "post", "showFooter"], [1, "comment-item"], [1, "comment-subtext"], ["align", "center", 1, "font-bold", "color-tertiary"]], template: function ProfileDownvotesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProfileDownvotesComponent_ng_container_0_Template, 2, 1, "ng-container", 2)(1, ProfileDownvotesComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const elseTemplate_r4 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.downvotes.length)("ngIfElse", elseTemplate_r4);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.PostComponent, i7.TimeSincePipe], styles: [".comment-item[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: inline-grid;\n  background: white;\n  padding: 16px;\n  width: inherit;\n  gap: 6px;\n  color: #707070;\n\n  .comment-subtext {\n    font-size: 14px;\n    color: #232323;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileDownvotesComponent, [{
        type: Component,
        args: [{ selector: 'app-profile-downvotes', standalone: false, template: "<ng-container *ngIf=\"downvotes.length; else elseTemplate\">\n  <ng-container *ngFor=\"let item of downvotes;\">\n    <ng-container *ngIf=\"item.post; else commentTemplate\">\n      <app-post [post]=\"item.post\" [showFooter]=\"false\"></app-post>\n    </ng-container>\n\n    <ng-template #commentTemplate>\n      <div class=\"comment-item\">\n        <span class=\"comment-subtext\">{{ item.created_at | timeSince }} ago</span>\n        {{ item.post_comment.comment }}\n      </div>\n    </ng-template>\n  </ng-container>\n</ng-container>\n\n<ng-template #elseTemplate>\n  <h3 class=\"font-bold color-tertiary\" align=\"center\">No content to show</h3>\n</ng-template>\n", styles: [".comment-item {\n  margin: 8px 0;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: inline-grid;\n  background: white;\n  padding: 16px;\n  width: inherit;\n  gap: 6px;\n  color: #707070;\n\n  .comment-subtext {\n    font-size: 14px;\n    color: #232323;\n  }\n}\n"] }]
    }], () => [{ type: i1.UserService }, { type: i2.GroupService }, { type: i3.CommentService }, { type: i4.ActivatedRoute }, { type: i4.Router }], { user: [{
            type: Input
        }], self: [{
            type: Input
        }], currentUser: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfileDownvotesComponent, { className: "ProfileDownvotesComponent", filePath: "src/app/profiles/profile-downvotes/profile-downvotes.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=profile-downvotes.component.js.map