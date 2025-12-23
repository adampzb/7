import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
const _c0 = a0 => ({ "end-container": a0 });
function ConfirmationDialogComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "p", 9);
    i0.ɵɵelementStart(2, "mat-icon", 10);
    i0.ɵɵlistener("click", function ConfirmationDialogComponent_ng_container_1_div_1_Template_mat_icon_click_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.closeDialog(false)); });
    i0.ɵɵtext(3, "close");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHtml", ctx_r2.data.title, i0.ɵɵsanitizeHtml);
} }
function ConfirmationDialogComponent_ng_container_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function ConfirmationDialogComponent_ng_container_1_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.closeDialog(false)); });
    i0.ɵɵtext(1, "Cancel");
    i0.ɵɵelementEnd();
} }
function ConfirmationDialogComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ConfirmationDialogComponent_ng_container_1_div_1_Template, 4, 1, "div", 2);
    i0.ɵɵelementStart(2, "section", 3)(3, "div", 4)(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 5);
    i0.ɵɵtemplate(7, ConfirmationDialogComponent_ng_container_1_button_7_Template, 2, 0, "button", 6);
    i0.ɵɵelementStart(8, "button", 7);
    i0.ɵɵlistener("click", function ConfirmationDialogComponent_ng_container_1_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeDialog(true)); });
    i0.ɵɵtext(9, "Confirm");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.data.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.data.message, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, !ctx_r2.showCancel));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showCancel);
} }
function ConfirmationDialogComponent_ng_template_2_Template(rf, ctx) { }
export class ConfirmationDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.showCancel = this.data.showCancel ? this.data.showCancel : true;
    }
    closeDialog(isConfirmed) {
        this.dialogRef.close(isConfirmed);
    }
    static { this.ɵfac = function ConfirmationDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ConfirmationDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], standalone: false, decls: 4, vars: 2, consts: [["noData", ""], [4, "ngIf", "ngIfElse"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "20px"], ["mat-dialog-content", "", 2, "line-height", "24px"], ["mat-dialog-actions", "", "fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "12px", 3, "ngClass"], ["mat-stroked-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "warn", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "font-sm", "font-bold", "margin-0", 3, "innerHtml"], [2, "cursor", "pointer", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, ConfirmationDialogComponent_ng_container_1_Template, 10, 6, "ng-container", 1)(2, ConfirmationDialogComponent_ng_template_2_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const noData_r5 = i0.ɵɵreference(3);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.data)("ngIfElse", noData_r5);
        } }, dependencies: [i2.NgClass, i2.NgIf, i3.MatButton, i1.MatDialogActions, i1.MatDialogContent, i4.MatIcon], styles: [".cdk-global-scrollblock {\n  position: static;\n}\n\n.end-container[_ngcontent-%COMP%] {\n  justify-content: flex-end!important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmationDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-confirmation-dialog', standalone: false, template: "<div>\n  <ng-container *ngIf=\"data; else noData\">\n    <div fxLayout=\"row\" *ngIf=\"data.title\" fxLayoutAlign=\"space-between center\">\n      <p class=\"font-sm font-bold margin-0\" [innerHtml]=\"data.title\"></p>\n      <mat-icon (click)=\"closeDialog(false)\" style=\"cursor: pointer;\">close</mat-icon>\n    </div>\n\n    <section fxLayout=\"column\" fxLayoutGap=\"20px\">\n      <div mat-dialog-content style=\"line-height:24px;\">\n        <h3>\n          {{ data.message }}\n        </h3>\n      </div>\n\n      <div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngClass]=\"{'end-container': !showCancel }\" fxLayoutGap=\"12px\">\n        <button mat-stroked-button color=\"warn\" *ngIf=\"showCancel\" (click)=\"closeDialog(false)\">Cancel</button>\n        <button mat-flat-button color=\"warn\" (click)=\"closeDialog(true)\">Confirm</button>\n      </div>\n    </section>\n  </ng-container>\n\n  <ng-template #noData>\n  </ng-template>\n</div>\n", styles: ["::ng-deep .cdk-global-scrollblock {\n  position: static;\n}\n\n.end-container {\n  justify-content: flex-end!important;\n}\n"] }]
    }], () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ConfirmationDialogComponent, { className: "ConfirmationDialogComponent", filePath: "src/app/components/confirmation-dialog/confirmation-dialog.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=confirmation-dialog.component.js.map