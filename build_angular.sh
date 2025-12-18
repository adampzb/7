#!/bin/bash

# Angular Build Script for DiscussIt
# This script builds the Angular frontend and prepares it for Django serving

echo "🚀 Starting Angular build process..."

# Navigate to Angular app directory
cd static/frontend/app || { echo "❌ Failed to find Angular app directory"; exit 1; }

echo "📦 Installing dependencies..."
npm install || { echo "❌ npm install failed"; exit 1; }

echo "🔨 Building Angular app for production..."
ng build --configuration=production --base-href=/ --deploy-url=/ || { echo "❌ Angular build failed"; exit 1; }

echo "📁 Copying built files to static..."
cp -r dist/* ../../../static/ || { echo "❌ Failed to copy files"; exit 1; }

echo "🔗 Creating symlinks for root-level files..."
cd ../../../..
ln -sf static/runtime.js runtime.js
ln -sf static/polyfills.js polyfills.js
ln -sf static/main.js main.js
ln -sf static/styles.css styles.css
ln -sf static/index.html index.html

echo "✅ Angular build completed successfully!"
echo "📝 Files ready to be served by Django"
