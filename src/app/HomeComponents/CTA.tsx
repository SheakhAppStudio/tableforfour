'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Ready to transform your restaurant?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join 500+ restaurants already using TableFor to streamline their reservations and delight their customers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/get-started">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors shadow-lg"
              >
                Get Started Today
              </motion.button>
            </Link>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Schedule Demo
            </motion.a>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {/* <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">50K+</div>
              <div className="text-sm text-gray-400">Bookings/month</div>
            </div>
            <div className="text-center col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div> */}
          </motion.div>
        </div>
      </section>
  );
}