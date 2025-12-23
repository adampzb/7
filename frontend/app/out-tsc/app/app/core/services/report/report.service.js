import { Injectable } from '@angular/core';
import { environment } from '@discussit/env/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ReportService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.serverUrl}${environment.baseUrl}`;
    }
    getReportTypes() {
        return this.http.get(this.baseUrl + 'report_types/');
    }
    createReport(post_uuid, report) {
        return this.http.post(this.baseUrl + 'posts/' + post_uuid + '/reports/', report);
    }
    redactReport(post_uuid, report_id) {
        return this.http.put(this.baseUrl + 'posts/' + post_uuid + '/reports/' + report_id + '/redact/', {});
    }
    static { this.ɵfac = function ReportService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReportService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=report.service.js.map