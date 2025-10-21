import React, { useState, useMemo, useRef } from 'react'
import { Star, Leaf, Heart, Utensils, Coffee, Cookie, Wine, Wheat } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Menu = ({ categories, menuItems }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const { t } = useLanguage()
  const mobileScrollRef = useRef(null)

  // Category icons mapping
  const categoryIcons = {
    all: Utensils,
    appetizers: Leaf,
    mains: Heart,
    breads: Wheat,
    desserts: Cookie,
    beverages: Coffee
  }

  // Count items per category
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return menuItems.length
    if (categoryId === 'mains') {
      // Include both mains and breads in the mains count
      return menuItems.filter(item => item.category === 'mains' || item.category === 'breads').length
    }
    return menuItems.filter(item => item.category === categoryId).length
  }

  // Auto-scroll to selected category on mobile
  const handleCategorySelect = (categoryId, buttonElement) => {
    setActiveCategory(categoryId)
    
    // Auto-scroll on mobile to center the selected button
    if (mobileScrollRef.current && buttonElement && window.innerWidth < 768) {
      const container = mobileScrollRef.current
      const button = buttonElement
      
      const containerWidth = container.offsetWidth
      const buttonLeft = button.offsetLeft
      const buttonWidth = button.offsetWidth
      
      // Calculate scroll position to center the button
      const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2)
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return menuItems
    }
    if (activeCategory === 'mains') {
      // Show both main courses and breads when mains is selected
      return menuItems.filter(item => item.category === 'mains' || item.category === 'breads')
    }
    return menuItems.filter(item => item.category === activeCategory)
  }, [activeCategory, menuItems])

  return (
    <section id="menu" className="scroll-offset section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('menu.title')} <span className="text-gradient"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('menu.subtitle')}
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="mb-12">
          {/* Desktop: Centered layout */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.id] || Utensils
              const count = getCategoryCount(category.id)
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-burgundy-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-burgundy-50 hover:text-burgundy-600 border border-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-burgundy-500'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Mobile: Horizontal scroll with auto-scroll */}
          <div className="md:hidden">
            <div 
              ref={mobileScrollRef}
              className="flex gap-3 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide scroll-smooth"
            >
              {categories.map((category) => {
                const IconComponent = categoryIcons[category.id] || Utensils
                const count = getCategoryCount(category.id)
                
                return (
                  <button
                    key={category.id}
                    onClick={(e) => handleCategorySelect(category.id, e.currentTarget)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-burgundy-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm">{category.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-burgundy-500'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              {/* Item Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback with emoji */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center hidden">
                  <div className="text-6xl">{item.emoji || '🍽️'}</div>
                </div>
                {item.popular && (
                  <div className="absolute top-3 right-3 bg-burgundy-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    {t('menu.popular')}
                  </div>
                )}
              </div>

              {/* Item Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-xl font-bold text-burgundy-600 ml-4">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Ingredients */}
                {item.keyIngredients && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <Leaf className="w-4 h-4 mr-1 text-green-500" />
                      {t('menu.keyIngredients')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.keyIngredients.map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dietary Info */}
                {item.dietary && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.dietary.map((diet, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs rounded-full flex items-center ${
                          diet === 'vegetarian'
                            ? 'bg-green-100 text-green-700'
                            : diet === 'vegan'
                            ? 'bg-green-100 text-green-700'
                            : diet === 'gluten-free'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {diet === 'vegetarian' && <Heart className="w-3 h-3 mr-1" />}
                        {diet === 'vegan' && <Leaf className="w-3 h-3 mr-1" />}
                        {diet}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t('menu.readyToOrder')}
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              {t('menu.callToOrder')}
            </p>
            <a
              href="tel:+1234567890"
              className="btn-call text-xl px-8 py-4"
            >
              {t('nav.callNow')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu