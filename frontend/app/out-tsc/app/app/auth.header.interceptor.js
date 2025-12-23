import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class HttpXsrfInterceptor {
    constructor(tokenExtractor) {
        this.tokenExtractor = tokenExtractor;
    }
    intercept(req, next) {
        const headerName = 'X-CSRFToken';
        const token = this.tokenExtractor.getToken();
        if (token !== null && !req.headers.has(headerName)) {
            req = req.clone({ headers: req.headers.set(headerName, token) });
        }
        return next.handle(req);
    }
    static { this.ɵfac = function HttpXsrfInterceptor_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HttpXsrfInterceptor)(i0.ɵɵinject(i1.HttpXsrfTokenExtractor)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HttpXsrfInterceptor, factory: HttpXsrfInterceptor.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HttpXsrfInterceptor, [{
        type: Injectable
    }], () => [{ type: i1.HttpXsrfTokenExtractor }], null); })();
//# sourceMappingURL=auth.header.interceptor.js.map