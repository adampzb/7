import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@reddit/env/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private baseUrl = `${environment.serverUrl}${environment.baseUrl}`;
  
  constructor(private http: HttpClient) {}
  
  /**
   * Get activity stream for current user
   */
  getUserActivity(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}activity/user/?page=${page}`);
  }
  
  /**
   * Get activity stream for a specific user
   */
  getUserActivityByUsername(username: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}activity/user/${username}/?page=${page}`);
  }
  
  /**
   * Get activity stream for a post
   */
  getPostActivity(postId: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}activity/post/${postId}/?page=${page}`);
  }
  
  /**
   * Get recent activities
   */
  getRecentActivity(limit: number = 10): Observable<any> {
    return this.http.get(`${this.baseUrl}activity/recent/?limit=${limit}`);
  }
  
  /**
   * Get activity stream for followed users
   */
  getFollowedActivity(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}activity/followed/?page=${page}`);
  }
  
  /**
   * Get activity details
   */
  getActivityDetail(activityId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}activity/${activityId}/`);
  }
  
  /**
   * Mark activity as read
   */
  markActivityRead(activityId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}activity/${activityId}/read/`, {});
  }
  
  /**
   * Mark all activities as read
   */
  markAllRead(): Observable<any> {
    return this.http.post(`${this.baseUrl}activity/mark-all-read/`, {});
  }
}