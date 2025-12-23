import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@discussit/core/services/report/report.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/button-toggle";
function ReportDialogComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-button-toggle", 7);
    i0.ɵɵlistener("change", function ReportDialogComponent_ng_container_3_Template_mat_button_toggle_change_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.radioSelectEvent($event)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", type_r3)("disableRipple", true);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(type_r3.title);
} }
function ReportDialogComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedType.info);
} }
export class ReportDialogComponent {
    constructor(dialogRef, data, reportService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.reportService = reportService;
        this.validateUrlRegex = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
        this.reportInfoControl = new FormControl();
        this.urlControl = new FormControl('', {
            validators: [Validators.required, Validators.pattern(this.validateUrlRegex)]
        });
        this.typeControl = new FormControl();
        this.types = [];
    }
    ngOnInit() {
        // this.isLoading = true;
        // this.slug = this.data.slug ? this.data.slug : null;
        // this.source = this.data.source;
        // if (!this.source || !this.sources.includes(this.source)) {
        //   throw new Error('A valid source is required');
        // }
        // this.reporter = this.data.user?.id;
        this.getReportTypes();
        // if (this.data.url) {
        //   this.urlControl.setValue(this.data.url);
        // } else {
        //   this.urlControl.setValue(window.location.href);
        // }
        // this.readOnlyUrl = this.urlControl.value ? true : false ;
    }
    getReportTypes() {
        this.reportService.getReportTypes().subscribe((response) => {
            this.types = response;
        });
    }
    radioSelectEvent(event) {
        console.log(event);
        this.selectedType = event.value;
    }
    create() {
        this.dialogRef.close(this.selectedType);
    }
    closeDialog() {
        this.dialogRef.close();
    }
    static { this.ɵfac = function ReportDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReportDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i2.ReportService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReportDialogComponent, selectors: [["app-report-dialog"]], standalone: false, decls: 11, vars: 2, consts: [[2, "margin-top", "0"], ["name", "reportType", "aria-label", "Report Type", 1, "report-section"], [4, "ngFor", "ngForOf"], ["class", "report-subtext", 4, "ngIf"], [1, "flex-buttons"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "click"], [1, "report-toggle-button", 3, "change", "value", "disableRipple"], [1, "report-subtext"]], template: function ReportDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h3", 0);
            i0.ɵɵtext(1, "Submit a report");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-button-toggle-group", 1);
            i0.ɵɵtemplate(3, ReportDialogComponent_ng_container_3_Template, 3, 3, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div");
            i0.ɵɵtemplate(5, ReportDialogComponent_p_5_Template, 2, 1, "p", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4)(7, "button", 5);
            i0.ɵɵlistener("click", function ReportDialogComponent_Template_button_click_7_listener() { return ctx.closeDialog(); });
            i0.ɵɵtext(8, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 6);
            i0.ɵɵlistener("click", function ReportDialogComponent_Template_button_click_9_listener() { return ctx.create(); });
            i0.ɵɵtext(10, "Submit");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.types);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.selectedType);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.MatButton, i5.MatButtonToggleGroup, i5.MatButtonToggle], styles: [".report-subtext[_ngcontent-%COMP%] {\n  color: #707070;\n  font-size: 12px;\n}\n\n.report-section[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    border: none;\n}\n\n.report-toggle-button[_ngcontent-%COMP%], .report-toggle-button[_ngcontent-%COMP%]:hover, \n.report-toggle-button[_ngcontent-%COMP%]:focus {\n  border: none;\n  border-radius: 30px;\n  font-size: 14px;\n\n  &:active {\n    background-color: #f14a25;\n    color: white;\n  }\n}\n\n.mat-button-toggle-group-appearance-standard\n.mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  background: #f15a24;\n  color: white;\n}\n\n.mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  opacity: 1!important;\n}\n\n.mat-button-toggle-checked[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  border-bottom: none!important;\n}\n\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%] {\n  line-height: 36px!important;\n}\n\n.flex-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-top: 16px;\n  justify-content: flex-end;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-report-dialog', standalone: false, template: "<h3 style=\"margin-top:0\">Submit a report</h3>\n\n<mat-button-toggle-group name=\"reportType\" aria-label=\"Report Type\" class=\"report-section\">\n    <ng-container *ngFor=\"let type of types\">\n      <mat-button-toggle [value]=\"type\" class=\"report-toggle-button\" [disableRipple]=\"true\" (change)=\"radioSelectEvent($event)\" >{{ type.title }}</mat-button-toggle>\n    </ng-container>\n</mat-button-toggle-group>\n\n<div>\n  <p *ngIf=\"selectedType\" class=\"report-subtext\">{{ selectedType.info }}</p>\n</div>\n\n<div class=\"flex-buttons\">\n  <button mat-stroked-button color=\"warn\" (click)=\"closeDialog()\">Cancel</button>\n  <button mat-flat-button color=\"warn\" (click)=\"create()\">Submit</button>\n</div>\n", styles: [".report-subtext {\n  color: #707070;\n  font-size: 12px;\n}\n\n.report-section {\n    display: flex;\n    flex-wrap: wrap;\n    border: none;\n}\n\n.report-toggle-button, .report-toggle-button:hover,\n.report-toggle-button:focus {\n  border: none;\n  border-radius: 30px;\n  font-size: 14px;\n\n  &:active {\n    background-color: #f14a25;\n    color: white;\n  }\n}\n\n.mat-button-toggle-group-appearance-standard\n.mat-button-toggle+.mat-button-toggle {\n  border: none;\n}\n\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n  background: #f15a24;\n  color: white;\n}\n\n.mat-button-toggle-focus-overlay {\n  opacity: 1!important;\n}\n\n.mat-button-toggle-checked .mat-button-toggle-focus-overlay {\n  border-bottom: none!important;\n}\n\n.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 36px!important;\n}\n\n.flex-buttons {\n  display: flex;\n  gap: 16px;\n  margin-top: 16px;\n  justify-content: flex-end;\n}\n"] }]
    }], () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i2.ReportService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReportDialogComponent, { className: "ReportDialogComponent", filePath: "src/app/components/report-dialog/report-dialog.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=report-dialog.component.js.map