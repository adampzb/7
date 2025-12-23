import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/user/user.service";
import * as i2 from "@discussit/core/services/post/post.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/progress-spinner";
import * as i7 from "../../post/post/post.component";
function ProfilePostsComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-post", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("post", post_r1)("showFooter", false)("user_id", ctx_r1.user.id);
} }
function ProfilePostsComponent_ng_container_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelement(2, "mat-spinner", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("diameter", 30);
} }
function ProfilePostsComponent_ng_container_0_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "button", 9);
    i0.ɵɵlistener("click", function ProfilePostsComponent_ng_container_0_ng_container_2_ng_template_2_div_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.loadMorePosts()); });
    i0.ɵɵtext(2, "Load more posts");
    i0.ɵɵelementEnd()();
} }
function ProfilePostsComponent_ng_container_0_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ProfilePostsComponent_ng_container_0_ng_container_2_ng_template_2_div_0_Template, 3, 0, "div", 8);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.showLoader && ctx_r1.next);
} }
function ProfilePostsComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ProfilePostsComponent_ng_container_0_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 2)(2, ProfilePostsComponent_ng_container_0_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const buttonview_r4 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showLoader)("ngIfElse", buttonview_r4);
} }
function ProfilePostsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ProfilePostsComponent_ng_container_0_ng_container_1_Template, 2, 3, "ng-container", 3)(2, ProfilePostsComponent_ng_container_0_ng_container_2_Template, 4, 2, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.posts);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.next);
} }
function ProfilePostsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.currentUser, " has not addded any posts yet");
} }
export class ProfilePostsComponent {
    constructor(userService, postService, route, router) {
        this.userService = userService;
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.posts = [];
        this.page = 1;
        this.isLoading = false;
        this.showLoader = false;
    }
    ngOnInit() {
        this.getPosts();
    }
    getPosts() {
        this.postService.filterPosts(this.page, '', '', '', this.currentUser).subscribe((response) => {
            this.posts = [...this.posts, ...response.results];
            this.next = response.next;
            if (this.next) {
                this.page = parseInt(this.next.split('=')[1]);
            }
            this.isLoading = false;
            this.showLoader = false;
        }, (err) => {
            console.log(err);
            this.isLoading = false;
            this.showLoader = false;
        });
    }
    loadMorePosts() {
        this.showLoader = true;
        this.getPosts();
    }
    static { this.ɵfac = function ProfilePostsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfilePostsComponent)(i0.ɵɵdirectiveInject(i1.UserService), i0.ɵɵdirectiveInject(i2.PostService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfilePostsComponent, selectors: [["app-profile-posts"]], inputs: { user: "user", self: "self", currentUser: "currentUser" }, standalone: false, decls: 3, vars: 2, consts: [["noPosts", ""], ["buttonview", ""], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "post", "showFooter", "user_id"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 2, "height", "100px"], ["color", "warn", 3, "diameter"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", "style", "height: 100px", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["align", "center", 1, "font-bold", "color-tertiary"]], template: function ProfilePostsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProfilePostsComponent_ng_container_0_Template, 3, 2, "ng-container", 2)(1, ProfilePostsComponent_ng_template_1_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const noPosts_r5 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.posts.length)("ngIfElse", noPosts_r5);
        } }, dependencies: [i4.NgForOf, i4.NgIf, i5.MatButton, i6.MatProgressSpinner, i7.PostComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilePostsComponent, [{
        type: Component,
        args: [{ selector: 'app-profile-posts', standalone: false, template: "<ng-container *ngIf=\"posts.length; else noPosts\">\n  <ng-container *ngFor=\"let post of posts;\">\n    <app-post [post]=\"post\" [showFooter]=\"false\" [user_id]=\"user.id\">\n    </app-post>\n  </ng-container>\n\n  <ng-container *ngIf=\"next\">\n    <ng-container *ngIf=\"showLoader; else buttonview\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" style=\"height: 100px\">\n        <mat-spinner color=\"warn\" [diameter]=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n\n    <ng-template #buttonview>\n      <div *ngIf=\"!showLoader && next\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" style=\"height: 100px\">\n        <button mat-raised-button (click)=\"loadMorePosts()\">Load more posts</button>\n      </div>\n    </ng-template>\n  </ng-container>\n</ng-container>\n\n<ng-template #noPosts>\n  <h3 class=\"font-bold color-tertiary\" align=\"center\">{{ currentUser }} has not addded any posts yet</h3>\n</ng-template>\n" }]
    }], () => [{ type: i1.UserService }, { type: i2.PostService }, { type: i3.ActivatedRoute }, { type: i3.Router }], { user: [{
            type: Input
        }], self: [{
            type: Input
        }], currentUser: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfilePostsComponent, { className: "ProfilePostsComponent", filePath: "src/app/profiles/profile-posts/profile-posts.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=profile-posts.component.js.map