import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/user/user.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "../../post/post/post.component";
function ProfileBookmarksComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-post", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("post", item_r1.post)("showFooter", false);
} }
function ProfileBookmarksComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ProfileBookmarksComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r1.post);
} }
export class ProfileBookmarksComponent {
    constructor(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.isLoading = false;
        this.bookmarks = [];
    }
    ngOnInit() {
        this.getUserBookmarks();
    }
    getUserBookmarks() {
        this.userService.getBookmarks(this.currentUser).subscribe((response) => {
            this.bookmarks = response;
        });
    }
    static { this.ɵfac = function ProfileBookmarksComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfileBookmarksComponent)(i0.ɵɵdirectiveInject(i1.UserService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileBookmarksComponent, selectors: [["app-profile-bookmarks"]], inputs: { user: "user", self: "self", currentUser: "currentUser" }, standalone: false, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "post", "showFooter"]], template: function ProfileBookmarksComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ProfileBookmarksComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.bookmarks);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.PostComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileBookmarksComponent, [{
        type: Component,
        args: [{ selector: 'app-profile-bookmarks', standalone: false, template: "<ng-container>\n  <ng-container *ngFor=\"let item of bookmarks;\">\n    <ng-container *ngIf=\"item.post;\">\n      <app-post [post]=\"item.post\" [showFooter]=\"false\"></app-post>\n    </ng-container>\n  </ng-container>\n</ng-container>\n" }]
    }], () => [{ type: i1.UserService }, { type: i2.ActivatedRoute }, { type: i2.Router }], { user: [{
            type: Input
        }], self: [{
            type: Input
        }], currentUser: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfileBookmarksComponent, { className: "ProfileBookmarksComponent", filePath: "src/app/profiles/profile-bookmarks/profile-bookmarks.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=profile-bookmarks.component.js.map