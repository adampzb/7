// Environment configuration for development
// Universal environment support - automatically detects runtime environment
export const environment = {
  production: false,
  baseUrl: '/api/v1/',
  
  // Dynamic server URL detection - Use current host
  serverUrl: window.location.origin,
  
  // Dynamic app URL detection - Use current host
  appUrl: window.location.origin,
  
  // Dynamic login URL
  get loginUrl() {
    return `${this.appUrl}/sign-in`;
  },
  
  staticUrl: '../assets/images/'
};
