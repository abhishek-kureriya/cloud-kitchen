# 📝 Menu Management Guide

This guide explains how to easily modify menu items and translations in your cloud kitchen website.

## 📁 File Structure

```
src/data/
├── menuData.json          # Menu structure & pricing
├── menuTranslations.json  # Text translations (EN/NO)
└── menu.json             # ⚠️ OLD FILE - can be deleted
```

## 🍽️ Adding New Menu Items

### Step 1: Add to menuData.json

1. Open `src/data/menuData.json`
2. Add new item to `menuItems` array:

```json
{
  "id": 13,
  "nameKey": "newDishName",
  "price": "199kr",
  "category": "mains",
  "image": "https://images.unsplash.com/photo-example",
  "dietary": ["vegetarian", "gluten-free"],
  "popular": false,
  "emoji": "🍛",
  "keyIngredients": ["ingredient1", "ingredient2", "ingredient3"]
}
```

### Step 2: Add translations to menuTranslations.json

1. Open `src/data/menuTranslations.json`
2. Add translations for both languages:

```json
{
  "en": {
    "menuItems": {
      "newDishName": {
        "name": "English Name",
        "description": "English description"
      }
    }
  },
  "no": {
    "menuItems": {
      "newDishName": {
        "name": "Norwegian Name", 
        "description": "Norwegian description"
      }
    }
  }
}
```

## 🏷️ Adding New Categories

### Step 1: Add to menuData.json categories

```json
{
  "id": "newCategory",
  "sortOrder": 5
}
```

### Step 2: Add translations

```json
{
  "en": {
    "categories": {
      "newCategory": {
        "name": "English Category",
        "description": "English description"
      }
    }
  },
  "no": {
    "categories": {
      "newCategory": {
        "name": "Norwegian Category",
        "description": "Norwegian description"
      }
    }
  }
}
```

## 💰 Updating Prices

Simply edit the `price` field in `menuData.json`:

```json
{
  "id": 1,
  "nameKey": "butterChicken",
  "price": "349kr", // ← Update this
  "category": "mains"
}
```

## 🖼️ Updating Images

1. Find a new image URL (Unsplash recommended)
2. Update the `image` field:

```json
{
  "image": "https://images.unsplash.com/photo-NEW-IMAGE-ID?w=400&h=300&fit=crop&auto=format"
}
```

## 🌍 Adding New Languages

### Step 1: Add language to menuTranslations.json

```json
{
  "en": { /* existing */ },
  "no": { /* existing */ },
  "de": {
    "categories": {
      "all": { "name": "Alle", "description": "..." },
      // ... add all categories
    },
    "menuItems": {
      "butterChicken": { "name": "...", "description": "..." },
      // ... add all menu items
    }
  }
}
```

### Step 2: Update Language Context

Add the new language to `src/contexts/LanguageContext.jsx` and `src/translations/translations.json`.

## 🔧 Technical Details

### How It Works

1. **menuData.json**: Contains structural data (IDs, prices, categories, images)
2. **menuTranslations.json**: Contains all translatable text
3. **useMenu hook**: Combines data with current language translations
4. **Components**: Use the hook to get translated menu data

### Benefits

- ✅ **Easy to edit**: Non-developers can modify menu and prices
- ✅ **Multi-language**: Support for any number of languages
- ✅ **Consistent**: Single source of truth for menu data
- ✅ **Maintainable**: Clear separation of data and translations

## 🚀 Deployment

After making changes:

1. Save your files
2. Test locally: `npm run dev`
3. Deploy: `npm run deploy`

Changes will be live in 2-3 minutes!

## 🆘 Common Issues

### Menu not showing after changes
- Check JSON syntax (use a JSON validator)
- Ensure `nameKey` in menuData matches key in menuTranslations
- Restart dev server: `npm run dev`

### Translation not working
- Check that both `en` and `no` have the same keys
- Verify language switching in browser

### Images not loading
- Use https:// URLs only
- Test image URL in browser first
- Recommended: Unsplash with `?w=400&h=300&fit=crop&auto=format`

---

**Pro Tip**: Keep a backup of your menu files before making major changes!