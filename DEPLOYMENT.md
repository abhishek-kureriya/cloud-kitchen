# 🚀 Cloud Kitchen Deployment Guide

## 📋 Overview

This project is deployed using **GitHub Pages** with automated deployment. Your restaurant website is live at:

**🌐 Live Site**: https://abhishek-kureriya.github.io/cloud-kitchen

## 🏗️ How Deployment Works

### **Two-Branch System**

1. **`main` branch** (Source Code)
   - Contains your React source code
   - Components, styles, menu data
   - Development files (`src/`, `package.json`, etc.)

2. **`gh-pages` branch** (Built Files) 
   - Auto-created by deployment
   - Contains built static files (HTML, CSS, JS)
   - This is what GitHub serves to visitors

### **Deployment Process**

```mermaid
graph LR
    A[Edit Code] --> B[npm run deploy]
    B --> C[Vite Build]
    C --> D[gh-pages uploads to GitHub]
    D --> E[Live Site Updates]
```

When you run `npm run deploy`:

1. **Pre-deploy**: `npm run build` creates optimized files in `dist/`
2. **Deploy**: `gh-pages` pushes `dist/` contents to `gh-pages` branch
3. **GitHub**: Automatically serves the new files
4. **Result**: Your site updates in 1-2 minutes

## 🔧 Project Configuration

### **package.json**
```json
{
  "homepage": "https://abhishek-kureriya.github.io/cloud-kitchen",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### **vite.config.js**
```javascript
export default defineConfig({
  base: '/cloud-kitchen/',  // Important for GitHub Pages paths
  // ... other config
})
```

## 📝 How to Update Your Website

### **1. Update Menu Items**
```bash
# Edit menu data
nano src/data/menu.json

# Deploy changes
npm run deploy
```

### **2. Update Components/Styling**
```bash
# Edit any component
nano src/components/Menu.jsx

# Deploy changes
npm run deploy
```

### **3. Update Content**
```bash
# Edit restaurant info
nano src/data/menu.json

# Deploy changes
npm run deploy
```

## 🌐 Adding Custom Domain

### **Step 1: Purchase Domain**
- Buy domain from any registrar (GoDaddy, Namecheap, Cloudflare, etc.)
- Example: `yourrestaurant.com`

### **Step 2: Configure DNS**
Add these DNS records at your domain registrar:

```
Type: CNAME
Name: www
Value: abhishek-kureriya.github.io

Type: A
Name: @
Value: 185.199.108.153

Type: A  
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### **Step 3: Configure GitHub Pages**

1. Go to: https://github.com/abhishek-kureriya/cloud-kitchen/settings/pages
2. Scroll to "Custom domain"
3. Enter your domain: `yourrestaurant.com`
4. Check "Enforce HTTPS" (free SSL certificate)

### **Step 4: Update Project Configuration**

Update `package.json`:
```json
{
  "homepage": "https://yourrestaurant.com"
}
```

Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/',  // Change from '/cloud-kitchen/' to '/'
})
```

Redeploy:
```bash
npm run deploy
```

## 🔍 Troubleshooting

### **Site Not Loading**
- Wait 5-10 minutes after first deployment
- Check GitHub Pages settings: Settings → Pages → Source should be "gh-pages branch"

### **CSS/JS Not Loading**
- Ensure `base: '/cloud-kitchen/'` in `vite.config.js`
- Check browser console for 404 errors

### **Menu Updates Not Showing**
- Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- Check if deployment completed: `npm run deploy` shows "Published"

### **Custom Domain Not Working**
- DNS changes take 24-48 hours to propagate
- Use DNS checker: https://www.whatsmydns.net/
- Ensure CNAME file exists in gh-pages branch

## 📊 Deployment Status

### **Check Deployment Status**
- GitHub Actions: https://github.com/abhishek-kureriya/cloud-kitchen/actions
- Pages Settings: https://github.com/abhishek-kureriya/cloud-kitchen/settings/pages

### **Current Configuration**
- ✅ Automated deployment with `gh-pages`
- ✅ Optimized Vite build
- ✅ GitHub Pages hosting
- ⏳ Custom domain (when ready)

## 🚀 Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Deployment  
npm run deploy       # Build and deploy to GitHub Pages

# Build only
npm run build        # Create dist/ folder

# Preview build
npm run preview      # Test production build locally
```

## 📈 Benefits of This Setup

- ✅ **Free hosting** forever
- ✅ **Automatic deployments** 
- ✅ **Global CDN** (fast worldwide)
- ✅ **Free SSL** with custom domain
- ✅ **Version control** of deployments
- ✅ **Easy rollbacks** if needed

## 📞 Support

If you need help:
1. Check this README first
2. Test commands in terminal
3. Check GitHub Pages status
4. Verify DNS settings (for custom domain)

---

**Last Updated**: October 2024  
**Deployment Method**: GitHub Pages with gh-pages package  
**Build Tool**: Vite  
**Framework**: React