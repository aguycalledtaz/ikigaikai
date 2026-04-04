#!/bin/bash
# Run this script from inside the ikigaikai folder

echo "📁 Setting up git..."
git init
git add .
git commit -m "Initial commit: Add Ikigai Kai React website"

echo "🔗 Connecting to GitHub..."
git remote add origin https://github.com/aguycalledtaz/ikigaikai.git
git branch -M main

echo "🚀 Pushing to GitHub..."
git push -u origin main

echo "✅ Done! Check https://github.com/aguycalledtaz/ikigaikai"
