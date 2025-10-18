#!/bin/bash

# 🍛 Indian Tadka Restaurant Menu - Local Setup Script
# This script will set up your local development environment

echo "🍛  Setting up Indian Tadka Restaurant Menu..."
echo "=============================================="bash

# � India Tadka Restaurant Menu - Local Setup Script
# This script will set up your local development environment

echo "�  Setting up India Tadka Restaurant Menu..."
echo "=============================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version)
echo "✅ Node.js version: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

NPM_VERSION=$(npm --version)
echo "✅ npm version: $NPM_VERSION"

echo ""
echo "📦 Installing dependencies..."
echo "This may take a few minutes..."

# Install dependencies
if npm install; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies. Please check the error messages above."
    exit 1
fi

echo ""
echo "🎨 Setting up Tailwind CSS..."

# Ensure Tailwind is properly configured
if [ -f "tailwind.config.js" ]; then
    echo "✅ Tailwind CSS configuration found"
else
    echo "❌ Tailwind CSS configuration missing"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "🚀 To start the development server, run:"
echo "   npm run dev"
echo ""
echo "📱 The app will open at: http://localhost:3000"
echo ""
echo "📝 To customize your menu:"
echo "   Edit: src/data/menu.json"
echo ""
echo "🎨 To customize styling:"
echo "   Edit: tailwind.config.js"
echo ""
echo "Happy coding! �"