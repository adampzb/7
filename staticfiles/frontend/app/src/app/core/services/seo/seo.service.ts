import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@reddit/env/environment';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = `${environment.serverUrl}${environment.baseUrl}`;
  
  constructor(
    private http: HttpClient,
    private meta: Meta,
    private title: Title
  ) {}
  
  /**
   * Get SEO metadata for a post
   */
  getPostMeta(postId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}seo/post/${postId}/`);
  }
  
  /**
   * Get SEO metadata for a user profile
   */
  getUserMeta(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}seo/user/${username}/`);
  }
  
  /**
   * Update SEO metadata for current page
   */
  updatePageMeta(
    title: string,
    description: string,
    image: string = null,
    url: string = null
  ): void {
    // Update page title
    this.title.setTitle(title);
    
    // Update meta tags
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    
    if (image) {
      this.meta.updateTag({ property: 'og:image', content: image });
      this.meta.updateTag({ name: 'twitter:image', content: image });
    }
    
    if (url) {
      this.meta.updateTag({ property: 'og:url', content: url });
      this.meta.updateTag({ name: 'twitter:url', content: url });
    }
  }
  
  /**
   * Get default SEO settings
   */
  getDefaultSeo(): Observable<any> {
    return this.http.get(`${this.baseUrl}seo/default/`);
  }
  
  /**
   * Update SEO settings (admin only)
   */
  updateSeoSettings(settings: any): Observable<any> {
    return this.http.post(`${this.baseUrl}seo/settings/`, settings);
  }
  
  /**
   * Get social sharing links for content
   */
  getSocialLinks(url: string, title: string, description: string = ''): { [key: string]: string } {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDesc = encodeURIComponent(description);
    
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDesc}`,
      reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      email: `mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0A${encodedUrl}`
    };
  }
}