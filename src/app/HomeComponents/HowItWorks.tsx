'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
      <section className="px-4 sm:px-6 ">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your restaurant's booking experience
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                number: "1",
                title: "Set up & customize",
                description: "Create your account in 30 seconds. Add your restaurant details, set available times, table capacity, and special requirements. No technical knowledge needed."
              },
              {
                number: "2", 
                title: "Embed on your website",
                description: "Copy our simple booking URL and add it to your website's reservation button. Works with any platform like, WordPress, Squarespace, Wix, webflow or custom sites."
              },
              {
                number: "3",
                title: "Manage with our app",
                description: "View all reservations in real-time on your phone. Confirm bookings, manage customers, send reminders, and keep your restaurant running smoothly."
              }
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-2xl font-bold text-gray-900">{step.number}</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}