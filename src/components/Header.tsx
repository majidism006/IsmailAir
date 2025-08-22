import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plane, Menu, X, Search, User, Globe } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

interface HeaderProps {
  onSectionChange: (section: string) => void
}

const Header: React.FC<HeaderProps> = ({ onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', section: 'hero' },
    { name: 'Book Flight', section: 'search' },
    { name: 'Our Fleet', section: 'showcase' },
    { name: 'Features', section: 'features' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onSectionChange('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Plane className="h-8 w-8 text-air-blue-600" />
              <motion.div
                className="absolute inset-0 bg-air-blue-600 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-2xl font-bold gradient-text">IsmailAir</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => onSectionChange(item.section)}
                className="text-gray-700 hover:text-air-blue-600 font-medium transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-air-blue-600 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              className="p-2 text-gray-600 hover:text-air-blue-600 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search className="h-5 w-5" />
            </motion.button>
            <motion.button
              className="p-2 text-gray-600 hover:text-air-blue-600 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Globe className="h-5 w-5" />
            </motion.button>
            <motion.button
              className="button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-gray-600 hover:text-air-blue-600 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      onSectionChange(item.section)
                      setIsMobileMenuOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-air-blue-600 hover:bg-air-blue-50 rounded-md transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <motion.button
                    className="w-full button-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
