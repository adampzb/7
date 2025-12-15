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

echo "📁 Copying built files to staticfiles..."
cp -r dist/discussit-app/* ../../staticfiles/ || { echo "❌ Failed to copy files"; exit 1; }

echo "🔗 Creating symlinks for root-level files..."
cd ../../..
ln -sf staticfiles/runtime.js runtime.js
ln -sf staticfiles/polyfills.js polyfills.js
ln -sf staticfiles/main.js main.js
ln -sf staticfiles/styles.css styles.css
ln -sf staticfiles/index.html index.html

echo "✅ Angular build completed successfully!"
echo "📝 Files ready to be served by Django"
