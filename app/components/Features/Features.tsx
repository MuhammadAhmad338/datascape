"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaMobile, FaCloud, FaPalette, FaChartLine, FaShoppingCart, FaLink, FaCogs } from 'react-icons/fa';
import React from 'react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Web Development",
      description: "Build responsive and modern web applications with cutting-edge technologies. Our team specializes in creating scalable, high-performance websites tailored to your business needs, ensuring seamless user experiences across all devices.",
      icon: FaCode,
      color: "blue"
    },
    {
      title: "Mobile Development",
      description: "Create intuitive mobile apps for Android and iOS platforms. We design and develop feature-rich mobile solutions that engage users, leverage native device capabilities, and deliver outstanding performance and security.",
      icon: FaMobile,
      color: "indigo"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions for data storage and management. Benefit from secure, reliable, and cost-effective cloud infrastructure, enabling your business to grow and adapt quickly in a dynamic digital landscape.",
      icon: FaCloud,
      color: "purple"
    },
    {
      title: "UI/UX Design",
      description: "Craft visually stunning and user-friendly interfaces. Our UI/UX experts focus on usability, accessibility, and delightful experiences to ensure your product stands out and keeps users engaged.",
      icon: FaPalette,
      color: "pink"
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics and visualization tools. Make informed decisions and drive business growth through actionable intelligence.",
      icon: FaChartLine,
      color: "blue"
    },
    {
      title: "E-Commerce Solutions",
      description: "Launch and scale your online store with secure, feature-rich e-commerce platforms. We provide seamless shopping experiences, payment integrations, and inventory management.",
      icon: FaShoppingCart,
      color: "indigo"
    },
    {
      title: "API Integration",
      description: "Connect your systems and automate workflows with robust API integrations. We ensure smooth data exchange and interoperability between your applications and third-party services.",
      icon: FaLink,
      color: "purple"
    },
    {
      title: "DevOps & Automation",
      description: "Accelerate development cycles and improve reliability with DevOps best practices and automation. We streamline deployment, monitoring, and scaling for your applications.",
      icon: FaCogs,
      color: "pink"
    },
  ];

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' | 'shadow') => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500/30',
        shadow: 'shadow-blue-500/25'
      },
      indigo: {
        bg: 'bg-indigo-500/20',
        text: 'text-indigo-400',
        border: 'border-indigo-500/30',
        shadow: 'shadow-indigo-500/25'
      },
      purple: {
        bg: 'bg-purple-500/20',
        text: 'text-purple-400',
        border: 'border-purple-500/30',
        shadow: 'shadow-purple-500/25'
      },
      pink: {
        bg: 'bg-pink-500/20',
        text: 'text-pink-400',
        border: 'border-pink-500/30',
        shadow: 'shadow-pink-500/25'
      }
    };
    return colorMap[color as keyof typeof colorMap][type];
  };

  const getGradientClasses = (color: string) => {
    const gradientMap = {
      blue: 'from-blue-600 to-blue-700',
      indigo: 'from-indigo-600 to-indigo-700',
      purple: 'from-purple-600 to-purple-700',
      pink: 'from-pink-600 to-pink-700'
    };
    return gradientMap[color as keyof typeof gradientMap];
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-[100px]"
        />
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 mx-auto"
        >
          <span className="text-blue-400 font-medium">Our Expertise</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Features</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto text-center"
        >
          Comprehensive solutions to elevate your digital presence
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setActiveFeature(index)}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:${getColorClasses(feature.color, 'border')} transition-all duration-300 cursor-pointer`}
            >
              <div className={`w-12 h-12 rounded-xl ${getColorClasses(feature.color, 'bg')} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${getColorClasses(feature.color, 'text')}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-6 line-clamp-3">{feature.description}</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`bg-gradient-to-r ${getGradientClasses(feature.color)} text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:${getColorClasses(feature.color, 'shadow')} transition-all duration-300`}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeFeature !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setActiveFeature(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full border border-white/10 relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  type="button"
                  aria-label="Close modal"
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                  onClick={() => setActiveFeature(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                {activeFeature !== null && (
                  <>
                    <div className={`w-16 h-16 rounded-xl ${getColorClasses(features[activeFeature].color, 'bg')} flex items-center justify-center mb-6`}>
                      {React.createElement(features[activeFeature].icon, {
                        className: `w-8 h-8 ${getColorClasses(features[activeFeature].color, 'text')}`
                      })}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{features[activeFeature].title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{features[activeFeature].description}</p>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Features;
