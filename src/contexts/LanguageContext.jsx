import React, { createContext, useContext, useState } from 'react'
import translations from '../translations/translations.json'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('no') // Norwegian as default

  const t = (key) => {
    const keys = key.split('.')
    let translation = translations[currentLanguage]
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k]
      } else {
        // Fallback to English if Norwegian translation is missing
        translation = translations['en']
        for (const k of keys) {
          if (translation && translation[k]) {
            translation = translation[k]
          } else {
            return key // Return key if no translation found
          }
        }
        break
      }
    }
    
    return translation || key
  }

  const switchLanguage = (language) => {
    if (translations[language]) {
      setCurrentLanguage(language)
      localStorage.setItem('preferredLanguage', language)
    }
  }

  // Load saved language preference on mount
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage')
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      switchLanguage,
      t,
      availableLanguages: Object.keys(translations)
    }}>
      {children}
    </LanguageContext.Provider>
  )
}