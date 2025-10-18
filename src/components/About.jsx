import React from 'react'
import { Leaf, Users, Heart, Award, Clock, Truck } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const About = ({ restaurant }) => {
  const { t } = useLanguage()
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: t('about.values.freshness.title'),
      description: t('about.values.freshness.description')
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Expert Chefs",
      description: "Our culinary team brings years of experience and passion to create exceptional dining experiences."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description')
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: t('about.values.service.title'),
      description: t('about.values.service.description')
    }
  ]

  return (
    <section id="about" className="scroll-offset section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('about.title')} <span className="text-gradient">{restaurant.name}</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  {t('about.description1')}
                </p>
                <p>
                  {t('about.description2')}
                </p>
              </div>
            </div>

            {/* Quick Info - Cloud Kitchen Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Clock className="w-6 h-6 text-burgundy-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Leveringstider</h4>
                  <p className="text-sm text-gray-600">Man-Tor: 11:00-22:00</p>
                  <p className="text-sm text-gray-600">Fre-Lør: 11:00-23:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Truck className="w-6 h-6 text-burgundy-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Levering</h4>
                  <p className="text-sm text-gray-600">Oslo sentrum og omegn</p>
                  <p className="text-sm text-gray-600">30-45 min leveringstid</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop&auto=format"
                  alt="Indian spices and cooking"
                  className="w-full h-full object-cover animate-float"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div className="w-full h-full bg-gradient-to-br from-burgundy-100 via-burgundy-200 to-burgundy-300 flex items-center justify-center hidden">
                  <div className="text-8xl animate-float">
                    �
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-400 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-500 rounded-full opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('about.ourValues')} <span className="text-gradient"></span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md card-hover"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 bg-burgundy-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-burgundy-600 mb-2">9+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-burgundy-600 mb-2">50k+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-burgundy-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Menu Items</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-burgundy-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Expert Chefs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About