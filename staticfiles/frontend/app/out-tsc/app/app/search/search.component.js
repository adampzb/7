import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/post/post.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/progress-spinner";
import * as i6 from "../post/post/post.component";
function SearchComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-post", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("post", post_r1)("showFooter", false);
} }
function SearchComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SearchComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.posts);
} }
function SearchComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelement(2, "mat-spinner", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("diameter", 30);
} }
function SearchComponent_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "button", 9);
    i0.ɵɵlistener("click", function SearchComponent_ng_container_2_ng_template_2_div_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.loadMorePosts()); });
    i0.ɵɵtext(2, "Load more posts");
    i0.ɵɵelementEnd()();
} }
function SearchComponent_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SearchComponent_ng_container_2_ng_template_2_div_0_Template, 3, 0, "div", 8);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.showLoader && ctx_r1.next);
} }
function SearchComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SearchComponent_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 5)(2, SearchComponent_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const buttonview_r4 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showLoader)("ngIfElse", buttonview_r4);
} }
export class SearchComponent {
    constructor(postService, route, router) {
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.posts = [];
        this.query = '';
        this.page = 1;
        this.isLoading = false;
        this.showLoader = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.query = params.query;
        });
        this.fetchPosts();
    }
    fetchPosts() {
        this.postService.filterPosts(this.page, this.query, '', '', '').subscribe((response) => {
            this.posts = [...this.posts, ...response.results];
            this.next = response.next;
            if (this.next) {
                const page_params = this.next.split('&')[2];
                this.page = parseInt(page_params.split('=')[1]);
                console.log(this.page);
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
        this.fetchPosts();
    }
    static { this.ɵfac = function SearchComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SearchComponent)(i0.ɵɵdirectiveInject(i1.PostService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchComponent, selectors: [["app-search"]], standalone: false, decls: 3, vars: 2, consts: [["buttonview", ""], [1, "width-100"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "post", "showFooter"], [4, "ngIf", "ngIfElse"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 2, "height", "100px"], ["color", "warn", 3, "diameter"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", "style", "height: 100px", 4, "ngIf"], ["mat-raised-button", "", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵtemplate(1, SearchComponent_ng_container_1_Template, 2, 1, "ng-container", 2)(2, SearchComponent_ng_container_2_Template, 4, 2, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.posts);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.next);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.MatButton, i5.MatProgressSpinner, i6.PostComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchComponent, [{
        type: Component,
        args: [{ standalone: false, selector: 'app-search', template: "<div class=\"width-100\">\n  <ng-container *ngIf=\"posts\">\n    <ng-container *ngFor=\"let post of posts\">\n      <app-post [post]=\"post\" [showFooter]=\"false\"></app-post>\n    </ng-container>\n  </ng-container>\n\n  <ng-container *ngIf=\"next\">\n    <ng-container *ngIf=\"showLoader; else buttonview\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" style=\"height: 100px\">\n        <mat-spinner color=\"warn\" [diameter]=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n\n    <ng-template #buttonview>\n      <div *ngIf=\"!showLoader && next\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" style=\"height: 100px\">\n        <button mat-raised-button (click)=\"loadMorePosts()\">Load more posts</button>\n      </div>\n    </ng-template>\n  </ng-container>\n</div>\n" }]
    }], () => [{ type: i1.PostService }, { type: i2.ActivatedRoute }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SearchComponent, { className: "SearchComponent", filePath: "src/app/search/search.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=search.component.js.map