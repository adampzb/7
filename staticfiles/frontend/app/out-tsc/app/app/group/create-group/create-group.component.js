import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/router";
import * as i3 from "@discussit/core/services/group/group.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/input";
import * as i9 from "@angular/cdk/text-field";
import * as i10 from "@angular/material/radio";
function CreateGroupComponent_mat_hint_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const title_r2 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Title will appear as g/", title_r2.value);
} }
function CreateGroupComponent_mat_radio_group_18_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-radio-button", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", type_r3.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", type_r3.title, " ");
} }
function CreateGroupComponent_mat_radio_group_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-group", 16);
    i0.ɵɵtemplate(1, CreateGroupComponent_mat_radio_group_18_ng_container_1_Template, 3, 2, "ng-container", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.types);
} }
function CreateGroupComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", type_r5.title, ": ", type_r5.info);
} }
export class CreateGroupComponent {
    constructor(dialogRef, data, router, groupService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.groupService = groupService;
        this.new = true;
        this.types = [
            {
                title: 'Public',
                value: 'PUBLIC',
                info: 'Anyone can view, post, and comment to this community.'
            },
            {
                title: 'Restricted',
                value: 'RESTRICTED',
                info: 'Anyone can view this community, but only approved users can post.'
            },
            {
                title: 'Private',
                value: 'Private',
                info: 'Only approved users can view and submit to this community.'
            }
        ];
    }
    ngOnInit() {
        console.log(this.data);
        this.user = this.data.user;
        this.initialize();
    }
    initialize() {
        this.groupForm = new FormGroup({
            title: new FormControl('', {
                validators: [Validators.required]
            }),
            description: new FormControl('', {
                validators: [Validators.required]
            }),
            type: new FormControl(this.types[0].value, {
                validators: [Validators.required]
            })
        });
        this.groupForm.valueChanges
            .pipe(debounceTime(1000), distinctUntilChanged())
            .subscribe((response) => {
            console.log(response);
        });
    }
    close() {
        this.dialogRef.close();
    }
    submit() {
        const groupData = {
            name: this.groupForm.controls.title.value,
            description: this.groupForm.controls.description.value,
            group_type: this.groupForm.controls.type.value.toUpperCase()
        };
        this.groupService.createGroup(groupData).subscribe((response) => {
            console.log(response);
            this.close();
            this.router.navigate(['group', response.id]);
        }, (err) => {
            console.log(err);
        });
    }
    static { this.ɵfac = function CreateGroupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CreateGroupComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.GroupService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CreateGroupComponent, selectors: [["app-create-group"]], standalone: false, decls: 26, vars: 6, consts: [["title", ""], [1, "create-group"], [1, "group-form", 3, "formGroup"], [1, "font-bold"], ["appearance", "outline", 1, "width-100"], ["matInput", "", "maxlength", "25", "formControlName", "title", "placeholder", "Title"], ["align", "end"], ["align", "start", 4, "ngIf"], ["matInput", "", "formControlName", "description", "placeholder", "Tell everyone what this group is about", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "2", 1, "font-sm"], ["id", "example-radio-group-label"], ["aria-labelledby", "example-radio-group-label", "class", "example-radio-group", "color", "warn", "formControlName", "type", 4, "ngIf"], ["class", "sub-text", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "24px"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click", "disabled"], ["align", "start"], ["aria-labelledby", "example-radio-group-label", "color", "warn", "formControlName", "type", 1, "example-radio-group"], [4, "ngFor", "ngForOf"], [1, "example-radio-button", 3, "value"], [1, "sub-text"]], template: function CreateGroupComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "form", 2)(2, "p", 3);
            i0.ɵɵtext(3, "Create a community");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-form-field", 4)(5, "mat-label");
            i0.ɵɵtext(6, "Title");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "input", 5, 0);
            i0.ɵɵelementStart(9, "mat-hint", 6);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, CreateGroupComponent_mat_hint_11_Template, 2, 1, "mat-hint", 7);
            i0.ɵɵelement(12, "br");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "mat-form-field", 4)(14, "textarea", 8);
            i0.ɵɵtext(15, "      ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "label", 9);
            i0.ɵɵtext(17, "Select your group type");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(18, CreateGroupComponent_mat_radio_group_18_Template, 2, 1, "mat-radio-group", 10);
            i0.ɵɵelementStart(19, "ul");
            i0.ɵɵtemplate(20, CreateGroupComponent_li_20_Template, 2, 2, "li", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 12)(22, "button", 13);
            i0.ɵɵlistener("click", function CreateGroupComponent_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.close()); });
            i0.ɵɵtext(23, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 14);
            i0.ɵɵlistener("click", function CreateGroupComponent_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submit()); });
            i0.ɵɵtext(25, "Create");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            const title_r2 = i0.ɵɵreference(8);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.groupForm);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1("", title_r2.value.length, " / 25");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", title_r2.value);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.types.length);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.types);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", !ctx.groupForm.valid);
        } }, dependencies: [i4.NgForOf, i4.NgIf, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.MaxLengthValidator, i5.FormGroupDirective, i5.FormControlName, i6.MatButton, i7.MatFormField, i7.MatLabel, i7.MatHint, i8.MatInput, i9.CdkTextareaAutosize, i10.MatRadioGroup, i10.MatRadioButton], styles: [".create-group-section[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  background: white;\n  padding: 16px;\n  width: auto;\n}\n\n.example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.sub-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #707070;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateGroupComponent, [{
        type: Component,
        args: [{ selector: 'app-create-group', standalone: false, template: "<div class=\"create-group\">\n  <form [formGroup]=\"groupForm\" class=\"group-form\">\n    <p class=\"font-bold\">Create a community</p>\n\n    <mat-form-field appearance=\"outline\" class=\"width-100\">\n      <mat-label>Title</mat-label>\n      <input matInput #title maxlength=\"25\" formControlName=\"title\" placeholder=\"Title\">\n      <mat-hint align=\"end\">{{ title.value.length}} / 25</mat-hint>\n      <mat-hint align=\"start\" *ngIf=\"title.value\">Title will appear as g/{{ title.value }}</mat-hint>\n      <br>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" class=\"width-100\">\n      <textarea matInput formControlName=\"description\" placeholder=\"Tell everyone what this group is about\" cdkTextareaAutosize cdkAutosizeMinRows=\"2\" class=\"font-sm\">\n      </textarea>\n    </mat-form-field>\n\n    <label id=\"example-radio-group-label\">Select your group type</label>\n    <mat-radio-group *ngIf=\"types.length\"\n      aria-labelledby=\"example-radio-group-label\"\n      class=\"example-radio-group\" color=\"warn\" formControlName=\"type\">\n\n      <ng-container *ngFor=\"let type of types\">\n        <mat-radio-button class=\"example-radio-button\" [value]=\"type.value\">\n          {{ type.title }}\n        </mat-radio-button>\n      </ng-container>\n    </mat-radio-group>\n\n    <ul>\n      <li class=\"sub-text\" *ngFor=\"let type of types\">{{ type.title}}: {{ type.info }}</li>\n    </ul>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"24px\">\n      <button mat-raised-button (click)=\"close()\">Cancel</button>\n      <button mat-raised-button [disabled]=\"!groupForm.valid\" color=\"warn\" (click)=\"submit()\">Create</button>\n    </div>\n\n\n  </form>\n</div>\n", styles: [".create-group-section {\n  margin: 8px 0;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  background: white;\n  padding: 16px;\n  width: auto;\n}\n\n.example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n\n.sub-text {\n  font-size: 12px;\n  color: #707070;\n}\n"] }]
    }], () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i2.Router }, { type: i3.GroupService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CreateGroupComponent, { className: "CreateGroupComponent", filePath: "src/app/group/create-group/create-group.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=create-group.component.js.map