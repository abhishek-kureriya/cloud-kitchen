import React, { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'

const FloatingCallButton = ({ phone }) => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      // Check if desktop for different styling
      setIsDesktop(window.innerWidth >= 1024)
    }

    // Initial check
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
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

  // Always show the button now
  return (
    <>
      {/* Floating Call Button - Always visible on all devices */}
      <div className={`fixed bottom-6 right-4 lg:bottom-6 lg:right-6 z-50 transition-all duration-300 mobile-attention ${
        isMinimized ? 'transform scale-90' : ''
      }`}>
        {!isMinimized ? (
          /* Expanded Button */
          <div className="bg-accent-600 hover:bg-accent-700 text-white rounded-2xl lg:rounded-2xl shadow-2xl overflow-hidden ring-4 ring-accent-200 lg:ring-2">
            <div className="flex items-center">
              <button
                onClick={handleCall}
                className="flex items-center space-x-3 px-5 py-4 lg:px-6 lg:py-4 hover:bg-accent-700 transition-colors duration-200"
              >
                <div className="relative">
                  <Phone className="w-6 h-6 lg:w-6 lg:h-6 animate-bounce" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-3 lg:h-3 bg-red-500 rounded-full animate-ping"></div>
                </div>
                <div className="block">
                  <div className="text-base lg:text-base font-semibold">Ring nå</div>
                  <div className="text-xs opacity-90 block">{formatPhoneForDisplay(phone)}</div>
                </div>
              </button>
              
              {/* Only show minimize button on desktop */}
              {isDesktop && (
                <button
                  onClick={toggleMinimize}
                  className="p-3 hover:bg-accent-700 border-l border-accent-500 transition-colors duration-200"
                  aria-label="Minimize"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Minimized Button - Desktop only */
          isDesktop && (
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
          )
        )}
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
        
        @keyframes mobile-attention {
          0%, 100% { 
            transform: scale(1); 
          }
          50% { 
            transform: scale(1.05); 
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

        @media (max-width: 1023px) {
          .mobile-attention {
            animation: mobile-attention 3s ease-in-out infinite;
          }
        }
      `}</style>
    </>
  )
}

export default FloatingCallButton