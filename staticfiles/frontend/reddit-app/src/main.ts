import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

console.log('🚀 Starting Angular application...');
console.log('Environment:', environment);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(ref => {
    console.log('✅ Angular application bootstrapped successfully!');
  })
  .catch(err => {
    console.error('❌ Angular bootstrap failed:', err);
    console.error('Error details:', err);
    // Show error on page
    document.body.innerHTML = `
      <div style="background: red; color: white; padding: 20px; font-family: monospace;">
        <h2>Angular Bootstrap Error</h2>
        <pre>${err.message || err}</pre>
        <details>
          <summary>Full Error</summary>
          <pre>${err.stack || JSON.stringify(err, null, 2)}</pre>
        </details>
      </div>
    `;
  });
