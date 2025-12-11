// Production environment configuration
// Universal environment support - automatically detects runtime environment
export const environment = {
  production: true,
  baseUrl: '/api/v1/',
  
  // Dynamic server URL detection for production - FORCE LOCAL DEVELOPMENT
  serverUrl: 'http://localhost:8000',
  
  // Dynamic app URL detection for production - FORCE LOCAL DEVELOPMENT
  appUrl: 'http://localhost:8000/django_reddit',
  
  // Dynamic login URL
  get loginUrl() {
    return `${this.appUrl}/sign-in`;
  },
  
  staticUrl: '/django_reddit/assets/images/'
};
