'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    currentBookingMethod: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              Table For Four
            </span>
          </Link>
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get started today
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            A member of our team will reach out shortly to discuss your needs and, if you'd like, give you a platform demo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-base font-semibold text-gray-900 mb-3">
                Your Name or Manager Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 text-gray-900 font-medium"
                placeholder="Enter your full name"
              />
            </div>

            {/* Contact Information */}
            <div>
              <label htmlFor="email" className="block text-base font-semibold text-gray-900 mb-3">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 text-gray-900 font-medium"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-base font-semibold text-gray-900 mb-3">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 text-gray-900 font-medium"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Restaurant Information */}
            <div>
              <label htmlFor="restaurantName" className="block text-base font-semibold text-gray-900 mb-3">
                Restaurant Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="restaurantName"
                name="restaurantName"
                required
                value={formData.restaurantName}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 text-gray-900 font-medium"
                placeholder="Enter your restaurant name"
              />
            </div>



            <div>
              <label htmlFor="currentBookingMethod" className="block text-base font-semibold text-gray-900 mb-3">
                How do you currently manage table reservations?
              </label>
              <select
                id="currentBookingMethod"
                name="currentBookingMethod"
                value={formData.currentBookingMethod}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 bg-white text-gray-900 font-medium"
              >
                <option value="">Please select your current method...</option>
                <option value="phone-calls">Phone calls only</option>
                <option value="walk-ins">Walk-ins only</option>
                <option value="third-party-platform">Third-party booking platform</option>
                <option value="manual-system">Manual booking system (paper/spreadsheet)</option>
                <option value="no-reservations">We don't currently take reservations</option>
                <option value="other">Other method</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg text-lg font-medium hover:bg-black transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Information
              </motion.button>
              <p className="text-sm text-gray-500 text-center mt-4">
                We'll contact you within 24 hours to get you set up
              </p>
            </div>
          </form>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500 mb-6">Trusted by over 2,500 restaurants worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-40">
            <div className="text-gray-400 font-semibold">Restaurant A</div>
            <div className="text-gray-400 font-semibold">Bistro B</div>
            <div className="text-gray-400 font-semibold">Cafe C</div>
            <div className="text-gray-400 font-semibold">Diner D</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
