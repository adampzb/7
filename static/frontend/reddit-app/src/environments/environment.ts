// Environment configuration for development
// Universal environment support - automatically detects runtime environment
export const environment = {
  production: false,
  baseUrl: '/api/v1/',
  
  // Dynamic server URL detection
  serverUrl: (() => {
    if (typeof window === 'undefined') return 'http://localhost:12000';
    
    const hostname = window.location.hostname;
    
    // Local development
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:12000';
    }
    
    // Runtime environment detection
    if (hostname.includes('prod-runtime.all-hands.dev')) {
      // Extract the work instance identifier and use work-1 for backend
      const match = hostname.match(/work-(\d+)-([^.]+)\.prod-runtime\.all-hands\.dev/);
      if (match) {
        const [, , instanceId] = match;
        return `https://work-1-${instanceId}.prod-runtime.all-hands.dev`;
      }
    }
    
    // Fallback to current runtime URLs
    return 'https://work-1-pumwxxszeoqwqlkx.prod-runtime.all-hands.dev';
  })(),
  
  // Dynamic app URL detection
  appUrl: (() => {
    if (typeof window === 'undefined') return 'http://localhost:12001';
    
    const hostname = window.location.hostname;
    
    // Local development
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:12001';
    }
    
    // Runtime environment - use current hostname for frontend
    if (hostname.includes('prod-runtime.all-hands.dev')) {
      return `https://${hostname}/django_reddit`;
    }
    
    // Fallback
    return 'https://work-2-pumwxxszeoqwqlkx.prod-runtime.all-hands.dev/django_reddit';
  })(),
  
  // Dynamic login URL
  get loginUrl() {
    return `${this.appUrl}/sign-in`;
  },
  
  staticUrl: '../assets/images/'
};
