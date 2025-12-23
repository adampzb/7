import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/group/group.service";
import * as i2 from "@discussit/core/services/user/user.service";
import * as i3 from "@angular/router";
import * as i4 from "../../post/create-post/create-post.component";
export class GroupPostComponent {
    constructor(groupService, userService, router, route) {
        this.groupService = groupService;
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        const group_id = this.route.snapshot.params.id;
        if (group_id) {
            this.getGroupDetail(group_id);
        }
        this.getAuthUser();
    }
    getAuthUser() {
        this.userService.userInitialized.subscribe((initialized) => {
            if (initialized) {
                this.userService.user.subscribe((user) => {
                    this.user = user;
                    console.log(this.user);
                });
            }
        });
    }
    getGroupDetail(group_id) {
        this.groupService.getGroupDetail(group_id).subscribe((response) => {
            this.group = response;
        }, (err) => {
            console.log(err);
        });
    }
    static { this.ɵfac = function GroupPostComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GroupPostComponent)(i0.ɵɵdirectiveInject(i1.GroupService), i0.ɵɵdirectiveInject(i2.UserService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupPostComponent, selectors: [["app-group-post"]], standalone: false, decls: 1, vars: 1, consts: [[3, "group"]], template: function GroupPostComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-create-post", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("group", ctx.group);
        } }, dependencies: [i4.CreatePostComponent], styles: [".create-group-post[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  padding: 0;\n  width: 100%;\n  margin: 16px 0;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupPostComponent, [{
        type: Component,
        args: [{ selector: 'app-group-post', standalone: false, template: "<app-create-post [group]=\"group\"></app-create-post>\n", styles: [".create-group-post {\n  box-shadow: none;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  display: flex;\n  padding: 0;\n  width: 100%;\n  margin: 16px 0;\n}\n"] }]
    }], () => [{ type: i1.GroupService }, { type: i2.UserService }, { type: i3.Router }, { type: i3.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GroupPostComponent, { className: "GroupPostComponent", filePath: "src/app/group/group-post/group-post.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=group-post.component.js.map