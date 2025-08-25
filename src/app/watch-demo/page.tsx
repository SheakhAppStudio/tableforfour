'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function DemoStoryComponent() {
  const [currentStep, setCurrentStep] = useState(0);


  const demoSteps: DemoStep[] = [
    {
      title: "📱 New Booking Alert",
      subtitle: "Never miss a reservation again",
      description: "Sarah just booked a table for 4 at 7:30 PM tonight. You get an instant notification on your phone - even when you're busy in the kitchen.",
      mockup: {
        type: "notification",
        content: {
          customer: "Sarah Johnson",
          party: "4 people",
          time: "7:30 PM Today",
          table: "Table 12",
          status: "New Booking"
        }
      }
    },
    {
      title: "👆 Quick Review & Confirm",
      subtitle: "All details in one tap",
      description: "Tap to see everything you need to know. Customer preferences, special requests, dietary requirements, and contact info - all beautifully organized.",
      mockup: {
        type: "booking-detail",
        content: {
          customer: "Sarah Johnson",
          phone: "+44 7700 900123",
          party: "4 guests",
          time: "Tonight, 7:30 PM",
          table: "Table 12 (Window seat)",
          notes: "Celebrating anniversary 💕",
          dietary: "1 vegetarian",
          status: "Confirmed"
        }
      }
    },
    {
      title: "📊 Manage Your Evening",
      subtitle: "Your restaurant at a glance",
      description: "See all tonight's reservations in one beautiful view. Move tables with a swipe, update party sizes, handle walk-ins, and keep everything running smoothly.",
      mockup: {
        type: "dashboard",
        content: {
          date: "Tonight - March 15",
          occupancy: "85%",
          bookings: [
            { name: "Johnson Party", time: "6:00 PM", table: "Table 5", guests: "2", status: "seated" },
            { name: "Smith Family", time: "6:30 PM", table: "Table 8", guests: "5", status: "confirmed" },
            { name: "Brown Party", time: "7:00 PM", table: "Table 3", guests: "3", status: "on-way" },
            { name: "Sarah Johnson", time: "7:30 PM", table: "Table 12", guests: "4", status: "confirmed" },
            { name: "Wilson Party", time: "8:00 PM", table: "Table 7", guests: "6", status: "confirmed" }
          ]
        }
      }
    },
    {
      title: "⚡ Handle Changes Instantly",
      subtitle: "Flexibility when you need it most",
      description: "Customer running late? Party size changed? No problem. Update bookings instantly and send automatic notifications to keep everyone happy.",
      mockup: {
        type: "update",
        content: {
          customer: "Sarah Johnson",
          originalTime: "7:30 PM",
          newTime: "8:00 PM",
          message: "Running 30 mins late",
          action: "Updated & Confirmed"
        }
      }
    }
  ];

  // Auto-advance demo steps
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);


  interface DemoStep {
    title: string;
    subtitle: string;
    description: string;
    mockup: {
      type: "notification" | "booking-detail" | "dashboard" | "update";
      content: any;
    };
  }

  const MobileScreen = ({ step }: { step: DemoStep }) => (
    <motion.div
      key={step.mockup.type}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto w-72 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl"
    >
      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
        {/* Status bar */}
        <div className="bg-gray-50 px-6 py-3 flex justify-between items-center text-sm">
          <span className="font-medium">9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs">100%</span>
          </div>
        </div>

        {/* Content based on mockup type */}
        {step.mockup.type === "notification" && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            className="bg-white mx-4 mt-4 p-4 rounded-lg shadow-lg border-l-4 border-green-500"
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">T4</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 text-sm">New Booking</div>
                <div className="text-xs text-gray-600 mt-1">
                  {step.mockup.content.customer} • {step.mockup.content.party}
                </div>
                <div className="text-xs font-medium text-green-600 mt-1">
                  {step.mockup.content.time} • {step.mockup.content.table}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step.mockup.type === "booking-detail" && (
          <div className="p-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900">{step.mockup.content.customer}</h3>
                <p className="text-green-600 font-medium">{step.mockup.content.status}</p>
              </div>
              
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{step.mockup.content.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests:</span>
                  <span className="font-medium">{step.mockup.content.party}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Table:</span>
                  <span className="font-medium">{step.mockup.content.table}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium text-sm">{step.mockup.content.phone}</span>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                <p className="text-sm font-medium text-yellow-800">Special Notes</p>
                <p className="text-sm text-yellow-700">{step.mockup.content.notes}</p>
                <p className="text-sm text-yellow-700 mt-1">Dietary: {step.mockup.content.dietary}</p>
              </div>
            </motion.div>
          </div>
        )}

        {step.mockup.type === "dashboard" && (
          <div className="p-4">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">{step.mockup.content.date}</h3>
                <div className="bg-green-100 px-2 py-1 rounded">
                  <span className="text-green-800 text-xs font-medium">{step.mockup.content.occupancy} Full</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {step.mockup.content.bookings.map((booking : {name: string; time: string; table: string; guests: string; status: 'seated' | 'confirmed' | 'on-way'}, index : number) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className={`flex items-center justify-between p-3 rounded-lg border-l-4 ${
                      booking.status === 'seated' ? 'bg-green-50 border-green-500' :
                      booking.status === 'confirmed' ? 'bg-blue-50 border-blue-500' :
                      'bg-yellow-50 border-yellow-500'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-sm">{booking.name}</div>
                      <div className="text-xs text-gray-600">{booking.time} • {booking.table}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{booking.guests} guests</div>
                      <div className={`text-xs capitalize ${
                        booking.status === 'seated' ? 'text-green-600' :
                        booking.status === 'confirmed' ? 'text-blue-600' :
                        'text-yellow-600'
                      }`}>
                        {booking.status}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {step.mockup.type === "update" && (
          <div className="p-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Booking Updated</h3>
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer:</span>
                  <span className="font-medium">{step.mockup.content.customer}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time:</span>
                  <div className="text-right">
                    <div className="line-through text-red-500 text-sm">{step.mockup.content.originalTime}</div>
                    <div className="font-medium text-green-600">{step.mockup.content.newTime}</div>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-2 rounded">
                  <p className="text-sm text-blue-700">"{step.mockup.content.message}"</p>
                </div>
              </div>
              <div className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-medium">
                ✅ {step.mockup.content.action}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              See How Easy It Is To
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-900 block"
              >Manage Your Restaurant</motion.span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Watch how Sarah's table booking flows seamlessly from customer to kitchen. This is what modern restaurant management looks like.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="px-4 sm:px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Step {currentStep + 1} of {demoSteps.length}</span>
                <div className="flex space-x-1">
                  {demoSteps.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentStep ? 'bg-gray-900' : 'bg-gray-300'}`}
                      animate={{ scale: index === currentStep ? 1.2 : 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>
              </div>
              
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl font-bold text-gray-900"
              >
                {demoSteps[currentStep].title}
              </motion.h2>
              
              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-700 font-medium"
              >
                {demoSteps[currentStep].subtitle}
              </motion.h3>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                {demoSteps[currentStep].description}
              </motion.p>

              {/* Step Navigation */}
              <div className="flex space-x-2 pt-4">
                {demoSteps.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1 rounded text-sm transition-all ${
                      index === currentStep 
                        ? 'bg-gray-900 text-white' 
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Mobile Mockup Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <AnimatePresence mode="wait">
                <MobileScreen step={demoSteps[currentStep]} />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="px-4 sm:px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              This Is Just The Beginning
            </h2>
           <div className="grid md:grid-cols-3 gap-8 mb-12">
  {[
    {
      icon: "📱",
      title: "Mobile Management",
      description: "Our app (iPhone) lets your team manage bookings from anywhere, while customers book via any device."
    },
    {
      icon: "🌐",
      title: "Book From Anywhere",
      description: "Guests can reserve tables through your website URL on any device - no app required for customers."
    },
    {
      icon: "🎯",
      title: "Built for Restaurants",
      description: "Every feature designed specifically for restaurant workflows. Simple for staff, seamless for guests."
    }
  ].map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  ))}
</div>
          </motion.div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="px-4 sm:px-6 py-16 bg-gray-900" id='app-download'>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Download Our Mobile App
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Manage your restaurant from anywhere with our powerful mobile app
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg  transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </motion.a>
          
            </div>

            <p className="text-sm text-gray-400">
              Or visit <a href="https://tableforfour.co" className="text-white font-medium">tableforfour.co</a> on any mobile browser
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready To Transform Your Restaurant?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of restaurants already using Table For Four to streamline their operations and delight their customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="/get-started"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-black transition-colors shadow-lg"
              >
                🚀 Get Started Today
              </motion.a>
              
              <motion.a
                href="tel:+4407938419889"
                // onClick={() => setShowCallbackForm(!showCallbackForm)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
              >
                📞 Call For Queries
              </motion.a>
            </div>

            <p className="text-sm text-gray-500">
             Start for free and enjoy all the paid benefits for first 3 months, cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Callback Form Modal */}
      {/* <AnimatePresence>
        {showCallbackForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowCallbackForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.3 }}
                className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Chat About Your Restaurant</h3>
                <p className="text-gray-600 mb-6">Tell us a bit about your restaurant and we'll call you within 24 hours to discuss how Table For Four can help.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  />
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  >
                    <option value="">Best time to call?</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                  </select>
                  
                  <div className="flex gap-3 pt-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-black transition-colors"
                    >
                      Request Callback
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setShowCallbackForm(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence> */}
    </div>
  );
}