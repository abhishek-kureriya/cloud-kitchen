import React from 'react'
import { Phone, ArrowDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = ({ restaurant }) => {
  const { t } = useLanguage()
  const scrollToMenu = () => {
    const element = document.getElementById('menu')
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

  const featuredItems = [
    { 
      name: "Butter Chicken", 
      price: "299kr", 
      emoji: "🍛",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop&auto=format"
    },
    { 
      name: "Biryani", 
      price: "259kr", 
      emoji: "🍚",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d7d3?w=300&h=300&fit=crop&auto=format"
    },
    { 
      name: "Naan Bread", 
      price: "49kr", 
      emoji: "🫓",
      image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=300&h=300&fit=crop&auto=format"
    }
  ]

  return (
    <section id="home" className="scroll-offset bg-gradient-to-br from-burgundy-50 via-white to-accent-50 min-h-screen flex items-center pt-20">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.welcome')}{' '}
              <span className="text-gradient">{restaurant.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.tagline')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToMenu}
                className="btn-primary text-lg px-8 py-4"
              >
                {t('hero.viewMenu')}
                <ArrowDown className="w-5 h-5 ml-2" />
              </button>
              <a
                href={`tel:${restaurant.phone}`}
                className="btn-call text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('nav.callNow')}
              </a>
            </div>
          </div>

          {/* Hero Logo - Hidden on mobile, show featured dishes instead */}
          <div className="hidden lg:flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Main logo container - removed circular background to let logo shine */}
              <div className="w-80 h-80 md:w-96 md:h-96 flex items-center justify-center animate-float">
                <img 
                  src="/cloud-kitchen/assets/logo.png" 
                  alt="Indian Tadka - Ekte Indisk Mat"
                  className="w-full h-full object-contain drop-shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback design if logo doesn't load */}
                <div className="w-full h-full bg-gradient-to-br from-burgundy-500 via-burgundy-600 to-burgundy-700 rounded-2xl flex items-center justify-center shadow-2xl animate-float hidden">
                  <div className="text-white text-6xl md:text-7xl">
                    🍽️
                  </div>
                </div>
              </div>
              {/* Decorative elements around the logo */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-300 rounded-full opacity-40 animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent-400 rounded-full opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-burgundy-300 rounded-full opacity-25 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Mobile Featured Dishes - Show on mobile instead of logo */}
          <div className="lg:hidden">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t('hero.featuredDishes')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {featuredItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center overflow-hidden"
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-2xl hidden">
                      {item.emoji}
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">{item.name}</h4>
                  <p className="text-burgundy-600 font-bold text-lg">{item.price}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button
                onClick={scrollToMenu}
                className="btn-secondary text-sm px-6 py-3"
              >
                {t('hero.viewFullMenu')}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16 animate-bounce">
          <button
            onClick={scrollToMenu}
            className="text-gray-400 hover:text-burgundy-600 transition-colors duration-300"
            aria-label="Scroll to menu"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>

        {/* Featured Menu Items Preview - Desktop only */}
        <div className="mt-20 text-center hidden lg:block">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {t('hero.featuredDishes')} <span className="text-gradient"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {featuredItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-4xl hidden">
                    {item.emoji}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h4>
                <p className="text-burgundy-600 font-bold text-xl">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button
              onClick={scrollToMenu}
              className="btn-primary text-lg px-8 py-4"
            >
              {t('hero.viewFullMenu')}
              <ArrowDown className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero