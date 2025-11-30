// Production environment configuration
// Universal environment support - automatically detects runtime environment
export const environment = {
  production: true,
  baseUrl: '/api/v1/',
  
  // Dynamic server URL detection for production
  serverUrl: (() => {
    if (typeof window === 'undefined') {
      // Server-side rendering fallback
      return 'https://work-1-pumwxxszeoqwqlkx.prod-runtime.all-hands.dev';
    }
    
    const hostname = window.location.hostname;
    
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
  
  // Dynamic app URL detection for production
  appUrl: (() => {
    if (typeof window === 'undefined') {
      // Server-side rendering fallback
      return 'https://work-2-pumwxxszeoqwqlkx.prod-runtime.all-hands.dev/django_reddit';
    }
    
    const hostname = window.location.hostname;
    
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
  
  staticUrl: '/django_reddit/assets/images/'
};
