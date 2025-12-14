import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@reddit/env/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = `${environment.serverUrl}${environment.baseUrl}`;
  
  constructor(private http: HttpClient) {}
  
  /**
   * Search posts
   */
  searchPosts(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}search/posts/?q=${encodeURIComponent(query)}&page=${page}`);
  }
  
  /**
   * Search comments
   */
  searchComments(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}search/comments/?q=${encodeURIComponent(query)}&page=${page}`);
  }
  
  /**
   * Search users
   */
  searchUsers(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}search/users/?q=${encodeURIComponent(query)}&page=${page}`);
  }
  
  /**
   * Advanced search with filters
   */
  advancedSearch(query: string, filters: any = {}, page: number = 1): Observable<any> {
    const params = {
      q: query,
      page: page.toString(),
      ...filters
    };
    return this.http.get(`${this.baseUrl}search/advanced/`, { params });
  }
  
  /**
   * Get search suggestions
   */
  getSuggestions(query: string, limit: number = 5): Observable<any> {
    return this.http.get(`${this.baseUrl}search/suggestions/?q=${encodeURIComponent(query)}&limit=${limit}`);
  }
  
  /**
   * Get popular search terms
   */
  getPopularSearches(limit: number = 10): Observable<any> {
    return this.http.get(`${this.baseUrl}search/popular/?limit=${limit}`);
  }
}