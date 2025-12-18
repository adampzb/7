import { Injectable } from '@angular/core';
import { environment } from '@discussit/env/environment';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class StorageHandlerService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.baseUrl}`;
        this.authChange = new Subject();
        this.authenticated = false;
        this.baseUrl = `${environment.serverUrl}${this.baseUrl}`;
    }
    storeItem(key, value) {
        let stringifiedValue = JSON.stringify(value);
        stringifiedValue = stringifiedValue.replace(/\s/g, '');
        const encodedValue = btoa(unescape(stringifiedValue));
        localStorage.setItem(key, encodedValue);
    }
    getItem(key) {
        const data = localStorage.getItem(key);
        if (data !== null) {
            const decodedString = decodeURIComponent(escape(atob(data)));
            const jsonData = JSON.parse(decodedString);
            return jsonData;
        }
        return null;
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    getUser() {
        return this.http.get(this.baseUrl + 'users/auth/');
    }
    getCurrentUserSubject() {
        return this.user;
    }
    getCurrentUserLocalStorage() {
        var data = localStorage.getItem('user');
        if (data) {
            const decodedString = decodeURIComponent(escape(atob(data)));
            var jsonData = JSON.parse(decodedString);
            return jsonData;
        }
        else {
            return data;
        }
    }
    setCurrentUserLocalStorage(user) {
        let stringifyData = JSON.stringify(user);
        stringifyData = stringifyData.replace(/\s/g, '');
        const encodedUrl = btoa(unescape(stringifyData));
        if (this.getCurrentUserLocalStorage() != null) {
            localStorage.removeItem('user');
        }
        localStorage.setItem('user', encodedUrl);
    }
    static { this.ɵfac = function StorageHandlerService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StorageHandlerService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StorageHandlerService, factory: StorageHandlerService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StorageHandlerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=storage-handler.service.js.map