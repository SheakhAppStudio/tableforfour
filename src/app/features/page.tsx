'use client';

import { motion, } from 'framer-motion';
import { useState } from 'react';

export default function FeaturesPage() {


  const workflowSteps = [
    {
      step: "01",
      title: "Customer Books Online",
      description: "Your customers visit your website and click 'Reserve Table'. Our beautiful booking form opens instantly - no redirects, no delays.",
      details: [
        "Embedded directly on your website",
        "Mobile-optimized booking form",
        "Real-time availability checking",
        "Instant confirmation emails"
      ],
      icon: "🌐",
      color: "blue"
    },
    {
      step: "02",
      title: "You Get Notified Instantly",
      description: "The moment someone books, you receive a push notification on your phone with all the booking details.",
      details: [
        "Push notifications to your phone",
        "Email confirmations with details",
        "SMS alerts (optional)",
        "Desktop notifications available"
      ],
      icon: "📱",
      color: "green"
    },
    {
      step: "03",
      title: "Review & Confirm",
      description: "Open your mobile app to see customer details, special requests, and dietary requirements. Confirm or modify with one tap.",
      details: [
        "Customer contact information",
        "Special occasion notes",
        "Dietary restrictions & allergies",
        "Previous visit history"
      ],
      icon: "✅",
      color: "purple"
    },
    {
      step: "04",
      title: "Manage Your Day",
      description: "See all bookings in a beautiful dashboard. Move tables, handle walk-ins, and keep everything organized effortlessly.",
      details: [
        "Drag-and-drop table management",
        "Real-time occupancy tracking",
        "Walk-in integration",
        "Waitlist management"
      ],
      icon: "📊",
      color: "orange"
    },
    {
      step: "05",
      title: "Delight Your Guests",
      description: "Send automatic reminders, handle changes smoothly, and provide exceptional service that keeps customers coming back.",
      details: [
        "Automatic booking reminders",
        "Easy rebooking for changes",
        "Customer feedback collection",
        "Loyalty tracking"
      ],
      icon: "⭐",
      color: "red"
    }
  ];

  const features = [
    {
      category: "Booking Management",
      icon: "📅",
      items: [
        {
          name: "Real-Time Availability",
          description: "Customers see exactly when tables are free. No more double bookings or disappointed guests.",
          icon: "🕐"
        },
        {
          name: "Instant Notifications",
          description: "Get notified immediately when someone books. Push notifications, emails, and SMS options.",
          icon: "🔔"
        },
        {
          name: "Easy Modifications",
          description: "Change booking times, party sizes, or table assignments with simple drag-and-drop.",
          icon: "✏️"
        },
        {
          name: "Waitlist Management",
          description: "Automatically offer waitlist spots when fully booked. Notify guests when tables open up.",
          icon: "⏰"
        }
      ]
    },
    {
      category: "Customer Experience",
      icon: "❤️",
      items: [
        {
          name: "Mobile-First Design",
          description: "Beautiful booking forms that work perfectly on phones, tablets, and desktops.",
          icon: "📱"
        },
        {
          name: "No Account Required",
          description: "Customers book instantly without creating accounts. Reduce friction, increase bookings.",
          icon: "🚀"
        },
        {
          name: "Automatic Reminders",
          description: "Send booking confirmations and reminders automatically. Reduce no-shows significantly.",
          icon: "📬"
        },
        {
          name: "Special Requests",
          description: "Capture dietary requirements, special occasions, and seating preferences effortlessly.",
          icon: "🎂"
        }
      ]
    },
    {
      category: "Restaurant Operations",
      icon: "🏪",
      items: [
        {
          name: "Multi-Location Support",
          description: "Manage multiple restaurant locations from one dashboard. Perfect for restaurant groups.",
          icon: "🏢"
        },
        {
          name: "Staff Management",
          description: "Give your team controlled access. Servers, managers, and hosts get appropriate permissions.",
          icon: "👥"
        },
        {
          name: "Table Layout Manager",
          description: "Visual table management with drag-and-drop. See your restaurant layout at a glance.",
          icon: "🪑"
        },
        {
          name: "Integration Ready",
          description: "Works with your existing POS system, website, and other restaurant tools seamlessly.",
          icon: "🔌"
        }
      ]
    },
    {
      category: "Analytics & Insights",
      icon: "📈",
      items: [
        {
          name: "Booking Analytics",
          description: "Understand peak times, popular party sizes, and booking patterns to optimize operations.",
          icon: "📊"
        },
        {
          name: "Customer Insights",
          description: "Track repeat customers, preferences, and visit frequency to provide personalized service.",
          icon: "🎯"
        },
        {
          name: "Revenue Tracking",
          description: "Monitor booking trends and revenue patterns to make informed business decisions.",
          icon: "💰"
        },
        {
          name: "Performance Reports",
          description: "Weekly and monthly reports delivered to your inbox. Stay informed without logging in.",
          icon: "📋"
        }
      ]
    }
  ];

  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500", 
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    red: "bg-red-500"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need To
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-900 block"
              >Run Your Restaurant</motion.span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From the moment a customer clicks "book a table" to the moment they leave your restaurant - we've got every step covered with powerful, easy-to-use tools.
            </p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-black transition-colors shadow-lg">
                🚀 Get Stated Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 sm:px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Five simple steps that transform how your restaurant handles reservations
            </p>
          </motion.div>

          <div className="space-y-12">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 ${colorClasses[step.color as keyof typeof colorClasses]} rounded-full flex items-center justify-center text-white text-2xl font-bold`}
                    >
                      {step.step}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: detailIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 ${colorClasses[step.color as keyof typeof colorClasses]} rounded-full`}></div>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <motion.div 
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                      viewport={{ once: true }}
                      className="text-8xl mb-4"
                    >
                      {step.icon}
                    </motion.div>
                    <div className="text-lg font-medium text-gray-800 mb-2">
                      Step {step.step}
                    </div>
                    <div className="text-gray-600">
                      {step.title}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features Built For Restaurants
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Every feature designed to solve real restaurant problems and delight your customers
            </p>
          </motion.div>

          {features.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {category.items.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-3xl flex-shrink-0"
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.name}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Why Restaurant Owners Love Table For Four
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  stat: "50%",
                  label: "Fewer No-Shows",
                  description: "Automatic reminders and easy rebooking reduce no-shows dramatically"
                },
                {
                  stat: "5 min",
                  label: "Setup Time", 
                  description: "From signup to taking bookings - faster than making a cup of coffee"
                },
                {
                  stat: "24/7",
                  label: "Always Open",
                  description: "Customers can book anytime, even when your restaurant is closed"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-gray-900 mb-2"
                  >
                    {benefit.stat}
                  </motion.div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{benefit.label}</div>
                  <div className="text-gray-600">{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about Table For Four
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How quickly can I start taking bookings?",
                answer: "Most restaurants are taking bookings within 5 minutes of signing up. Just add your restaurant details, set your availability, and copy our booking URL to your website."
              },
              {
                question: "Do my customers need to create accounts?",
                answer: "No! Customers can book instantly without creating accounts. This reduces friction and increases bookings. We only ask for the essential information needed for their reservation."
              },
              {
                question: "Can I use this with my existing website?",
                answer: "Absolutely! Table For Four works with any website - WordPress, Squarespace, Wix, custom sites, even social media. Just replace your current booking button with our URL."
              },
              {
                question: "What if I need to change a booking?",
                answer: "Changes are simple! Use our mobile app to modify times, party sizes, or table assignments with drag-and-drop. Customers are automatically notified of any changes."
              },
              {
                question: "Is there a limit on bookings?",
                answer: "No limits! Take as many bookings as you want. Whether you're a small bistro or a busy restaurant group, Table For Four scales with your business."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
    </div>
  );
}