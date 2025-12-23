import { Injectable } from '@angular/core';
import { environment } from '@discussit/env/environment';
import * as i0 from "@angular/core";
import * as i1 from "@discussit/core/services/user/user.service";
export class AuthGuard {
    constructor(userService) {
        this.userService = userService;
        this.authenticated = false;
        this.serverUrl = `${environment.serverUrl}`;
    }
    canActivate(route, state) {
        this.userService.fetchUser((user) => {
            this.user = user;
        });
        if (this.user || this.userService.user?.getValue()) {
            return true;
        }
        return false;
    }
    static { this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthGuard)(i0.ɵɵinject(i1.UserService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.UserService }], null); })();
//# sourceMappingURL=auth.guard.js.map