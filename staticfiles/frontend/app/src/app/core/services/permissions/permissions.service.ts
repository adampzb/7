import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@reddit/env/environment';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  private baseUrl = `${environment.serverUrl}${environment.baseUrl}`;
  
  constructor(private http: HttpClient) {}
  
  /**
   * Get permissions for current user on a post
   */
  getPostPermissions(postId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}permissions/post/${postId}/`);
  }
  
  /**
   * Get permissions for current user on a comment
   */
  getCommentPermissions(commentId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}permissions/comment/${commentId}/`);
  }
  
  /**
   * Check if user has specific permission on object
   */
  hasPermission(objectType: string, objectId: string, permission: string): Observable<any> {
    return this.http.get(`${this.baseUrl}permissions/check/?` +
      `object_type=${objectType}&object_id=${objectId}&permission=${permission}`);
  }
  
  /**
   * Get all permissions for current user
   */
  getUserPermissions(): Observable<any> {
    return this.http.get(`${this.baseUrl}permissions/user/`);
  }
  
  /**
   * Assign permission to user (admin only)
   */
  assignPermission(data: {
    object_type: string,
    object_id: string,
    permission: string,
    username: string
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}permissions/assign/`, data);
  }
  
  /**
   * Remove permission from user (admin only)
   */
  removePermission(data: {
    object_type: string,
    object_id: string,
    permission: string,
    username: string
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}permissions/remove/`, data);
  }
}