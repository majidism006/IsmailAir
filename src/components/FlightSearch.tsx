import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Plane, Calendar, Users } from 'lucide-react'

const FlightSearch: React.FC = () => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search:', searchData)
  }

  return (
    <section className="min-h-screen bg-white pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Book Your Flight</h2>
          <p className="text-xl text-gray-600">Find the perfect flight for your journey</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* From */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From
                </label>
                <div className="relative">
                  <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Departure City"
                    value={searchData.from}
                    onChange={(e) => setSearchData({...searchData, from: e.target.value})}
                    className="input-field pl-10"
                    required
                  />
                </div>
              </div>

              {/* To */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To
                </label>
                <div className="relative">
                  <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Destination City"
                    value={searchData.to}
                    onChange={(e) => setSearchData({...searchData, to: e.target.value})}
                    className="input-field pl-10"
                    required
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={searchData.date}
                    onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                    className="input-field pl-10"
                    required
                  />
                </div>
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Passengers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={searchData.passengers}
                    onChange={(e) => setSearchData({...searchData, passengers: parseInt(e.target.value)})}
                    className="input-field pl-10"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              className="button-primary w-full text-lg py-4 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Search className="h-5 w-5" />
              <span>Search Flights</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default FlightSearch
