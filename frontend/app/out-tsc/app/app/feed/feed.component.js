import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/user/user.service";
import * as i2 from "../core/services/post/post.service";
import * as i3 from "../core/services/group/group.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/grid-list";
import * as i7 from "@angular/material/list";
import * as i8 from "@angular/material/progress-spinner";
import * as i9 from "@angular/router";
import * as i10 from "../post/post/post.component";
import * as i11 from "../post/post-loader/post-loader.component";
const _c0 = a0 => ["group", a0];
function FeedComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-post-loader")(2, "app-post-loader")(3, "app-post-loader")(4, "app-post-loader")(5, "app-post-loader");
    i0.ɵɵelementContainerEnd();
} }
function FeedComponent_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-post", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("post", post_r1)("user_id", ctx_r1.user == null ? null : ctx_r1.user.id);
} }
function FeedComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, FeedComponent_ng_template_4_ng_container_0_Template, 2, 2, "ng-container", 10);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r1.posts);
} }
function FeedComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "mat-spinner", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("diameter", 30);
} }
function FeedComponent_ng_container_6_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "button", 15);
    i0.ɵɵlistener("click", function FeedComponent_ng_container_6_ng_template_2_div_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.loadMorePosts()); });
    i0.ɵɵtext(2, "Load more posts");
    i0.ɵɵelementEnd()();
} }
function FeedComponent_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, FeedComponent_ng_container_6_ng_template_2_div_0_Template, 3, 0, "div", 14);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.showLoader && ctx_r1.next);
} }
function FeedComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, FeedComponent_ng_container_6_ng_container_1_Template, 3, 1, "ng-container", 5)(2, FeedComponent_ng_container_6_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const buttonview_r4 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showLoader)("ngIfElse", buttonview_r4);
} }
function FeedComponent_mat_list_item_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-item")(1, "a", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, group_r5.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("u/", group_r5.name);
} }
export class FeedComponent {
    constructor(userService, postService, groupService) {
        this.userService = userService;
        this.postService = postService;
        this.groupService = groupService;
        this.isLoading = false;
        this.posts = [];
        this.page = 1;
        this.showLoader = false;
        this.groups = [];
    }
    ngOnInit() {
        this.getAuthUser();
        this.getPosts();
        this.topGroups();
    }
    getAuthUser() {
        this.userService.userInitialized.subscribe((initialized) => {
            if (initialized) {
                this.userService.user.subscribe((response) => {
                    this.user = response;
                });
            }
        });
    }
    getPosts() {
        if (!this.showLoader) {
            this.isLoading = true;
        }
        // console.log(this.page);
        this.postService.getPosts(this.page).subscribe((response) => {
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
    topGroups() {
        this.groupService.getGroups().subscribe((response) => {
            this.groups = response;
        });
    }
    loadMorePosts() {
        this.showLoader = true;
        this.getPosts();
    }
    static { this.ɵfac = function FeedComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FeedComponent)(i0.ɵɵdirectiveInject(i1.UserService), i0.ɵɵdirectiveInject(i2.PostService), i0.ɵɵdirectiveInject(i3.GroupService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeedComponent, selectors: [["app-feed"]], standalone: false, decls: 13, vars: 4, consts: [["showPosts", ""], ["buttonview", ""], ["fxLayout", "row", "fxLayoutGap", "16px"], ["fxLayout", "column", "fxFlex", "70", "fxFlex.lt-lg", "100"], [1, "width-100"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["fxLayout", "column", "fxFlex", "30", "fxHide.lt-lg", ""], [1, "related-section"], [1, "heading-5", "text-uppercase"], [4, "ngFor", "ngForOf"], [3, "post", "user_id"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 2, "height", "100px"], ["color", "warn", 3, "diameter"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", "style", "height: 100px", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["matLine", "", 1, "font-bold", 3, "routerLink"]], template: function FeedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
            i0.ɵɵtemplate(3, FeedComponent_ng_container_3_Template, 6, 0, "ng-container", 5)(4, FeedComponent_ng_template_4_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(6, FeedComponent_ng_container_6_Template, 4, 2, "ng-container", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 7)(8, "div", 8)(9, "span", 9);
            i0.ɵɵtext(10, " Top Communities ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-nav-list");
            i0.ɵɵtemplate(12, FeedComponent_mat_list_item_12_Template, 3, 4, "mat-list-item", 10);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            const showPosts_r6 = i0.ɵɵreference(5);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.isLoading)("ngIfElse", showPosts_r6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.next);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.groups);
        } }, dependencies: [i4.NgForOf, i4.NgIf, i5.MatButton, i6.MatLine, i7.MatNavList, i7.MatListItem, i8.MatProgressSpinner, i9.RouterLink, i10.PostComponent, i11.PostLoaderComponent], styles: [".related-section[_ngcontent-%COMP%] {\n  background-color: white;\n  min-height: 300px;\n  margin-top: 16px;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  padding: 16px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeedComponent, [{
        type: Component,
        args: [{ standalone: false, selector: 'app-feed', template: "<div fxLayout=\"row\" fxLayoutGap=\"16px\">\n  <div fxLayout=\"column\" fxFlex=\"70\" fxFlex.lt-lg=\"100\">\n    <div class=\"width-100\">\n      <ng-container *ngIf=\"isLoading; else showPosts\">\n        <app-post-loader></app-post-loader>\n        <app-post-loader></app-post-loader>\n        <app-post-loader></app-post-loader>\n        <app-post-loader></app-post-loader>\n        <app-post-loader></app-post-loader>\n      </ng-container>\n\n      <ng-template #showPosts>\n        <ng-container *ngFor=\"let post of posts\">\n          <app-post [post]=\"post\" [user_id]=\"user?.id\"></app-post>\n        </ng-container>\n      </ng-template>\n\n\n      <ng-container *ngIf=\"next\">\n        <ng-container *ngIf=\"showLoader; else buttonview\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" style=\"height: 100px\">\n            <mat-spinner color=\"warn\" [diameter]=\"30\"></mat-spinner>\n          </div>\n        </ng-container>\n\n        <ng-template #buttonview>\n          <div *ngIf=\"!showLoader && next\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" style=\"height: 100px\">\n            <button mat-raised-button (click)=\"loadMorePosts()\">Load more posts</button>\n          </div>\n        </ng-template>\n      </ng-container>\n    </div>\n  </div>\n\n  <div fxLayout=\"column\" fxFlex=\"30\" fxHide.lt-lg>\n    <div class=\"related-section\">\n      <span class=\"heading-5 text-uppercase\">\n        Top Communities\n      </span>\n\n      <mat-nav-list>\n        <mat-list-item *ngFor=\"let group of groups\">\n           <a class=\"font-bold\" matLine [routerLink]=\"[ 'group', group.id ]\">u/{{ group.name }}</a>\n        </mat-list-item>\n      </mat-nav-list>\n    </div>\n\n    <!-- <div class=\"related-section\">\n      <span class=\"heading-5 text-uppercase\">\n        Home\n      </span>\n    </div> -->\n  </div>\n</div>\n", styles: [".related-section {\n  background-color: white;\n  min-height: 300px;\n  margin-top: 16px;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  padding: 16px;\n}\n"] }]
    }], () => [{ type: i1.UserService }, { type: i2.PostService }, { type: i3.GroupService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeedComponent, { className: "FeedComponent", filePath: "src/app/feed/feed.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=feed.component.js.map