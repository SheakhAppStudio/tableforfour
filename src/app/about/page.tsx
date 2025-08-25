'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const values = [
    {
      title: "Simplicity First",
      description: "We believe restaurant technology should be intuitive, not complicated. Every feature is designed to solve real problems without adding complexity.",
      icon: "⚡",
      details: [
        "One-click setup process",
        "Intuitive mobile interface", 
        "No technical knowledge required",
        "Clean, distraction-free design"
      ]
    },
    {
      title: "Customer-Obsessed",
      description: "Great restaurants put customers first, and so do we. Every decision we make is guided by what creates the best experience for diners.",
      icon: "❤️",
      details: [
        "No account creation required",
        "Mobile-first booking experience",
        "Instant confirmation emails",
        "Easy modification process"
      ]
    },
    {
      title: "Restaurant-Made",
      description: "Built by people who've worked in restaurants, for people who work in restaurants. We understand the unique challenges you face every day.",
      icon: "🍽️",
      details: [
        "Industry expertise since 2018",
        "Direct feedback from 500+ restaurants",
        "Features based on real needs",
        "Continuous improvement mindset"
      ]
    },
    {
      title: "Always Reliable",
      description: "Your business depends on reservations working flawlessly. We've built our platform to be rock-solid, with 100% uptime guaranteed.",
      icon: "🛡️",
      details: [
        "100% uptime guarantee",
        "Real-time backup systems",
        "24/7 monitoring",
        "Instant failover protection"
      ]
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "The Launch",
      description: "We introduced a smart restaurant booking platform designed to simplify reservations and improve customer experience. From the start, our focus has been on seamless, hassle free booking platform and easy to use admin app for restaurant owners.",
      icon: "💡"
    },
    {
      year: "2025",
      title: "Growing Strong",
      description: "Our team has been hard at work making the experience with powerful features like real-time booking updates, automated reminders, and direct marketing via email and text from admin app which is available on restaurants owners phone.",
      icon: "🔧"
    },
   
    {
      year: "",
      title: "Today",
      description: "Our platform is helping restaurant bookings by combining ease, efficiency, and smart marketing tools. Customer books from restaurants own website and restaurants owner receive those booking directly on the app which is installed on their own mobile phone.",
      icon: "🛡️"
    },
   
  ];

  const team = [
    {
      name: "Sheakh",
      role: "Co-Founder & Product Manager",
      description: "Sheakh works to make the product easy to use and helpful for restaurant teams every day.",
      avatar: "https://res.cloudinary.com/dc3czyqsb/image/upload/v1754926370/casual-young-man-portrait-flat-vector-character-illustration-casual-young-man-portrait-374258975_nlzzr5.webp"
    },
    {
      name: "Suhad",
      role: "Co-Founder",
      description: "With a deep passion for hospitality and technology, Suhad combines industry insight with innovative thinking to transform restaurant booking management easier than ever. The modern solution made peoples life easy.",
      avatar: "https://res.cloudinary.com/dc3czyqsb/image/upload/v1754926370/casual-young-man-portrait-flat-vector-character-illustration-casual-young-man-portrait-374258975_nlzzr5.webp"
    }
  ];

  const stats = [
    {  label: "Restaurants Trust Us", description: "From small bistros to restaurant groups" },
    {  label: "Bookings Monthly", description: "Processing reservations 24/7" },
    {label: "Uptime Guaranteed", description: "Rock-solid reliability you can count on" },
    {  label: "Average Setup Time", description: "5 Minutes to get started" },
    {  label: "Fewer No-Shows", description: "Thanks to automated reminders" },
    {  label: "Always Available", description: "Customers can book anytime" }
  ];

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
              We're On A Mission To
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-900 block"
              >Simplify Restaurant Life</motion.span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Born from years of restaurant experience, Table For Four exists to solve the real problems that restaurant owners and staff face every single day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 sm:px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              It Started With Frustration
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Picture this: It's a busy Saturday night. Your restaurant is packed, the kitchen is in full swing, and then it happens. A customer calls to make a reservation, but your booking system is down. Again.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  You scramble with pen and paper, trying to figure out if Table 12 is free at 8 PM while managing a frustrated customer and a stressed team. Sound familiar?
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This was our reality working in restaurants for years. We knew there had to be a better way.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-6xl mb-4"
              >
                😤
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Breaking Point</h3>
              <p className="text-gray-600">
                "There has to be a reservation system that actually works for restaurants, not against them."
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">So We Built One</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Table For Four was created by restaurant people, for restaurant people. Every feature solves a real problem we've experienced firsthand. No fluff, no complexity - just tools that work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
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
              What We Stand For
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveValue(index)}
                className={`bg-white rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                  activeValue === index ? 'ring-2 ring-gray-900 shadow-lg' : 'hover:shadow-lg'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-4xl flex-shrink-0"
                  >
                    {value.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{value.description}</p>
                    
                    <AnimatePresence>
                      {activeValue === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-100 pt-4"
                        >
                          <ul className="space-y-2">
                            {value.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detailIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                                className="flex items-center space-x-2 text-sm text-gray-700"
                              >
                                <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                                <span>{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              From idea to serving restaurants worldwide
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl z-10"
                  >
                    {item.icon}
                  </motion.div>
                  
                  <div className="flex-1 pb-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet The Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              The people behind Table For Four
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-center items-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-6xl mb-4"
                >
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              By The Numbers
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              The impact we're making together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-800 rounded-xl p-6"
              >
               
                <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Want To Join Our Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate restaurants to partner with. Let's build the future of dining together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/get-started"}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-black transition-colors shadow-lg"
              >
                Get Started Today
              </motion.button>
            </Link>

             <Link href={"/contact" }>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Any Queries ?
              </motion.button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}