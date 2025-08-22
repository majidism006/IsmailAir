import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import FlightSearch from './components/FlightSearch'
import PlaneShowcase from './components/PlaneShowcase'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const [currentSection, setCurrentSection] = useState('hero')

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100">
      <Header onSectionChange={setCurrentSection} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {currentSection === 'hero' && <Hero />}
          {currentSection === 'search' && <FlightSearch />}
          {currentSection === 'showcase' && <PlaneShowcase />}
          {currentSection === 'features' && <Features />}
        </motion.div>
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}

export default App
