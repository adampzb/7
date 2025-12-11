# DiscussIt Frontend - Angular 21

This Angular frontend was generated with [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1 and has been fully updated to the latest framework versions.

## 🚀 Quick Start

### Development server

```bash
# Start development server
ng serve

# Navigate to http://localhost:4200/
# The app will automatically reload if you change any of the source files.
```

### Production build

```bash
# Build for production
ng build --configuration production

# Build artifacts will be stored in the dist/ directory
```

## 📦 Key Features

- **Angular 21.0.3**: Latest stable version with security patches
- **TypeScript 5.9.3**: Modern JavaScript features
- **Angular Material**: Comprehensive UI component library
- **RxJS 7.8.1**: Reactive programming
- **Quill.js**: Rich text editor (replaced Froala)
- **ESLint**: Code quality enforcement

## 🔧 Development Tools

### Code scaffolding

```bash
ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Testing

```bash
# Unit tests (Karma)
ng test

# Linting (ESLint)
ng lint

# End-to-end tests
ng e2e
```

## 📝 Project Structure

```
src/
├── app/                  # Main application
│   ├── auth/             # Authentication components
│   ├── comments/         # Comment system
│   ├── core/             # Core services and utilities
│   ├── group/            # Group/community features
│   ├── post/             # Post management
│   ├── profiles/         # User profiles
│   └── ...
├── assets/               # Static assets
├── environments/         # Environment configurations
└── styles.scss           # Global styles
```

## 🔒 Security

- **Angular 21.0.3**: All security vulnerabilities patched
- **Dependencies**: All npm packages updated to secure versions
- **ESLint**: Code quality and security rules enforced
- **TypeScript**: Strict type checking enabled

## 📈 Deployment

### Build for Django integration

```bash
# Build with proper base href
ng build --base-href /django_reddit/

# Output goes to dist/ directory
# Copy contents to Django static directory
```

### Environment configuration

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  baseUrl: '/api/v1/',
  serverUrl: 'http://localhost:8000',
  appUrl: 'http://localhost:8000'
};
```

## 🤝 Integration with Django Backend

### API Endpoints

- **Authentication**: `/rest-auth/login/`, `/rest-auth/registration/`
- **Posts**: `/api/v1/posts/`
- **Users**: `/api/v1/users/`
- **Groups**: `/api/v1/groups/`

### CORS Configuration

The Django backend is configured with proper CORS headers to allow frontend requests from `http://localhost:4200`.

## 📚 Additional Resources

- [Angular CLI Documentation](https://angular.io/cli)
- [Angular Material](https://material.angular.io/)
- [RxJS Documentation](https://rxjs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
