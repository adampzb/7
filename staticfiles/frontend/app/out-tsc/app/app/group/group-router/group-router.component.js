import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class GroupRouterComponent {
    constructor() { }
    ngOnInit() {
    }
    static { this.ɵfac = function GroupRouterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GroupRouterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupRouterComponent, selectors: [["app-group-router"]], standalone: false, decls: 1, vars: 0, template: function GroupRouterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        } }, dependencies: [i1.RouterOutlet], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupRouterComponent, [{
        type: Component,
        args: [{ selector: 'app-group-router', standalone: false, template: "<router-outlet></router-outlet>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GroupRouterComponent, { className: "GroupRouterComponent", filePath: "src/app/group/group-router/group-router.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=group-router.component.js.map