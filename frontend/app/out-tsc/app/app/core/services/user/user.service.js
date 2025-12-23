import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '@discussit/env/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../storage/storage-handler.service";
export class UserService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.serverUrl = `${environment.serverUrl}`;
        this.userInitialized = new BehaviorSubject(false);
        console.log('UserService: serverUrl configured as:', this.serverUrl);
        console.log('UserService: environment:', environment);
        // Initialize user BehaviorSubject
        this.user = new BehaviorSubject(null);
    }
    setUser(user, callback) {
        console.log('UserService: Setting user:', user);
        this.user.next(user);
        if (user) {
            this.storage.storeItem('user', user);
        }
        this.userInitialized.next(true);
        if (callback) {
            callback(user);
        }
    }
    unsetUser() {
        this.user.next(null);
        this.storage.removeItem('user');
    }
    fetchUser(callback) {
        if (this.user?.value) {
            callback(this.user.value);
        }
        const storageUser = this.storage.getItem('user');
        if (storageUser) {
            this.setUser(storageUser, callback);
        }
        else {
            this.getAuthUser((user) => this.setUser(user, callback));
        }
    }
    getAuthUser(callback) {
        console.log('UserService: Fetching authenticated user from:', this.serverUrl + '/rest-auth/user/');
        this.http.get(this.serverUrl + '/rest-auth/user/').subscribe((response) => {
            console.log('UserService: Auth user response:', response);
            callback(response);
        }, (error) => {
            console.error('UserService: Auth user error:', error);
            callback(null);
        });
    }
    getUserByUsername(username) {
        return this.http.get(this.serverUrl + '/api/v1/users/' + username + '/');
    }
    register(postData) {
        const url = this.serverUrl + '/rest-auth/registration/';
        console.log('UserService: Making registration request to:', url);
        console.log('UserService: Registration data:', postData);
        return this.http.post(url, postData);
    }
    login(postData) {
        const url = this.serverUrl + '/rest-auth/login/';
        console.log('UserService: Making login request to:', url);
        console.log('UserService: Login data:', postData);
        return this.http.post(url, postData);
    }
    logout() {
        return this.http.post(this.serverUrl + '/rest-auth/logout/', {});
    }
    addInterests(username) {
        return;
    }
    userInvitations(username) {
        return this.http.get(this.serverUrl + '/api/v1/users/' + username + '/invitations/');
    }
    userRequestedGroups(username) {
        return this.http.get(this.serverUrl + '/api/v1/users/' + username + '/requested_groups/');
    }
    userInvites(username) {
        return this.http.get(this.serverUrl + '/api/v1/users/' + username + '/user_invites/');
    }
    userUpvotes(username) {
        return this.http.get(this.serverUrl + '/api/v1/users/' + username + '/user_upvotes/');
    }
    userDownvotes(username) {
        return this.http.get(this.serverUrl + '/api/v1/users/' + username + '/user_downvotes/');
    }
    getBookmarks(username) {
        return this.http.get(this.serverUrl + '/api/v1/users/' + username + '/bookmarks/');
    }
    static { this.ɵfac = function UserService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.StorageHandlerService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.StorageHandlerService }], null); })();
//# sourceMappingURL=user.service.js.map