'use client';

import { TypingAnimation } from '@/components/magicui/typing-animation';
import { WordRotate } from '@/components/magicui/word-rotate';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Smart Table Booking for
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-900"
          > Your Restaurants</motion.span>
        </motion.h1>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Let customers book their table at your place easier than ever. Fast setup. No limits
        </motion.p>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
        >
          <Link href="/get-started">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-black transition-colors shadow-lg"
            >
              Get Started Today
            </motion.button>
          </Link>

          <Link href="/watch-demo">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
            >
            Watch Demo
          </motion.button>
          </Link>
        </motion.div>
        
        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
            <TypingAnimation startOnView={true} duration={100} className="text-3xl sm:text-4xl text-black mb-4">Made for restaurants like yours.</TypingAnimation>
          <div className="flex justify-center items-center space-x-4 opacity-60 font-semibold">
           
            <WordRotate
    className="text-4xl font-bold text-black dark:text-white"
      words={["Restaurant", "Bistro", "Cafe", "Diner"]}
    />
          </div>
        </motion.div>
      </div>
    </section>
  );
}