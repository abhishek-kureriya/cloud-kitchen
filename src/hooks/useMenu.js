import { useMemo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import menuData from '../data/menuData.json'
import menuTranslations from '../data/menuTranslations.json'

export const useMenu = () => {
  const { currentLanguage } = useLanguage()

  const translatedMenuData = useMemo(() => {
    const currentLang = currentLanguage === 'no' ? 'no' : 'en'
    const translations = menuTranslations[currentLang]

    // Translate categories
    const translatedCategories = menuData.categories.map(category => ({
      ...category,
      name: translations.categories[category.id]?.name || category.id,
      description: translations.categories[category.id]?.description || ''
    }))

    // Translate menu items
    const translatedMenuItems = menuData.menuItems.map(item => ({
      ...item,
      name: translations.menuItems[item.nameKey]?.name || item.nameKey,
      description: translations.menuItems[item.nameKey]?.description || ''
    }))

    return {
      restaurant: menuData.restaurant,
      categories: translatedCategories,
      menuItems: translatedMenuItems
    }
  }, [currentLanguage])

  return translatedMenuData
}

export default useMenu