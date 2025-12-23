import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/card";
function PostLoaderComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " Loading... ");
    i0.ɵɵelementContainerEnd();
} }
function PostLoaderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    i0.ɵɵelement(3, "div", 6)(4, "span", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "mat-card-title");
    i0.ɵɵelement(6, "span", 8)(7, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-card-content");
    i0.ɵɵelement(9, "span", 9)(10, "span", 9)(11, "span", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 10);
    i0.ɵɵelement(13, "div", 11)(14, "div", 11)(15, "div", 11)(16, "div", 11);
    i0.ɵɵelementEnd()();
} }
export class PostLoaderComponent {
    constructor() {
        this.detail = false;
    }
    ngOnInit() {
    }
    static { this.ɵfac = function PostLoaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PostLoaderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PostLoaderComponent, selectors: [["app-post-loader"]], inputs: { detail: "detail" }, standalone: false, decls: 4, vars: 2, consts: [["listTemplate", ""], [1, "post-card"], [4, "ngIf", "ngIfElse"], [1, "card-content"], [1, "card-meta"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "user-avatar", "pulse"], [1, "group-text", "pulse"], [1, "post-title", "pulse"], [1, "post-content", "pulse"], ["fxLayout", "row", "fxLayoutGap", "20px", "fxLayoutAlign", "start center", 1, "card-actions"], [1, "mat-icon", "pulse"]], template: function PostLoaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-card", 1);
            i0.ɵɵtemplate(1, PostLoaderComponent_ng_container_1_Template, 2, 0, "ng-container", 2)(2, PostLoaderComponent_ng_template_2_Template, 17, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const listTemplate_r1 = i0.ɵɵreference(3);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.detail)("ngIfElse", listTemplate_r1);
        } }, dependencies: [i1.NgIf, i2.MatCard, i2.MatCardContent, i2.MatCardTitle], styles: ["$background-image[_ngcontent-%COMP%]:   linear-gradient(\n  90deg,\n  rgba(255, 255, 255, 0),\n  rgba(255, 255, 255, 0.5),\n  rgba(255, 255, 255, 0)\n)[_ngcontent-%COMP%];\n\n%loader[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: rgb(239, 241, 246) no-repeat;\n  border-radius: 12px;\n  width: 100%;\n  display: inline-block;\n  margin-bottom: 6px;\n\n  &:after,\n  &:before {\n    box-sizing: border-box;\n  }\n\n  &.progress {\n    animation: progress 2s ease-in-out infinite;\n    background-size: 200px 100%;\n    background-image: $background-image;\n  }\n\n  &.pulse {\n    animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n    animation-delay: 0.5s;\n    background-image: $background-image;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n.post-card[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  padding: 0;\n  width: inherit;\n  margin: 16px 0;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-left: 0;\n  margin-left: 64px;\n  width: 100%;\n}\n\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n  margin-bottom: 12px;\n  font-size: 0.7rem;\n\n  .user-avatar {\n    @extend %loader;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 8px\n  }\n\n  .group-text {\n    @extend %loader;\n    width: 250px;\n    height: 14px;\n  }\n}\n\n.post-title[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 100%;\n  @extend %loader;\n\n  &:last-child {\n    width: 70%;\n  }\n}\n\n.post-content[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 100%;\n  @extend %loader;\n\n  &:nth-child(2n) {\n    width: 70%;\n  }\n}\n\n.sub-text[_ngcontent-%COMP%] {\n  @extend %loader;\n  width: 70px;\n  height: 12px;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  @extend %loader;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n\n  &:last-child {\n    margin-left: auto;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostLoaderComponent, [{
        type: Component,
        args: [{ selector: 'app-post-loader', standalone: false, template: "<mat-card class=\"post-card\">\n  <ng-container *ngIf=\"detail; else listTemplate\">\n    Loading...\n  </ng-container>\n\n  <ng-template #listTemplate>\n    <div class=\"card-content\">\n      <div class=\"card-meta\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"user-avatar pulse\"></div>\n          <span class=\"group-text pulse\"></span>\n        </div>\n      </div>\n\n      <mat-card-title>\n        <span class=\"post-title pulse\"></span>\n        <span class=\"post-title pulse\"></span>\n      </mat-card-title>\n\n      <mat-card-content>\n        <span class=\"post-content pulse\"></span>\n        <span class=\"post-content pulse\"></span>\n        <span class=\"post-content pulse\"></span>\n      </mat-card-content>\n\n      <div class=\"card-actions\" fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start center\">\n        <div class=\"mat-icon pulse\"></div>\n        <div class=\"mat-icon pulse\"></div>\n        <div class=\"mat-icon pulse\"></div>\n        <div class=\"mat-icon pulse\"></div>\n      </div>\n    </div>\n  </ng-template>\n</mat-card>\n", styles: ["$background-image: linear-gradient(\n  90deg,\n  rgba(255, 255, 255, 0),\n  rgba(255, 255, 255, 0.5),\n  rgba(255, 255, 255, 0)\n);\n\n%loader {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: rgb(239, 241, 246) no-repeat;\n  border-radius: 12px;\n  width: 100%;\n  display: inline-block;\n  margin-bottom: 6px;\n\n  &:after,\n  &:before {\n    box-sizing: border-box;\n  }\n\n  &.progress {\n    animation: progress 2s ease-in-out infinite;\n    background-size: 200px 100%;\n    background-image: $background-image;\n  }\n\n  &.pulse {\n    animation: pulse 1.5s ease-in-out infinite;\n    animation-delay: 0.5s;\n    background-image: $background-image;\n  }\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n.post-card {\n  box-shadow: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  padding: 0;\n  width: inherit;\n  margin: 16px 0;\n}\n\n.card-content {\n  padding: 20px;\n  padding-left: 0;\n  margin-left: 64px;\n  width: 100%;\n}\n\n.card-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n  margin-bottom: 12px;\n  font-size: 0.7rem;\n\n  .user-avatar {\n    @extend %loader;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 8px\n  }\n\n  .group-text {\n    @extend %loader;\n    width: 250px;\n    height: 14px;\n  }\n}\n\n.post-title {\n  height: 16px;\n  width: 100%;\n  @extend %loader;\n\n  &:last-child {\n    width: 70%;\n  }\n}\n\n.post-content {\n  height: 14px;\n  width: 100%;\n  @extend %loader;\n\n  &:nth-child(2n) {\n    width: 70%;\n  }\n}\n\n.sub-text {\n  @extend %loader;\n  width: 70px;\n  height: 12px;\n}\n\n.mat-icon {\n  @extend %loader;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n\n  &:last-child {\n    margin-left: auto;\n  }\n}\n"] }]
    }], () => [], { detail: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PostLoaderComponent, { className: "PostLoaderComponent", filePath: "src/app/post/post-loader/post-loader.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=post-loader.component.js.map