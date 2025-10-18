import React from 'react'
import { Truck, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = ({ restaurant }) => {
  const { t } = useLanguage()
  const formatPhoneForDisplay = (phone) => {
    const cleaned = phone.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return phone
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
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              {restaurant.name}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={restaurant.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-burgundy-500 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={restaurant.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-burgundy-500 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={restaurant.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-burgundy-500 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-burgundy-400">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('nav.menu')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info & Delivery */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-burgundy-400">{t('footer.deliveryInfo')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Truck className="w-5 h-5 text-burgundy-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm leading-relaxed">
                  Oslo sentrum og omegn<br />
                  {t('footer.deliveryTime')}<br />
                  {t('footer.deliveryFee')}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-burgundy-400 flex-shrink-0" />
                <a
                  href={`tel:${restaurant.phone}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {formatPhoneForDisplay(restaurant.phone)}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-burgundy-400 flex-shrink-0" />
                <a
                  href={`mailto:${restaurant.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {restaurant.email}
                </a>
              </div>
            </div>
          </div>

          {/* Delivery Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-burgundy-400">{t('contact.deliveryHours')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-burgundy-400 flex-shrink-0" />
                <span className="text-gray-300 font-medium">Vi leverer</span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Man - Tor</span>
                  <span className="text-gray-300">{restaurant.hours.monday}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Fre - Lør</span>
                  <span className="text-gray-300">{restaurant.hours.friday}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Søndag</span>
                  <span className="text-gray-300">{restaurant.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {restaurant.name}. {t('footer.allRightsReserved')}
            </p>
            
            <div className="flex items-center space-x-6">
              <a
                href={`tel:${restaurant.phone}`}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t('nav.callNow')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer