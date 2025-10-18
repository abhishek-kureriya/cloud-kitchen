# 🍽️ Indian Tadka Restaurant Menu

A modern, responsive restaurant menu web application built with React, Tailwind CSS, and Vite. Features a beautiful design, interactive menu filtering, and mobile-optimized experience with floating call buttons.

## ✨ Features

- **📱 Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **🍽️ Interactive Menu** - Filter by categories (Appetizers, Mains, Desserts, Beverages)
- **📞 Floating Call Button** - Always accessible call functionality
- **📊 JSON-Based Menu** - Easy content management through JSON data
- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **⚡ Fast Performance** - Built with Vite for optimal loading speeds
- **🌐 SEO Optimized** - Meta tags and semantic HTML for better search ranking

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Ready for Netlify/Vercel

## 🚀 Local Development Setup

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** (optional, for cloning)

To check if you have Node.js installed:
```bash
node --version
npm --version
```

### Step-by-Step Setup

#### 1. **Navigate to the project directory**
```bash
cd /Users/abhishekkureriya/Documents/LnD/Menu
```

#### 2. **Install dependencies**
```bash
# Using npm (recommended)
npm install

# OR using yarn
yarn install
```

This will install all required packages including:
- React & React DOM
- Tailwind CSS
- Vite
- Lucide React (for icons)
- ESLint (for code quality)

#### 3. **Start the development server**
```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

#### 4. **Open in browser**
The development server will start and automatically open your browser to:
```
http://localhost:3000
```

If it doesn't open automatically, copy and paste this URL into your browser.

### 🎯 What you should see

When the development server starts successfully, you should see:

1. **Terminal output** showing:
   ```
   VITE v4.5.0  ready in 500ms
   
   ➜  Local:   http://localhost:3000/
   ➜  Network: use --host to expose
   ```

2. **Browser displaying**:
   - Restaurant landing page with "Delicious Bites" header
   - Hero section with restaurant description
   - Interactive menu with filtering buttons
   - About section with restaurant information
   - Contact section with phone number
   - Floating call button (appears when scrolling)

### 🔧 Development Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check code quality with ESLint
npm run lint
```

### 📁 Project Structure
```
Menu/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Hero.jsx       # Landing section
│   │   ├── Menu.jsx       # Interactive menu
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact information
│   │   ├── Footer.jsx     # Site footer
│   │   └── FloatingCallButton.jsx # Call button
│   ├── data/
│   │   └── menu.json      # Menu items data
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies & scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS config
└── README.md            # This file
```

### 🎨 Customizing the App

#### **Edit Menu Items**
1. Open `src/data/menu.json`
2. Modify the `menuItems` array:
```json
{
  "id": 1,
  "name": "Your Dish Name",
  "description": "Dish description",
  "price": 15.00,
  "category": "appetizers",
  "dietary": ["vegetarian"],
  "popular": true,
  "ingredients": ["ingredient1", "ingredient2"]
}
```

#### **Change Restaurant Information**
Edit the `restaurant` object in `menu.json`:
```json
{
  "restaurant": {
    "name": "Your Restaurant Name",
    "phone": "+1234567890",
    "email": "info@yourrestaurant.com",
    "address": {
      "street": "123 Your Street",
      "city": "Your City",
      "state": "Your State",
      "zip": "12345"
    }
  }
}
```

#### **Modify Styling**
1. **Colors**: Edit `tailwind.config.js` to change the color scheme
2. **Fonts**: Update font imports in `src/index.css`
3. **Layout**: Modify component files in `src/components/`

### 🐛 Troubleshooting

#### **Port already in use**
If port 3000 is busy:
```bash
# Vite will automatically try the next available port
# Or specify a different port:
npm run dev -- --port 3001
```

#### **Dependencies issues**
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### **Hot reload not working**
```bash
# Restart the development server
# Press Ctrl+C to stop, then run npm run dev again
```

#### **Build errors**
```bash
# Check for ESLint errors
npm run lint

# Clear build cache
rm -rf dist
npm run build
```

### 📱 Testing Mobile View

1. **Chrome DevTools**:
   - Press F12 or right-click → Inspect
   - Click device icon (mobile/tablet view)
   - Test different screen sizes

2. **Local Network Testing**:
   ```bash
   # Start server with network access
   npm run dev -- --host
   ```
   Then access from mobile device using your computer's IP address.

### 🌐 Building for Production

When ready to deploy:

```bash
# Build the project
npm run build

# Test production build locally
npm run preview
```

The built files will be in the `dist/` folder, ready for deployment to any static hosting service.

### 📞 Call Button Features

The floating call button includes:
- **Desktop**: Expandable/minimizable floating button
- **Mobile**: Sticky bottom call bar + floating button
- **Click-to-call**: Works on mobile devices
- **Customizable**: Edit phone number in `menu.json`

### 🆘 Need Help?

If you encounter issues:

1. **Check Node.js version**: `node --version` (should be 18+)
2. **Clear browser cache**: Hard refresh (Ctrl+Shift+R)
3. **Check terminal**: Look for error messages
4. **Restart development server**: Stop (Ctrl+C) and run `npm run dev` again

---

**🎉 Your restaurant menu app is ready to customize and deploy!**

## 🍛 Indian Tadka Restaurant Features

**Indian Tadka** now serves as your restaurant's digital menu with all the modern features you need to showcase your culinary offerings and connect with customers.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 Customization

### Menu Items
Edit the menu data in `src/data/menu.json`:

```json
{
  "restaurant": {
    "name": "Your Restaurant Name",
    "phone": "+1234567890",
    "email": "info@yourrestaurant.com"
  },
  "menuItems": [
    {
      "id": 1,
      "name": "Dish Name",
      "description": "Dish description",
      "price": 15.00,
      "category": "appetizers",
      "dietary": ["vegetarian"],
      "popular": true
    }
  ]
}
```

### Restaurant Information
Update restaurant details in the same JSON file:
- Contact information
- Operating hours
- Address
- Social media links

### Styling
Customize colors and styling in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        400: '#d4a574', // Your brand color
        500: '#c19356',
      }
    }
  }
}
```

## 🌐 Deployment

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** to your hosting provider

## 📞 Call Button Features

- **Floating Button**: Appears after scrolling 100px
- **Minimizable**: Users can minimize the button if needed
- **Mobile Sticky Bar**: Full-width call bar on mobile devices
- **Click-to-Call**: Direct phone dialing on mobile devices

## 📱 Mobile Optimization

- Touch-friendly navigation
- Optimized button sizes
- Responsive grid layouts
- Mobile-first design approach
- Fast loading on mobile networks

## 🎨 Design Features

- **Smooth Animations**: CSS transitions and keyframe animations
- **Glass Effect**: Modern backdrop blur effects
- **Gradient Elements**: Beautiful gradient backgrounds
- **Hover Effects**: Interactive element states
- **Loading Animations**: Staggered element reveals

## 📊 Menu Data Structure

```json
{
  "id": 1,
  "name": "Dish Name",
  "description": "Detailed description",
  "price": 15.00,
  "category": "appetizers|mains|desserts|beverages",
  "dietary": ["vegetarian", "vegan", "gluten-free", "healthy"],
  "popular": true,
  "ingredients": ["ingredient1", "ingredient2"],
  "note": "Special preparation notes"
}
```

## 🔧 Configuration Files

- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS customization
- `netlify.toml` - Netlify deployment settings
- `vercel.json` - Vercel deployment settings

## 📈 Performance Optimizations

- Code splitting with Vite
- Optimized asset loading
- Minimal bundle size
- Efficient CSS with Tailwind
- Lazy loading for images

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@deliciousbites.com or create an issue in the repository.

---

**Made with ❤️ for restaurants everywhere**