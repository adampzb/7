import { Component } from '@angular/core';
import { ConfirmationDialogComponent } from '@discussit/app/components/confirmation-dialog/confirmation-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@discussit/core/services/user/user.service";
import * as i3 from "@discussit/core/services/group/group.service";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/expansion";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/list";
import * as i10 from "@angular/material/tooltip";
import * as i11 from "../group-feed/group-feed.component";
import * as i12 from "@discussit/core/pipes/safe-content/safe-content.pipe";
const _c0 = a0 => ["../../../user", a0];
function GroupComponent_div_10_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 28);
    i0.ɵɵpipe(1, "safeContent");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHtml", i0.ɵɵpipeBind1(1, 1, ctx_r0.group.description), i0.ɵɵsanitizeHtml);
} }
function GroupComponent_div_10_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("g/", ctx_r0.group == null ? null : ctx_r0.group.name, " hasn't added any description yet.");
} }
function GroupComponent_div_10_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.group.members_count, " Member(s) ");
} }
function GroupComponent_div_10_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 31);
    i0.ɵɵlistener("click", function GroupComponent_div_10_ng_container_22_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.joinGroup()); });
    i0.ɵɵtext(2, "Join group");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function GroupComponent_div_10_ng_template_23_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 32);
    i0.ɵɵlistener("click", function GroupComponent_div_10_ng_template_23_ng_container_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.leaveGroup()); });
    i0.ɵɵtext(2, "Leave group");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function GroupComponent_div_10_ng_template_23_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function GroupComponent_div_10_ng_template_23_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.cancel()); });
    i0.ɵɵtext(1, "Cancel pending request");
    i0.ɵɵelementEnd();
} }
function GroupComponent_div_10_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, GroupComponent_div_10_ng_template_23_ng_container_0_Template, 3, 0, "ng-container", 26)(1, GroupComponent_div_10_ng_template_23_ng_template_1_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const cancelRequest_r5 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r0.group.member_status && ctx_r0.group.member_status.is_approved)("ngIfElse", cancelRequest_r5);
} }
function GroupComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "span", 16);
    i0.ɵɵtext(2, " About Community ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 17);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, GroupComponent_div_10_span_5_Template, 2, 3, "span", 18)(6, GroupComponent_div_10_span_6_Template, 2, 1, "span", 19);
    i0.ɵɵelementStart(7, "span", 20);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 21);
    i0.ɵɵelement(10, "mat-divider");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 22);
    i0.ɵɵtemplate(12, GroupComponent_div_10_span_12_Template, 2, 1, "span", 23);
    i0.ɵɵelementStart(13, "span", 24)(14, "mat-icon");
    i0.ɵɵtext(15, "calendar_today");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "span");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 21);
    i0.ɵɵelement(20, "mat-divider");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 25);
    i0.ɵɵtemplate(22, GroupComponent_div_10_ng_container_22_Template, 3, 0, "ng-container", 26)(23, GroupComponent_div_10_ng_template_23_Template, 3, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(25, "button", 27);
    i0.ɵɵtext(26, "Invite Users");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const showMemberActions_r6 = i0.ɵɵreference(24);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("g/", ctx_r0.group == null ? null : ctx_r0.group.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.group.description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.group.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.group.group_type, " group");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.group.members_count);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" Created ", i0.ɵɵpipeBind1(18, 8, ctx_r0.group.created_at), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r0.group.member_status)("ngIfElse", showMemberActions_r6);
} }
function GroupComponent_div_11_ng_container_5_mat_divider_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
function GroupComponent_div_11_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-expansion-panel", 37)(2, "mat-expansion-panel-header", 38)(3, "b", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "p", 40);
    i0.ɵɵpipe(6, "safeContent");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, GroupComponent_div_11_ng_container_5_mat_divider_7_Template, 1, 0, "mat-divider", 41);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const rule_r7 = ctx.$implicit;
    const last_r8 = ctx.last;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", rule_r7.title, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHtml", i0.ɵɵpipeBind1(6, 3, rule_r7.description), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !last_r8);
} }
function GroupComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 2)(2, "span", 16);
    i0.ɵɵtext(3, " Community Rules ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵtemplate(5, GroupComponent_div_11_ng_container_5_Template, 8, 5, "ng-container", 36);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.group == null ? null : ctx_r0.group.rules);
} }
function GroupComponent_div_12_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 45);
    i0.ɵɵelement(2, "img", 46);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moderator_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, moderator_r9.user.username));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" u/", moderator_r9.user.username, " ");
} }
function GroupComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "div", 43)(2, "span", 16);
    i0.ɵɵtext(3, " Moderators ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 44)(5, "mat-nav-list");
    i0.ɵɵtemplate(6, GroupComponent_div_12_ng_container_6_Template, 4, 4, "ng-container", 36);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r0.moderators.slice(0, 5));
} }
export class GroupComponent {
    constructor(router, route, userService, groupService, dialog) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.groupService = groupService;
        this.dialog = dialog;
        this.moderators = [];
    }
    ngOnInit() {
        this.group_id = this.route.snapshot.params.id;
        this.getAuthUser();
        this.getGroupDetail(this.group_id);
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
    getGroupDetail(group_id) {
        this.groupService.getGroupDetail(group_id).subscribe((response) => {
            console.log(response);
            this.group = response;
            this.getModerators();
        }, (err) => {
            console.log(err);
        });
    }
    getModerators() {
        this.groupService.filterMembers('MODERATOR', this.group.id, '').subscribe((response) => {
            this.moderators = response.results;
        });
    }
    joinGroup() {
        if (!this.user)
            return;
        const data = {
            group: this.group.id,
            user: this.user.id
        };
        this.groupService.joinGroup(this.group.id, data).subscribe((response) => {
            this.group.member_status = response;
        });
    }
    cancel() {
        if (!this.user)
            return;
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            data: {
                message: `Are you sure you want to leave the g/${this.group.name} group?`,
            },
            height: '205px',
            width: '410px'
        });
        dialogRef.afterClosed().subscribe((response) => {
            console.log(response);
            if (response) {
                const data = {
                    user: this.user.id,
                    member_request: this.group.member_status.id
                };
                this.groupService.cancelRequest(this.group.id, this.group.member_status.id).subscribe((response) => {
                    if (response.success) {
                        this.group.member_status = null;
                    }
                });
            }
        });
    }
    leaveGroup() {
        if (!this.user)
            return;
        // open confirmation dialog
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            data: {
                message: `Are you sure you want to leave the g/${this.group.name} group?`,
            },
            height: '205px',
            width: '410px'
        });
        // call leave group api
        dialogRef.afterClosed().subscribe((response) => {
            console.log(response);
            if (response) {
                const data = {
                    user: this.user.id,
                    member_request: this.group.member_status.id
                };
                this.groupService.leaveGroup(this.group.id, data).subscribe((response) => {
                    this.group.member_status = null;
                });
            }
        });
    }
    static { this.ɵfac = function GroupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GroupComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.UserService), i0.ɵɵdirectiveInject(i3.GroupService), i0.ɵɵdirectiveInject(i4.MatDialog)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupComponent, selectors: [["app-group"]], standalone: false, decls: 13, vars: 4, consts: [["showMemberActions", ""], ["cancelRequest", ""], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutGap", "16px", 1, "row-container", "shadow-sm", "width-100"], [1, "default-community-cover"], [1, "community-avatar", "shadow-md"], ["src", "https://cdn-icons-png.flaticon.com/512/2170/2170765.png", "alt", "Community", 1, "community-icon"], ["fxLayout", "row", "fxLayoutGap", "16px", 1, "row-container", "width-100"], ["fxLayout", "column", "fxFlex", "70", "fxFlex.lt-lg", "100", 1, "child-container-1", "group-card", "shadow-sm"], [3, "group"], ["fxLayout", "column", "fxFlex", "30", "fxHide.lt-lg", "", 1, "child-container-2"], [1, "group-card", "shadow-sm", "about-section"], ["fxLayout", "column", "class", "width-100", 4, "ngIf"], ["class", "group-card shadow-sm rules-section", "fxLayout", "row", 4, "ngIf"], ["class", "group-card shadow-sm related-section", 4, "ngIf"], ["fxLayout", "column", 1, "width-100"], [1, "heading-5", "text-uppercase"], [1, "heading-4", "font-bold", "margin-top-2"], ["class", "margin-y-3 color-tertiary desc-text", 3, "innerHtml", 4, "ngIf"], ["class", "margin-y-3 color-tertiary desc-text", 4, "ngIf"], [1, "desc-text"], [1, "margin-y-4"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "desc-text"], ["class", "font-bold", 4, "ngIf"], ["fxLayoutAlign", "start center", "fxLayoutGap", "8px"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "16px", 1, ""], [4, "ngIf", "ngIfElse"], ["mat-stroked-button", "", "color", "primary", "fxFlex", "40"], [1, "margin-y-3", "color-tertiary", "desc-text", 3, "innerHtml"], [1, "margin-y-3", "color-tertiary", "desc-text"], [1, "font-bold"], ["mat-flat-button", "", "color", "primary", "fxFlex", "50", 3, "click"], ["mat-flat-button", "", "color", "primary", "fxFlex", "60", "matTooltip", "Leave group", 3, "click"], ["mat-flat-button", "", "color", "primary", "fxFlex", "60", "matTooltip", "Cancel request", 3, "click"], ["fxLayout", "row", 1, "group-card", "shadow-sm", "rules-section"], ["fxLayout", "column", "fxLayoutGap", "4px"], [4, "ngFor", "ngForOf"], [2, "box-shadow", "none"], [2, "padding", "2px 8px"], [1, "padding-right-1"], [3, "innerHtml"], [4, "ngIf"], [1, "group-card", "shadow-sm", "related-section"], ["fxLayout", "column", "fxFlex", "100"], ["fxLayout", "column", "fxLayoutGap", "4px", "fxFlex", "100"], ["mat-list-item", "", 3, "routerLink"], ["src", "https://cdn-icons-png.flaticon.com/512/552/552848.png", "alt", "", "height", "30", "width", "30", 1, "margin-right-2"]], template: function GroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
            i0.ɵɵelement(4, "img", 6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(5, "div", 7)(6, "div", 8);
            i0.ɵɵelement(7, "app-group-feed", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 10)(9, "div", 11);
            i0.ɵɵtemplate(10, GroupComponent_div_10_Template, 27, 10, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, GroupComponent_div_11_Template, 6, 1, "div", 13)(12, GroupComponent_div_12_Template, 7, 1, "div", 14);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("group", ctx.group);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.group);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.group && (ctx.group.rules == null ? null : ctx.group.rules.length));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.moderators.length);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.MatButton, i7.MatExpansionPanel, i7.MatExpansionPanelHeader, i8.MatIcon, i9.MatNavList, i9.MatListItem, i9.MatDivider, i10.MatTooltip, i1.RouterLink, i11.GroupFeedComponent, i5.DatePipe, i12.SafeContentPipe], styles: [".group-card[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  background: white;\n  padding: 16px;\n  width: auto;\n}\n\n.default-community-cover[_ngcontent-%COMP%] {\n  background: #cb2d3e;  \n\n  background: -webkit-linear-gradient(to right, #ef473a, #cb2d3e);  \n\n  background: linear-gradient(to right, #ef473a, #cb2d3e); \n\n\n  width: 100%;\n  height: 250px;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  position: relative;\n}\n\n.community-avatar[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  height: 140px;\n  width: 140px;\n  position: absolute;\n  left: 10%;\n  bottom: -28%;\n  border: 4px solid #ffffff;\n  border-radius: 50%;\n  z-index: 1;\n\n  .community-icon {\n    height: 100px;\n    width: 100px;\n    margin: 15%;\n  }\n\n  @media only screen and (max-width: 1280px) {\n    left: 42%;\n  }\n}\n\n.group-creation-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #232323;\n}\n\n.desc-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.row-container[_ngcontent-%COMP%] {\n  width: 100%;\n  // margin-bottom: 8px;\n}\n\n.child-container-1[_ngcontent-%COMP%] {\n  // display: flex;\n  // flex-direction: column;\n  // flex: 1 1 60%;\n  // max-width: 740px;\n  padding-top: 60px;\n}\n\n.child-container-2[_ngcontent-%COMP%] {\n  // display: flex;\n  // flex-direction: column;\n  // flex: 1 1 40%;\n  // max-width: 360px;\n}\n\n.about-section[_ngcontent-%COMP%], .related-section[_ngcontent-%COMP%], .rules-section[_ngcontent-%COMP%] {\n  min-height: 160px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupComponent, [{
        type: Component,
        args: [{ selector: 'app-group', standalone: false, template: "<div fxLayout=\"column\">\n  <div class=\"row-container shadow-sm width-100\" fxLayout=\"row\" fxLayoutGap=\"16px\">\n    <div class=\"default-community-cover\">\n      <div class=\"community-avatar shadow-md\">\n        <!-- <mat-icon class=\"community-icon\">people</mat-icon> -->\n        <img class=\"community-icon\" src=\"https://cdn-icons-png.flaticon.com/512/2170/2170765.png\" alt=\"Community\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row-container width-100\" fxLayout=\"row\" fxLayoutGap=\"16px\">\n    <div class=\"child-container-1 group-card shadow-sm\" fxLayout=\"column\" fxFlex=\"70\" fxFlex.lt-lg=\"100\">\n      <app-group-feed [group]=\"group\"></app-group-feed>\n    </div>\n\n    <div class=\"child-container-2\" fxLayout=\"column\" fxFlex=\"30\" fxHide.lt-lg>\n      <div class=\"group-card shadow-sm about-section\">\n        <div fxLayout=\"column\" class=\"width-100\" *ngIf=\"group\">\n          <span class=\"heading-5 text-uppercase\">\n            About Community\n          </span>\n          <span class=\"heading-4 font-bold margin-top-2\">g/{{group?.name }}</span>\n\n          <span *ngIf=\"group.description\" class=\"margin-y-3 color-tertiary desc-text\" [innerHtml]=\"group.description | safeContent\"></span>\n          <span *ngIf=\"!group.description\" class=\"margin-y-3 color-tertiary desc-text\">g/{{ group?.name}} hasn't added any description yet.</span>\n\n          <span class=\"desc-text\">{{ group.group_type }} group</span>\n\n          <div class=\"margin-y-4\">\n            <mat-divider></mat-divider>\n          </div>\n\n          <div class=\"desc-text\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"font-bold\" *ngIf=\"group.members_count\">\n              {{ group.members_count }} Member(s)\n            </span>\n            <span fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\">\n              <mat-icon>calendar_today</mat-icon>\n              <span></span>\n              Created {{ group.created_at | date }}\n            </span>\n          </div>\n\n          <div class=\"margin-y-4\">\n            <mat-divider>\n            </mat-divider>\n          </div>\n\n          <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"16px\">\n\n            <ng-container *ngIf=\"!group.member_status; else showMemberActions\">\n              <button mat-flat-button color=\"primary\" fxFlex=\"50\" (click)=\"joinGroup()\">Join group</button>\n            </ng-container>\n\n            <ng-template #showMemberActions>\n              <ng-container *ngIf=\"group.member_status && group.member_status.is_approved; else cancelRequest\">\n                <button mat-flat-button color=\"primary\" fxFlex=\"60\" matTooltip=\"Leave group\" (click)=\"leaveGroup()\">Leave group</button>\n              </ng-container>\n              <ng-template #cancelRequest>\n                <button mat-flat-button color=\"primary\" fxFlex=\"60\" matTooltip=\"Cancel request\" (click)=\"cancel()\">Cancel pending request</button>\n              </ng-template>\n            </ng-template>\n\n            <button mat-stroked-button color=\"primary\" fxFlex=\"40\">Invite Users</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"group-card shadow-sm rules-section\" fxLayout=\"row\" *ngIf=\"group && group.rules?.length\">\n        <div fxLayout=\"column\">\n          <span class=\"heading-5 text-uppercase\">\n            Community Rules\n          </span>\n\n          <div fxLayout=\"column\" fxLayoutGap=\"4px\">\n            <ng-container *ngFor=\"let rule of group?.rules; let last=last;\">\n              <mat-expansion-panel style=\"box-shadow:none\">\n                <mat-expansion-panel-header style=\"padding: 2px 8px;\">\n                    <b class=\"padding-right-1\">\n                      {{ rule.title }}\n                    </b>\n                </mat-expansion-panel-header>\n                <p [innerHtml]=\"rule.description | safeContent\"></p>\n              </mat-expansion-panel>\n              <mat-divider *ngIf=\"!last\"></mat-divider>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"group-card shadow-sm related-section\" *ngIf=\"moderators.length\">\n        <div fxLayout=\"column\" fxFlex=\"100\">\n          <span class=\"heading-5 text-uppercase\">\n            Moderators\n          </span>\n\n          <div fxLayout=\"column\" fxLayoutGap=\"4px\" fxFlex=\"100\">\n            <mat-nav-list>\n              <ng-container *ngFor=\"let moderator of moderators.slice(0, 5)\">\n                <a mat-list-item [routerLink]=\"[ '../../../user', moderator.user.username ]\">\n                  <img src=\"https://cdn-icons-png.flaticon.com/512/552/552848.png\" alt=\"\" height=\"30\" width=\"30\" class=\"margin-right-2\">\n                  u/{{ moderator.user.username }}\n                </a>\n            </ng-container>\n            </mat-nav-list>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".group-card {\n  margin: 8px 0;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  background: white;\n  padding: 16px;\n  width: auto;\n}\n\n.default-community-cover {\n  background: #cb2d3e;  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #ef473a, #cb2d3e);  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #ef473a, #cb2d3e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n  width: 100%;\n  height: 250px;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  position: relative;\n}\n\n.community-avatar {\n  background-color: #e6e6e6;\n  height: 140px;\n  width: 140px;\n  position: absolute;\n  left: 10%;\n  bottom: -28%;\n  border: 4px solid #ffffff;\n  border-radius: 50%;\n  z-index: 1;\n\n  .community-icon {\n    height: 100px;\n    width: 100px;\n    margin: 15%;\n  }\n\n  @media only screen and (max-width: 1280px) {\n    left: 42%;\n  }\n}\n\n.group-creation-text {\n  font-size: 12px;\n  color: #232323;\n}\n\n.desc-text {\n  font-size: 14px;\n}\n\n.row-container {\n  width: 100%;\n  // margin-bottom: 8px;\n}\n\n.child-container-1 {\n  // display: flex;\n  // flex-direction: column;\n  // flex: 1 1 60%;\n  // max-width: 740px;\n  padding-top: 60px;\n}\n\n.child-container-2 {\n  // display: flex;\n  // flex-direction: column;\n  // flex: 1 1 40%;\n  // max-width: 360px;\n}\n\n.about-section, .related-section, .rules-section {\n  min-height: 160px;\n}\n"] }]
    }], () => [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.UserService }, { type: i3.GroupService }, { type: i4.MatDialog }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GroupComponent, { className: "GroupComponent", filePath: "src/app/group/group/group.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=group.component.js.map