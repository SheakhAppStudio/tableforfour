"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname.includes('/dashboard') || pathname.includes('/signin') || pathname.includes('/signup') || pathname.includes('/forgot-password') 
  || pathname.includes('/set-password') || pathname.includes('/bookings/restaurants')) {
return null
  }
  return (
      <footer className="px-6 py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            <div className="">
              <div className="text-2xl font-semibold text-white mb-4 flex items-center">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center">
            <Image src="https://res.cloudinary.com/dc3czyqsb/image/upload/v1754922079/WhatsApp_Image_2025-08-11_at_8.20.25_PM-removebg-preview_zrev4v.png" 
            alt="Table For Four" width={500} height={500}  />
          </div>
                Table For Four
              </div>
              <p className="text-gray-400">
                Making restaurant reservations simple for everyone.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold my-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/get-started" className="hover:text-white transition-colors">Get Started</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold my-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                {/* <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li> */}
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                {/* <li><a href="#" className="hover:text-white transition-colors">Status</a></li> */}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold my-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TableFor. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}