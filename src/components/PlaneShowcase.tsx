import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { Plane, Star, Users, Shield } from 'lucide-react'

function PlaneModel() {
  const { scene } = useGLTF('/plane.gltf')
  
  return <primitive object={scene} scale={0.5} position={[0, 0, 0]} />
}

const PlaneShowcase: React.FC = () => {
  const features = [
    { icon: Star, text: 'Premium Comfort', description: 'Luxurious seating with extra legroom' },
    { icon: Users, text: 'Expert Crew', description: 'Professional and friendly service' },
    { icon: Shield, text: 'Safety First', description: 'State-of-the-art safety systems' },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Fleet</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience luxury and comfort with our state-of-the-art aircraft
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Plane Model */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-96 lg:h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Suspense fallback={null}>
                <PlaneModel />
                <Environment preset="sunset" />
              </Suspense>
              <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
            </Canvas>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-air-blue-100 rounded-xl flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-air-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.text}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.button
              className="button-primary text-lg px-8 py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Aircraft
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PlaneShowcase
