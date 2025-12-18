import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@discussit/core/services/user/user.service";
import * as i3 from "@discussit/core/services/group/group.service";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/card";
import * as i8 from "@angular/material/icon";
const _c0 = a0 => ["../group", a0];
function GroupSearchComponent_div_0_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-icon", 13);
    i0.ɵɵtext(2, "people");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const group_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", group_r1.group_type, " ");
} }
function GroupSearchComponent_div_0_ng_container_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 13);
    i0.ɵɵtext(1, "lock");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", group_r1.group_type, " ");
} }
function GroupSearchComponent_div_0_ng_container_2_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 14);
    i0.ɵɵtext(2, "Join group");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const group_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c0, group_r1.id));
} }
function GroupSearchComponent_div_0_ng_container_2_ng_template_14_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 14);
    i0.ɵɵtext(2, "Leave group");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const group_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c0, group_r1.id));
} }
function GroupSearchComponent_div_0_ng_container_2_ng_template_14_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 15);
    i0.ɵɵtext(1, "Cancel pending request");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c0, group_r1.id));
} }
function GroupSearchComponent_div_0_ng_container_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, GroupSearchComponent_div_0_ng_container_2_ng_template_14_ng_container_0_Template, 3, 3, "ng-container", 10)(1, GroupSearchComponent_div_0_ng_container_2_ng_template_14_ng_template_1_Template, 2, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const cancelRequest_r2 = i0.ɵɵreference(2);
    const group_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngIf", group_r1.member_status && group_r1.member_status.is_approved)("ngIfElse", cancelRequest_r2);
} }
function GroupSearchComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-card", 7)(2, "a", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 9);
    i0.ɵɵtemplate(7, GroupSearchComponent_div_0_ng_container_2_ng_container_7_Template, 5, 1, "ng-container", 10)(8, GroupSearchComponent_div_0_ng_container_2_ng_template_8_Template, 4, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(10, "span", 11);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 12);
    i0.ɵɵtemplate(13, GroupSearchComponent_div_0_ng_container_2_ng_container_13_Template, 3, 3, "ng-container", 10)(14, GroupSearchComponent_div_0_ng_container_2_ng_template_14_Template, 3, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const otherGroupType_r3 = i0.ɵɵreference(9);
    const showMemberActions_r4 = i0.ɵɵreference(15);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c0, group_r1.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" g/", group_r1.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", group_r1.description, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", group_r1.group_type == "PUBLIC")("ngIfElse", otherGroupType_r3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", group_r1.members, " Member(s)");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !group_r1.member_status)("ngIfElse", showMemberActions_r4);
} }
function GroupSearchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5);
    i0.ɵɵtemplate(2, GroupSearchComponent_div_0_ng_container_2_Template, 16, 10, "ng-container", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.groups);
} }
export class GroupSearchComponent {
    constructor(router, route, userService, groupService, dialog) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.groupService = groupService;
        this.dialog = dialog;
        this.groups = [];
    }
    ngOnInit() {
        this.getGroups();
        this.getAuthUser();
    }
    getGroups() {
        this.groupService.getGroups().subscribe((response) => {
            this.groups = response;
        });
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
    }
    joinGroup(group_id) {
        this.router.navigate(['groups', group_id]);
    }
    cancel(group_id) {
        this.router.navigate(['groups', group_id]);
    }
    leaveGroup(group_id) {
        this.router.navigate(['groups', group_id]);
    }
    static { this.ɵfac = function GroupSearchComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GroupSearchComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.UserService), i0.ɵɵdirectiveInject(i3.GroupService), i0.ɵɵdirectiveInject(i4.MatDialog)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupSearchComponent, selectors: [["app-group-search"]], standalone: false, decls: 1, vars: 1, consts: [["otherGroupType", ""], ["showMemberActions", ""], ["cancelRequest", ""], ["fxLayout", "column", "fxLayoutAlign", "start center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center"], [1, "group-grid"], [4, "ngFor", "ngForOf"], [1, "group-item"], [1, "font-bold", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px", 1, ""], [4, "ngIf", "ngIfElse"], [1, "subtext"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "margin-top-5"], [1, "color-tertiary"], ["mat-flat-button", "", "color", "primary", "fxFlex", "50", 3, "routerLink"], ["mat-flat-button", "", "color", "primary", "fxFlex", "60", 3, "routerLink"]], template: function GroupSearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GroupSearchComponent_div_0_Template, 3, 1, "div", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.groups);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.MatButton, i7.MatCard, i8.MatIcon, i1.RouterLink], styles: [".group-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n}\n\n.group-item[_ngcontent-%COMP%] {\n  // max-width: 700px;\n  // width: 100%;\n  max-width: 300px;\n  width: 100%;\n  min-height: 100px;\n  box-shadow: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  // margin: 16px 0;\n  .subtext {\n    font-size: 0.75rem;\n    color: #707070;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupSearchComponent, [{
        type: Component,
        args: [{ selector: 'app-group-search', standalone: false, template: "<div fxLayout=\"column\" fxLayoutAlign=\"start center\" *ngIf=\"groups\">\n  <div class=\"group-grid\">\n    <ng-container *ngFor=\"let group of groups\">\n      <mat-card class=\"group-item\">\n        <a class=\"font-bold\" [routerLink]=\"[ '../group', group.id ]\">\n          g/{{ group.name }}\n        </a>\n        <p>\n          {{ group.description }}\n        </p>\n        <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\">\n          <ng-container *ngIf=\"group.group_type == 'PUBLIC'; else otherGroupType\">\n            <mat-icon class=\"color-tertiary\">people</mat-icon>\n            <span class=\"subtext\">\n              {{ group.group_type }}\n            </span>\n          </ng-container>\n          <ng-template #otherGroupType>\n            <mat-icon class=\"color-tertiary\">lock</mat-icon>\n            <span class=\"subtext\">\n              {{ group.group_type }}\n            </span>\n          </ng-template>\n\n          <span class=\"subtext\">{{ group.members }} Member(s)</span>\n        </div>\n\n          <div fxLayout=\"row\" class=\"margin-top-5\" fxLayoutAlign=\"center center\">\n            <ng-container *ngIf=\"!group.member_status; else showMemberActions\">\n              <a mat-flat-button color=\"primary\" fxFlex=\"50\" [routerLink]=\"[ '../group', group.id ]\">Join group</a>\n            </ng-container>\n\n            <ng-template #showMemberActions>\n              <ng-container *ngIf=\"group.member_status && group.member_status.is_approved; else cancelRequest\">\n                <a mat-flat-button color=\"primary\" fxFlex=\"50\" [routerLink]=\"[ '../group', group.id ]\">Leave group</a>\n              </ng-container>\n              <ng-template #cancelRequest>\n                <a mat-flat-button color=\"primary\" fxFlex=\"60\" [routerLink]=\"[ '../group', group.id ]\">Cancel pending request</a>\n              </ng-template>\n            </ng-template>\n          </div>\n      </mat-card>\n    </ng-container>\n  </div>\n</div>\n", styles: [".group-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n}\n\n.group-item {\n  // max-width: 700px;\n  // width: 100%;\n  max-width: 300px;\n  width: 100%;\n  min-height: 100px;\n  box-shadow: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  // margin: 16px 0;\n  .subtext {\n    font-size: 0.75rem;\n    color: #707070;\n  }\n}\n"] }]
    }], () => [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.UserService }, { type: i3.GroupService }, { type: i4.MatDialog }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GroupSearchComponent, { className: "GroupSearchComponent", filePath: "src/app/group/group-search/group-search.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=group-search.component.js.map