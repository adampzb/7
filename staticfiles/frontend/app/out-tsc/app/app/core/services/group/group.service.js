import { Injectable } from '@angular/core';
import { environment } from '@discussit/env/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class GroupService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.serverUrl}${environment.baseUrl}`;
    }
    createGroup(postData) {
        return this.http.post(this.baseUrl + 'groups/', postData);
    }
    getGroups() {
        return this.http.get(this.baseUrl + 'groups/');
    }
    getGroupPosts(group_id) {
        return this.http.get(this.baseUrl + 'groups/' + group_id + '/posts/');
    }
    getGroupDetail(group_id) {
        return this.http.get(this.baseUrl + 'groups/' + group_id + '/');
    }
    getUserGroups(group_type, user_id, member_type) {
        return this.http.get(this.baseUrl + 'groups/?group_type=' + group_type + '&members__user=' + user_id
            + '&members__member_type=' + member_type);
    }
    filterMembers(member_type, group_id, user) {
        return this.http.get(this.baseUrl + 'members/?member_type=' + member_type + '&group=' + group_id + '&user=' + user);
    }
    joinGroup(group_id, data) {
        return this.http.post(this.baseUrl + 'groups/' + group_id + '/member_requests/', data);
    }
    cancelRequest(group_id, request_id) {
        return this.http.delete(this.baseUrl + 'groups/' + group_id + '/member_requests/' + request_id + '/');
    }
    leaveGroup(group_id, data) {
        return this.http.put(this.baseUrl + 'groups/' + group_id + '/leave_group/', data);
    }
    inviteMember(group_id, data) {
        return this.http.post(this.baseUrl + 'groups/' + group_id + '/invites/', data);
    }
    addGroupRule(group_id, data) {
        return this.http.post(this.baseUrl + 'groups/' + group_id + '/rules/', data);
    }
    static { this.ɵfac = function GroupService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GroupService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GroupService, factory: GroupService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=group.service.js.map