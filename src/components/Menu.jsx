import React, { useState, useMemo } from 'react'
import { Star, Leaf, Heart } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Menu = ({ categories, menuItems }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const { t } = useLanguage()

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return menuItems
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-burgundy-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-burgundy-50 hover:text-burgundy-600 border border-gray-200'
              }`}
            >
              {t(`menu.categories.${category.id}`)}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              {/* Item Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-6xl">{item.emoji || '🍽️'}</div>
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