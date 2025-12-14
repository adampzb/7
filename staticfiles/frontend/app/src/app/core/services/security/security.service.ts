import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@reddit/env/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private baseUrl = `${environment.serverUrl}${environment.baseUrl}`;
  
  constructor(private http: HttpClient) {}
  
  /**
   * Get failed login attempts for current user
   */
  getFailedLoginAttempts(): Observable<any> {
    return this.http.get(`${this.baseUrl}security/failed-attempts/`);
  }
  
  /**
   * Check if IP is locked out
   */
  checkLockoutStatus(): Observable<any> {
    return this.http.get(`${this.baseUrl}security/lockout-status/`);
  }
  
  /**
   * Get security logs for admin
   */
  getSecurityLogs(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}security/logs/?page=${page}`);
  }
  
  /**
   * Reset failed attempts for user (admin only)
   */
  resetFailedAttempts(username: string): Observable<any> {
    return this.http.post(`${this.baseUrl}security/reset-attempts/`, {username});
  }
  
  /**
   * Get CSRF token for forms
   */
  getCsrfToken(): Observable<any> {
    return this.http.get(`${environment.serverUrl}/get-csrf-token/`);
  }
}