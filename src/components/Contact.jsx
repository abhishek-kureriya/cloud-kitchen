import React from 'react'
import { Phone, Clock, Mail, Truck } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = ({ restaurant }) => {
  const { t } = useLanguage()
  const formatPhoneForDisplay = (phone) => {
    const cleaned = phone.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return phone
  }

  const hours = [
    { day: 'Monday - Thursday', time: restaurant.hours.monday },
    { day: 'Friday - Saturday', time: restaurant.hours.friday },
    { day: 'Sunday', time: restaurant.hours.sunday }
  ]

  return (
    <section id="contact" className="scroll-offset section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('contact.title')} <span className="text-gradient"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.getInTouch')}</h3>
            
            {/* Phone */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
              <Phone className="w-6 h-6 text-burgundy-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.phone')}</h4>
                <a 
                  href={`tel:${restaurant.phone}`}
                  className="text-burgundy-600 hover:text-primary-600 font-medium text-lg transition-colors duration-200"
                >
                  {formatPhoneForDisplay(restaurant.phone)}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
              <Mail className="w-6 h-6 text-burgundy-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.email')}</h4>
                <a 
                  href={`mailto:${restaurant.email}`}
                  className="text-burgundy-600 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  {restaurant.email}
                </a>
              </div>
            </div>

            {/* Delivery Hours */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
              <Clock className="w-6 h-6 text-burgundy-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('contact.deliveryHours')}</h4>
                <div className="space-y-2">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">{schedule.day}</span>
                      <span className="text-gray-700">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
              <Truck className="w-6 h-6 text-burgundy-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('contact.deliveryArea')}</h4>
                <p className="text-gray-600 mb-2">Oslo sentrum og omegn</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <div>• {t('contact.avgDeliveryTime')}: 30-45 min</div>
                  <div>• {t('contact.freeDelivery')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center max-w-md w-full">
              <div className="mb-6">
                <div className="w-20 h-20 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-10 h-10 text-burgundy-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('contact.readyToDine')}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {t('contact.callDescription')}
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${restaurant.phone}`}
                  className="btn-call text-xl px-8 py-4 w-full justify-center"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Call {formatPhoneForDisplay(restaurant.phone)}
                </a>
                
                <div className="text-sm text-gray-500">
                  {t('contact.availableDuringHours')}
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-burgundy-600">30-45min</div>
                    <div className="text-xs text-gray-600">{t('contact.avgDeliveryTime')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-burgundy-600">500kr+</div>
                    <div className="text-xs text-gray-600">{t('contact.freeDelivery')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Online Ordering Info */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-burgundy-600 to-burgundy-700 rounded-2xl p-8 lg:p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <Truck className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-bold mb-4">{t('contact.orderOnline')}</h3>
              <p className="text-lg mb-8 opacity-90">
                Ring oss direkte for å bestille, eller bruk vår online bestillingsplattform. 
                Vi leverer fersk, varm mat direkte til døren din!
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold mb-2">30-45 min</div>
                  <div className="opacity-75">Leveringstid</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">Gratis</div>
                  <div className="opacity-75">Over 500kr</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">Oslo</div>
                  <div className="opacity-75">Leveringsområde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact