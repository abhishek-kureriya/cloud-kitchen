import React, { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const Header = ({ restaurant }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    closeMenu()
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/logo.png" 
                alt={restaurant.name}
                className="h-12 w-12 lg:h-14 lg:w-14 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <h1 className="text-xl lg:text-2xl font-bold text-gradient hidden">
                {restaurant.name}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-burgundy-600 font-medium transition-colors duration-200"
            >
              {t('nav.menu')}
            </button>
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-burgundy-600 font-medium transition-colors duration-200"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-burgundy-600 font-medium transition-colors duration-200"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-burgundy-600 font-medium transition-colors duration-200"
            >
              {t('nav.contact')}
            </button>
            <LanguageSwitcher />
            <a
              href={`tel:${restaurant.phone}`}
              className="btn-call"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('nav.callNow')}
            </a>
          </nav>

          {/* Mobile: Language Switcher + Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="px-4 pb-6 space-y-4">
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              {t('nav.menu')}
            </button>
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              {t('nav.contact')}
            </button>
            <a
              href={`tel:${restaurant.phone}`}
              className="btn-call w-full justify-center mt-4"
              onClick={closeMenu}
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('nav.callNow')}
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header