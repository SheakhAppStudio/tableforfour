'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

if (pathname.includes('/dashboard') || pathname.includes('/signin') || pathname.includes('/signup') || pathname.includes('/forgot-password') 
  || pathname.includes('/set-password') || pathname.includes('/bookings/restaurants')) {
return null
}
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-4 sm:px-6 py-5 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-xl z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <Link href="/">  <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex items-center "
          
        >
          <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
            <Image src="https://res.cloudinary.com/dc3czyqsb/image/upload/v1754921062/WhatsApp_Image_2025-08-11_at_7.48.20_PM-removebg-preview_pboqww.png" 
            alt="Table For Four" width={500} height={500}  />
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">
            Table For Four
          </span>
        </motion.div></Link>
        
        <div className="hidden md:flex items-center space-x-1">
          <motion.a 
            href="/features" 
            whileHover={{ y: -1 }}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
          >
            Features
          </motion.a>
          <motion.a 
            href="/pricing" 
            whileHover={{ y: -1 }}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
          >
            Pricing
          </motion.a>
          <motion.a 
            href="/contact" 
            whileHover={{ y: -1 }}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
          >
            Contact
          </motion.a>
          <div className="w-px h-6 bg-gray-200 mx-2"></div>
          <Link href="/get-started">
            <motion.button 
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-black transition-all duration-200 font-medium shadow-sm hover:shadow-md"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-2">
              <motion.a
                href="/features"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 4 }}
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
              >
                Features
              </motion.a>
              <motion.a
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 4 }}
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
              >
                Pricing
              </motion.a>
              <motion.a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 4 }}
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
              >
                Contact
              </motion.a>
              <div className="pt-2">
                <Link href="/get-started" className="block">
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-black transition-all duration-200 font-medium shadow-sm"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}