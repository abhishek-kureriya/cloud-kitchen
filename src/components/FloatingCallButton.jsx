import React, { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'

const FloatingCallButton = ({ phone }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Always show on mobile, show on desktop after scrolling 100px
      const isMobile = window.innerWidth < 1024
      setIsVisible(isMobile || window.scrollY > 100)
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const formatPhoneForDisplay = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return phoneNumber
  }

  const handleCall = () => {
    window.location.href = `tel:${phone}`
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Floating Call Button */}
      <div className={`fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-50 transition-all duration-300 ${
        isMinimized ? 'transform scale-90' : ''
      }`}>
        {!isMinimized ? (
          /* Expanded Button */
          <div className="bg-accent-600 hover:bg-accent-700 text-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center">
              <button
                onClick={handleCall}
                className="flex items-center space-x-3 px-4 py-3 lg:px-6 lg:py-4 hover:bg-accent-700 transition-colors duration-200"
              >
                <div className="relative">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 animate-bounce" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full animate-ping"></div>
                </div>
                <div className="block">
                  <div className="text-sm lg:text-base font-semibold">Ring nå</div>
                  <div className="text-xs opacity-90 hidden sm:block">{formatPhoneForDisplay(phone)}</div>
                </div>
              </button>
              
              <button
                onClick={toggleMinimize}
                className="p-2 lg:p-3 hover:bg-accent-700 border-l border-accent-500 transition-colors duration-200 hidden lg:block"
                aria-label="Minimize"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Minimized Button */
          <button
            onClick={toggleMinimize}
            className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center animate-pulse-slow transition-all duration-200 hover:scale-110"
            aria-label="Expand call button"
          >
            <div className="relative">
              <Phone className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </button>
        )}
      </div>

      {/* Mobile-only sticky bottom call bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-green-500 text-white p-4 shadow-2xl">
          <button
            onClick={handleCall}
            className="w-full flex items-center justify-center space-x-3 py-2 font-semibold text-lg"
          >
            <Phone className="w-6 h-6" />
            <span>Call {formatPhoneForDisplay(phone)}</span>
          </button>
        </div>
      </div>

      {/* Pulse animation for attraction */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .pulse-ring::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border: 3px solid #10b981;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  )
}

export default FloatingCallButton