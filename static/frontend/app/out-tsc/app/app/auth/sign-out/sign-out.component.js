import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class SignOutComponent {
    constructor(route) {
        this.route = route;
        this.redirection = {
            'delete': {
                title: 'You will be missed ;(',
                subtitle: `Your account shall be permanently deleted in 14 days.
        If you change your mind, please send us a request mail at admin@gmail.com
        and we shall set-up everything just like it was before.. `
            },
            'deactivate': {
                title: 'You will be missed ;(',
                subtitle: `Whenever you wish to reactivate your account,
      please send us a request mail at admin@gmail.com and we shall set-up
      everything just like it was before.`
            }
        };
    }
    ngOnInit() {
        this.route.fragment.subscribe((fragment) => {
            this.fragment = fragment;
            this.context = this.redirection[this.fragment];
        });
        setTimeout(() => {
            window.open(`${environment.appUrl}`, '_self');
        }, 3000);
    }
    static { this.ɵfac = function SignOutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SignOutComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SignOutComponent, selectors: [["app-sign-out"]], standalone: false, decls: 6, vars: 2, consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "message-container", "width-100", "height-100"], [1, "font-bold", "width-100", "text-center", "heading-1"], [1, "font-sm", "text-center", "width-100", "heading-3"]], template: function SignOutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 0)(2, "p", 1);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 2);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.context.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.context.subtitle, " ");
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignOutComponent, [{
        type: Component,
        args: [{ selector: 'app-sign-out', standalone: false, template: "<ng-container>\n  <div fxLayout=\"column\" class=\"message-container width-100 height-100\" fxLayoutAlign=\"center center\">\n    <p class=\"font-bold width-100 text-center heading-1\">{{ context.title }}</p>\n    <p class=\"font-sm text-center width-100 heading-3\">\n      {{ context.subtitle }}\n    </p>\n  </div>\n</ng-container>\n" }]
    }], () => [{ type: i1.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SignOutComponent, { className: "SignOutComponent", filePath: "src/app/auth/sign-out/sign-out.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=sign-out.component.js.map