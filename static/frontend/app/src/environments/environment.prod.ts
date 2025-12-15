// Production environment configuration
// Universal environment support - automatically detects runtime environment
export const environment = {
  production: true,
  baseUrl: '/api/v1/',
  
  // Dynamic server URL detection for production - Use current host
  serverUrl: window.location.origin,
  
  // Dynamic app URL detection for production - Use current host
  appUrl: window.location.origin,
  
  // Dynamic login URL
  get loginUrl() {
    return `${this.appUrl}/sign-in`;
  },
  
  staticUrl: '/assets/images/'
};
