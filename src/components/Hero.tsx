import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Shield, Clock } from 'lucide-react'

const Hero: React.FC = () => {
  const features = [
    { icon: Shield, text: 'Safe & Secure', color: 'text-green-500' },
    { icon: Clock, text: '24/7 Support', color: 'text-blue-500' },
    { icon: Star, text: 'Premium Service', color: 'text-yellow-500' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600">
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Floating Clouds */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-white/30 rounded-full blur-xl"
        animate={{ 
          x: [0, -80, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-6">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="block">Experience</span>
              <span className="block gradient-text bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Premium
              </span>
              <span className="block">Air Travel</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover the world with IsmailAir. Book your next adventure with our state-of-the-art fleet 
              and exceptional service that takes you beyond the ordinary.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="button-primary text-lg px-8 py-4 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Book Your Flight</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              className="button-secondary text-lg px-8 py-4 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="h-5 w-5" />
              <span>Watch Video</span>
            </motion.button>
          </motion.div>

          {/* Features */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                className="flex items-center space-x-2 text-white/90"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <feature.icon className={`h-5 w-5 ${feature.color}`} />
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
      <div className="absolute top-1/3 left-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce" />
    </section>
  )
}

export default Hero
