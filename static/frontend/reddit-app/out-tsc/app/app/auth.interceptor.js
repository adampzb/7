import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AuthInterceptor {
    constructor() { }
    intercept(request, next) {
        // Get auth token from localStorage
        const authToken = localStorage.getItem('auth_token');
        // Clone request with credentials and auth token if available
        let clonedRequest = request.clone({
            withCredentials: true
        });
        if (authToken) {
            clonedRequest = clonedRequest.clone({
                setHeaders: {
                    'Authorization': `Token ${authToken}`
                }
            });
        }
        return next.handle(clonedRequest);
    }
    static { this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthInterceptor)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthInterceptor, [{
        type: Injectable
    }], () => [], null); })();
//# sourceMappingURL=auth.interceptor.js.map