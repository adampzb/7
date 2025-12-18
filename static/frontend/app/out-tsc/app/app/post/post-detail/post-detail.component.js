import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@discussit/core/services/user/user.service";
import * as i3 from "@discussit/core/services/post/post.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/card";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/progress-spinner";
import * as i8 from "../../comments/comment-group/comment-group.component";
import * as i9 from "@discussit/core/pipes/safe-content/safe-content.pipe";
function PostDetailComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-card", 2);
    i0.ɵɵelement(2, "mat-spinner", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("diameter", 30);
} }
function PostDetailComponent_ng_template_1_app_comment_group_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-comment-group", 10);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("uuid", ctx_r0.post.uuid)("user", ctx_r0.user)("commentable", ctx_r0.post.status === "ARCHIVED" ? false : true)("max_nest_depth", 5);
} }
function PostDetailComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card", 4)(1, "h1");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "p", 5);
    i0.ɵɵpipe(4, "safeContent");
    i0.ɵɵelementStart(5, "mat-icon", 6);
    i0.ɵɵtext(6, "more_horiz");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "section", 7)(8, "p", 8);
    i0.ɵɵtext(9, " Comments ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, PostDetailComponent_ng_template_1_app_comment_group_10_Template, 1, 4, "app-comment-group", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.post == null ? null : ctx_r0.post.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHtml", i0.ɵɵpipeBind1(4, 3, ctx_r0.post.content), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r0.post);
} }
export class PostDetailComponent {
    constructor(router, route, userService, postService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.postService = postService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.post_uuid = this.route.snapshot.params.uuid;
        this.getAuthUser();
    }
    getAuthUser() {
        this.userService.userInitialized.subscribe((initialized) => {
            if (initialized) {
                this.userService.user.subscribe((user) => {
                    this.user = user;
                    // console.log(this.user);
                });
            }
        });
        this.getPostDetail();
    }
    getPostDetail() {
        this.postService.getPostDetail(this.post_uuid).subscribe((response) => {
            this.post = response;
            this.isLoading = false;
        });
    }
    static { this.ɵfac = function PostDetailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PostDetailComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.UserService), i0.ɵɵdirectiveInject(i3.PostService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PostDetailComponent, selectors: [["app-post-detail"]], standalone: false, decls: 3, vars: 2, consts: [["showContent", ""], [4, "ngIf", "ngIfElse"], ["fxLayout", "row-reverse", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "post-card", 2, "height", "400px"], ["color", "warn", 3, "diameter"], [1, "post-card"], [1, "post-content", 3, "innerHtml"], [1, "separator-icon"], [1, "comment-section"], [1, "font-sm", "font-bold", "color-primary"], [3, "uuid", "user", "commentable", "max_nest_depth", 4, "ngIf"], [3, "uuid", "user", "commentable", "max_nest_depth"]], template: function PostDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PostDetailComponent_ng_container_0_Template, 3, 1, "ng-container", 1)(1, PostDetailComponent_ng_template_1_Template, 11, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const showContent_r2 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.isLoading)("ngIfElse", showContent_r2);
        } }, dependencies: [i4.NgIf, i5.MatCard, i6.MatIcon, i7.MatProgressSpinner, i8.CommentGroupComponent, i9.SafeContentPipe], styles: [".post-card[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  box-shadow: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  padding: 20px;\n  flex-direction: column;\n}\n\n\n.post-content[_ngcontent-%COMP%] {\n  padding-bottom: 20px\n}\n\n.separator-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  height: 60px;\n  color: #707070;\n  text-align: center;\n  width: auto;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostDetailComponent, [{
        type: Component,
        args: [{ selector: 'app-post-detail', standalone: false, template: "<ng-container *ngIf=\"isLoading; else showContent\">\n  <mat-card class=\"post-card\" fxLayout=\"row-reverse\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" style=\"height: 400px\">\n    <mat-spinner color=\"warn\" [diameter]=\"30\"></mat-spinner>\n  </mat-card>\n</ng-container>\n<ng-template #showContent>\n    <mat-card class=\"post-card\">\n      <h1>{{ post?.title }}</h1>\n\n      <p class=\"post-content\" [innerHtml]=\"post.content | safeContent\"></p>\n\n      <mat-icon class=\"separator-icon\">more_horiz</mat-icon>\n\n      <section class=\"comment-section\">\n        <p class=\"font-sm font-bold color-primary\">\n          Comments\n        </p>\n\n        <app-comment-group *ngIf=\"post\"\n          [uuid]=\"post.uuid\"\n          [user]=\"user\"\n          [commentable]=\"post.status === 'ARCHIVED' ? false: true\"\n          [max_nest_depth]=\"5\">\n        </app-comment-group>\n      </section>\n    </mat-card>\n</ng-template>\n", styles: [".post-card {\n  margin: 16px 0;\n  box-shadow: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  padding: 20px;\n  flex-direction: column;\n}\n\n\n.post-content {\n  padding-bottom: 20px\n}\n\n.separator-icon {\n  font-size: 60px;\n  height: 60px;\n  color: #707070;\n  text-align: center;\n  width: auto;\n}\n"] }]
    }], () => [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.UserService }, { type: i3.PostService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PostDetailComponent, { className: "PostDetailComponent", filePath: "src/app/post/post-detail/post-detail.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=post-detail.component.js.map