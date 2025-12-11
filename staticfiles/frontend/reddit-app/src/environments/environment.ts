// Environment configuration for development
// Universal environment support - automatically detects runtime environment
export const environment = {
  production: false,
  baseUrl: '/api/v1/',
  
  // Dynamic server URL detection - FORCE LOCAL DEVELOPMENT
  serverUrl: 'http://localhost:8000',
  
  // Dynamic app URL detection - FORCE LOCAL DEVELOPMENT
  appUrl: 'http://localhost:8000',
  
  // Dynamic login URL
  get loginUrl() {
    return `${this.appUrl}/sign-in`;
  },
  
  staticUrl: '../assets/images/'
};
