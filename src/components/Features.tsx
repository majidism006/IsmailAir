import React from 'react'
import { motion } from 'framer-motion'
import { Wifi, Clock, Shield, Star, MapPin, CreditCard } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'Stay connected at 30,000 feet with complimentary high-speed internet'
    },
    {
      icon: Clock,
      title: 'Punctual Service',
      description: 'We value your time with 95% on-time departure rate'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Industry-leading safety standards and regular maintenance'
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: 'Award-winning customer service and luxury amenities'
    },
    {
      icon: MapPin,
      title: 'Global Network',
      description: 'Fly to over 100 destinations worldwide'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Multiple payment options and installment plans available'
    }
  ]

  return (
    <section className="min-h-screen bg-white pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose IsmailAir?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best flying experience with modern amenities and exceptional service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-air-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-air-blue-200 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-air-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
