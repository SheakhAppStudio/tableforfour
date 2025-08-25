'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            No setup fees, no hidden costs. Everything you need in one monthly subscription.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 mx-auto max-w-md sm:max-w-none"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">Professional</h3>
            <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
              <span className="line-through text-gray-400 mr-2 text-2xl sm:text-3xl">£9.99</span>
              <span>£0.00</span>
              <span className="text-lg sm:text-xl text-gray-600 font-normal">/month</span>
            </div>
            <p className="text-sm sm:text-base text-gray-600">100% discount for first 3 months</p>
          </div>
          
          <ul className="text-left space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {[
              "Unlimited reservations",
              "Real-time availability", 
              "Mobile app included",
              "24/7 email support",
              "Custom branding",
              "Advanced analytics",
              "Email and SMS marketing from the app",
              "Multi-location support"
            ].map((feature, index) => (
              <motion.li 
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="flex items-start sm:items-center"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          <Link href="/get-started">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gray-900 text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-black transition-colors"
            >
              Get Started Today
            </motion.button>
          </Link>
          <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 text-center">
            Start for free and enjoy all the paid benefits for first 3 months, cancel anytime
          </p>
        </motion.div>
        
        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-600"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Pay only if you're satisfied</span>
        </motion.div>
      </div>
    </section>
  );
}