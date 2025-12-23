import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/group/group.service";
import * as i2 from "@discussit/core/services/user/user.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "../../post/post/post.component";
import * as i7 from "../../post/post-loader/post-loader.component";
function GroupFeedComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-post-loader")(2, "app-post-loader")(3, "app-post-loader")(4, "app-post-loader");
    i0.ɵɵelementContainerEnd();
} }
function GroupFeedComponent_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-post", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("post", post_r2)("user_id", ctx_r2.user == null ? null : ctx_r2.user.id);
} }
function GroupFeedComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, GroupFeedComponent_ng_template_5_ng_container_0_Template, 2, 2, "ng-container", 6);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r2.groupPosts);
} }
export class GroupFeedComponent {
    constructor(groupService, userService, router, route) {
        this.groupService = groupService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.groupPosts = [];
        this.isLoading = true;
    }
    ngOnInit() {
        this.getAuthUser();
    }
    ngOnChanges(changes) {
        if (this.group) {
            this.getFeed();
        }
    }
    getAuthUser() {
        this.userService.userInitialized.subscribe((initialized) => {
            if (initialized) {
                this.userService.user.subscribe((user) => {
                    this.user = user;
                });
            }
        });
    }
    getFeed() {
        this.groupService.getGroupPosts(this.group.id).subscribe((response) => {
            this.groupPosts = response;
            console.log(this.groupPosts);
            this.isLoading = false;
        }, (err) => {
            console.log(err);
            this.isLoading = false;
        });
    }
    redirect() {
        this.router.navigate(['submit-post'], { relativeTo: this.route });
    }
    static { this.ɵfac = function GroupFeedComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GroupFeedComponent)(i0.ɵɵdirectiveInject(i1.GroupService), i0.ɵɵdirectiveInject(i2.UserService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupFeedComponent, selectors: [["app-group-feed"]], inputs: { group: "group" }, standalone: false, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 2, consts: [["showPosts", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px"], ["fxFlex", "60px", 1, "user-avatar"], ["src", "https://cdn-icons-png.flaticon.com/512/3177/3177440.png", "height", "60", "width", "60"], ["matInput", "", "placeholder", "Create post", "rows", "2", "cols", "80", 1, "create-post-input", 3, "click"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "post", "user_id"]], template: function GroupFeedComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
            i0.ɵɵelement(2, "img", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "textarea", 4);
            i0.ɵɵlistener("click", function GroupFeedComponent_Template_textarea_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.redirect()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, GroupFeedComponent_ng_container_4_Template, 5, 0, "ng-container", 5)(5, GroupFeedComponent_ng_template_5_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const showPosts_r4 = i0.ɵɵreference(6);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.isLoading)("ngIfElse", showPosts_r4);
        } }, dependencies: [i4.NgForOf, i4.NgIf, i5.MatInput, i6.PostComponent, i7.PostLoaderComponent], styles: [".create-post-input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: inherit;\n  outline: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: block;\n  padding: 32px 16px;\n  width: -webkit-fill-available;\n  margin: 16px 0;\n  resize: none;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupFeedComponent, [{
        type: Component,
        args: [{ selector: 'app-group-feed', standalone: false, template: "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\">\n  <div class=\"user-avatar\" fxFlex=\"60px\">\n    <img src=\"https://cdn-icons-png.flaticon.com/512/3177/3177440.png\" height=\"60\" width=\"60\">\n  </div>\n  <textarea matInput placeholder=\"Create post\" (click)=\"redirect()\" class=\"create-post-input\" rows=\"2\" cols=\"80\"></textarea>\n</div>\n\n<ng-container *ngIf=\"isLoading; else showPosts\">\n  <app-post-loader></app-post-loader>\n  <app-post-loader></app-post-loader>\n  <app-post-loader></app-post-loader>\n  <app-post-loader></app-post-loader>\n</ng-container>\n\n<ng-template #showPosts>\n  <ng-container *ngFor=\"let post of groupPosts\">\n    <app-post [post]=\"post\" [user_id]=\"user?.id\"></app-post>\n  </ng-container>\n</ng-template>\n", styles: ["\n.create-post-input {\n  font-size: 16px;\n  font-family: inherit;\n  outline: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: block;\n  padding: 32px 16px;\n  width: -webkit-fill-available;\n  margin: 16px 0;\n  resize: none;\n}\n"] }]
    }], () => [{ type: i1.GroupService }, { type: i2.UserService }, { type: i3.Router }, { type: i3.ActivatedRoute }], { group: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GroupFeedComponent, { className: "GroupFeedComponent", filePath: "src/app/group/group-feed/group-feed.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=group-feed.component.js.map