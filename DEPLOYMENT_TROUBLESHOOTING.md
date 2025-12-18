# DiscussIt Deployment Troubleshooting Guide

This guide helps you avoid and fix common deployment issues.

## 🚨 Common Issues and Solutions

### 1. T-Rex Icon Instead of Logo

**Cause**: Angular application failed to load properly, showing development fallback.

**Solution**:
```bash
# Rebuild Angular properly
cd /root/7/static/frontend/app
rm -rf dist/ node_modules/ .angular/
npm install
ng build --configuration=production --base-href=/ --deploy-url=/

# Copy files correctly
cp -r dist/* ../../../static/
cd ../../..
ln -sf static/runtime.js runtime.js
ln -sf static/polyfills.js polyfills.js
ln -sf static/main.js main.js
ln -sf static/styles.css styles.css
ln -sf static/index.html index.html
```

### 2. Green "Angular App is Working" Bar

**Cause**: Development mode assets are being served instead of production build.

**Solution**:
```bash
# Ensure production build
ng build --configuration=production --base-href=/ --deploy-url=/ --aot=true --optimization=true

# Remove any development files
rm -rf static/frontend/app/{dist,node_modules,.angular,package-lock.json}
```

### 3. Distorted Search Bar

**Cause**: CSS files not loading or incorrect paths.

**Solution**:
```bash
# Verify CSS file exists and is accessible
ls -la static/styles.*.css
curl -I http://localhost/styles.46b69814fbb5cce8.css

# Ensure Nginx serves CSS files
sudo systemctl restart nginx
```

### 4. 404 Errors for Favicons

**Cause**: Nginx not configured to serve `/assets/` path.

**Solution**:
```bash
# Add assets location to Nginx config
sudo nano /etc/nginx/sites-available/discussit

# Add this block:
location /assets/ {
    alias /var/www/html/assets/;
    expires 30d;
    access_log off;
}

sudo systemctl restart nginx
```

### 5. 401 Unauthorized for API Endpoints

**Cause**: This is NORMAL for unauthenticated requests.

**Solution**:
- For `/rest-auth/user/`: User must be logged in
- For other endpoints: Check authentication requirements
- Frontend should handle 401 errors gracefully

## 🎯 Proper Deployment Checklist

### Before Deployment
1. ✅ Clean old builds: `rm -rf staticfiles/ index.html main.js polyfills.js runtime.js styles.css`
2. ✅ Remove Angular cache: `rm -rf static/frontend/app/{dist,node_modules,.angular,package-lock.json}`
3. ✅ Stop Docker: `sudo docker-compose down -v`

### Angular Build
1. ✅ Install dependencies: `npm install`
2. ✅ Production build: `ng build --configuration=production --base-href=/ --deploy-url=/`
3. ✅ Copy files: `cp -r dist/* ../../../static/`
4. ✅ Create symlinks: `ln -sf static/{runtime,polyfills,main,styles,index.html}.{js,css,html} ./`

### Django Setup
1. ✅ Install requirements: `pip install -r requirements.txt`
2. ✅ Install whitenoise: `pip install whitenoise --break-system-packages`
3. ✅ Run migrations: `python manage.py migrate`
4. ✅ Collect static: `python manage.py collectstatic --noinput`

### Nginx Setup
1. ✅ Copy to Nginx dirs: `sudo cp -r static/* /var/www/{html,static}/`
2. ✅ Set permissions: `sudo chown -R www-data:www-data /var/www/{html,static}/`
3. ✅ Restart Nginx: `sudo systemctl restart nginx`

### Docker Setup
1. ✅ Build images: `sudo docker-compose build`
2. ✅ Start containers: `sudo docker-compose up -d`
3. ✅ Check status: `sudo docker-compose ps`

## 🔧 Verification Commands

```bash
# Check if application is running
curl -I http://localhost:8000

# Check Angular files
ls -la static/ | grep -E "(runtime|main|styles|index)"

# Check favicons
curl -I http://localhost/assets/favicon/apple-touch-icon.png

# Check API
curl -I http://localhost:8000/api/

# Check Docker
sudo docker-compose ps
```

## 📋 Nginx Configuration Check

Ensure these location blocks exist in `/etc/nginx/sites-available/discussit`:

```nginx
# Static files
location /static/ {
    alias /var/www/static/;
    expires 30d;
    access_log off;
}

# Angular assets
location /assets/ {
    alias /var/www/html/assets/;
    expires 30d;
    access_log off;
}

# Angular build files (root level)
location ~* \.(js|css|txt|ico|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|webp)$ {
    root /var/www/html;
    expires 30d;
    access_log off;
    add_header Cache-Control "public, max-age=31536000, immutable";
}
```

## 🚀 Quick Fix Script

Run this script to fix most issues:
```bash
cd /root/7
./full_build_and_deploy.sh
```

## 💡 Prevention Tips

1. **Always clean before building**: Remove old builds to avoid conflicts
2. **Use production mode**: Never deploy development builds
3. **Check file paths**: Ensure files are in correct locations
4. **Verify Nginx config**: Test configuration before restarting
5. **Test locally first**: Verify deployment works locally before production

## 🔍 Debugging Tips

**Issue**: White screen
- Check browser console for errors
- Verify all JS/CSS files load (Network tab)
- Check for 404 errors

**Issue**: Styling problems
- Verify CSS file paths
- Check Nginx serves CSS with correct MIME type
- Ensure no CORS issues

**Issue**: API not working
- Check Django is running
- Verify Nginx proxy settings
- Test API endpoints directly

## 📚 Useful Commands

```bash
# Check Nginx error logs
tail -50 /var/log/nginx/error.log

# Check Nginx access logs
tail -50 /var/log/nginx/access.log

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Check Docker logs
sudo docker-compose logs -f

# Rebuild Docker
sudo docker-compose up -d --build
```

## 🎯 Final Checks

✅ Angular files in `/var/www/html/`
✅ Static files in `/var/www/static/`
✅ Nginx configuration includes all location blocks
✅ File permissions set to www-data
✅ Docker containers running and healthy
✅ No 404 errors in browser console
✅ Application loads without development elements

---

**Need more help?** Check the main README.md or open an issue on GitHub.
