import { Injectable } from '@angular/core';
import { environment } from '@discussit/env/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PostService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.serverUrl}${environment.baseUrl}`;
    }
    createPost(postData) {
        return this.http.post(this.baseUrl + 'post/self/', postData);
    }
    getPosts(page) {
        return this.http.get(this.baseUrl + 'posts/?page=' + page);
    }
    getPostDetail(uuid) {
        return this.http.get(this.baseUrl + 'posts/' + uuid + '/');
    }
    searchPosts(query, page) {
        return this.http.get(this.baseUrl + 'posts/?search=' + query + '&page=' + page);
    }
    addBookmark(uuid, data) {
        return this.http.post(this.baseUrl + 'posts/' + uuid + '/bookmarks/', data);
    }
    removeBookmark(uuid, bookmark_id) {
        return this.http.delete(this.baseUrl + 'posts/' + uuid + '/bookmarks/' + bookmark_id + '/');
    }
    upvotePost(uuid) {
        return this.http.put(this.baseUrl + 'posts/' + uuid + '/upvote/', {});
    }
    downvotePost(uuid) {
        return this.http.put(this.baseUrl + 'posts/' + uuid + '/downvote/', {});
    }
    removePostVote(uuid) {
        return this.http.put(this.baseUrl + 'posts/' + uuid + '/remove_vote/', {});
    }
    filterPosts(page, title, status, group, username) {
        return this.http.get(this.baseUrl + 'posts/?page=' + page + '&title=' + title + '&status='
            + status + '&group=' + group + '&author=' + username);
    }
    static { this.ɵfac = function PostService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PostService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=post.service.js.map