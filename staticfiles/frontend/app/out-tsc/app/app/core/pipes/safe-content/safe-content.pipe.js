import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class SafeContentPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
        // return this.sanitizer.bypassSecurityTrustStyle(html);
        // return this.sanitizer.bypassSecurityTrustScript(html);
        // return this.sanitizer.bypassSecurityTrustUrl(html);
        // return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
    static { this.ɵfac = function SafeContentPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SafeContentPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer, 16)); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "safeContent", type: SafeContentPipe, pure: true, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeContentPipe, [{
        type: Pipe,
        args: [{
                standalone: false,
                name: 'safeContent'
            }]
    }], () => [{ type: i1.DomSanitizer }], null); })();
//# sourceMappingURL=safe-content.pipe.js.map