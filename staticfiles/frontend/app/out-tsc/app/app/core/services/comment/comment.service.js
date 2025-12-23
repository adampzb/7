import { Injectable } from '@angular/core';
import { environment } from '@discussit/env/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CommentService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.serverUrl}${environment.baseUrl}`;
    }
    getComments(uuid, page = 1, children = false, parent = 0) {
        if (children) {
            return this.http.get(this.baseUrl + 'posts/' + uuid + '/comments/' + parent + '/children/?page=' + page);
        }
        else {
            return this.http.get(this.baseUrl + 'posts/' + uuid + '/comments/?page=' + page);
        }
    }
    createComment(uuid, comment) {
        return this.http.post(this.baseUrl + 'posts/' + uuid + '/comments/', comment);
    }
    updateComment(uuid, comment_pk, comment) {
        return this.http.put(this.baseUrl + 'posts/' + uuid + '/comments/' + comment_pk + '/', comment);
    }
    removeComment(uuid, comment_pk) {
        return this.http.delete(this.baseUrl + 'posts/' + uuid + '/comments/' + comment_pk + '/');
    }
    checkUserVote(uuid, comment_pk) {
        return this.http.get(this.baseUrl + 'posts/' + uuid + '/comments/' + comment_pk + '/check_vote/');
    }
    upvoteComment(uuid, comment_pk) {
        return this.http.put(this.baseUrl + 'posts/' + uuid + '/comments/' + comment_pk + '/upvote/', {});
    }
    downvoteComment(uuid, comment_pk) {
        return this.http.put(this.baseUrl + 'posts/' + uuid + '/comments/' + comment_pk + '/downvote/', {});
    }
    removeVote(uuid, comment_pk) {
        return this.http.delete(this.baseUrl + 'posts/' + uuid + '/comments/' + comment_pk + '/remove_vote/', {});
    }
    userComments(username) {
        return this.http.get(this.baseUrl + 'users/' + username + '/user_comments/');
    }
    static { this.ɵfac = function CommentService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommentService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=comment.service.js.map