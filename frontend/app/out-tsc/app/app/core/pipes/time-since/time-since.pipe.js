import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TimeSincePipe {
    transform(value) {
        if (!value)
            return '';
        const now = new Date();
        const date = new Date(value);
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
        const intervals = [
            { label: 'year', seconds: 31536000 },
            { label: 'month', seconds: 2592000 },
            { label: 'day', seconds: 86400 },
            { label: 'hour', seconds: 3600 },
            { label: 'minute', seconds: 60 },
            { label: 'second', seconds: 1 }
        ];
        for (const interval of intervals) {
            const count = Math.floor(seconds / interval.seconds);
            if (count > 0) {
                return count === 1 ? `1 ${interval.label}` : `${count} ${interval.label}s`;
            }
        }
        return 'just now';
    }
    static { this.ɵfac = function TimeSincePipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TimeSincePipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "timeSince", type: TimeSincePipe, pure: true, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeSincePipe, [{
        type: Pipe,
        args: [{
                standalone: false,
                name: 'timeSince'
            }]
    }], null, null); })();
//# sourceMappingURL=time-since.pipe.js.map