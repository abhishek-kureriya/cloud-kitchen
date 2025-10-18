import './index.css'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCallButton from './components/FloatingCallButton'
import { LanguageProvider } from './contexts/LanguageContext'
import menuData from './data/menu.json'

function App() {
  const { restaurant, categories, menuItems } = menuData

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header restaurant={restaurant} />
        <main>
          <Hero restaurant={restaurant} />
          <Menu categories={categories} menuItems={menuItems} />
          <About restaurant={restaurant} />
          <Contact restaurant={restaurant} />
        </main>
        <Footer restaurant={restaurant} />
        <FloatingCallButton phone={restaurant.phone} />
      </div>
    </LanguageProvider>
  )
}

export default App