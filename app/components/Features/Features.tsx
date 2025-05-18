"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const features = [
    {
      title: "Web Development",
      description: "Build responsive and modern web applications with cutting-edge technologies. Our team specializes in creating scalable, high-performance websites tailored to your business needs, ensuring seamless user experiences across all devices.",
      icon: "🌐"
    },
    {
      title: "Mobile Development",
      description: "Create intuitive mobile apps for Android and iOS platforms. We design and develop feature-rich mobile solutions that engage users, leverage native device capabilities, and deliver outstanding performance and security.",
      icon: "📱"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions for data storage and management. Benefit from secure, reliable, and cost-effective cloud infrastructure, enabling your business to grow and adapt quickly in a dynamic digital landscape.",
      icon: "☁️"
    },
    {
      title: "UI/UX Design",
      description: "Craft visually stunning and user-friendly interfaces. Our UI/UX experts focus on usability, accessibility, and delightful experiences to ensure your product stands out and keeps users engaged.",
      icon: "🎨"
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics and visualization tools. Make informed decisions and drive business growth through actionable intelligence.",
      icon: "📊"
    },
    {
      title: "E-Commerce Solutions",
      description: "Launch and scale your online store with secure, feature-rich e-commerce platforms. We provide seamless shopping experiences, payment integrations, and inventory management.",
      icon: "🛒"
    },
    {
      title: "API Integration",
      description: "Connect your systems and automate workflows with robust API integrations. We ensure smooth data exchange and interoperability between your applications and third-party services.",
      icon: "🔗"
    },
    {
      title: "DevOps & Automation",
      description: "Accelerate development cycles and improve reliability with DevOps best practices and automation. We streamline deployment, monitoring, and scaling for your applications.",
      icon: "⚙️"
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-20">
      <div className="container hover:cursor-pointer mx-auto px-6 text-center">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">What We Offer</h2>
          <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Our Expertise</h3>
          <p className="mt-2 mb-4 max-w-2xl text-lg text-gray-500 mx-auto">
            Comprehensive solutions to elevate your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 pt-4 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl border border-gray-700"
              whileHover={{ scale: 1.01 }}
              onClick={() => setActiveFeature(index)}
            >
              <div className="text-6xl mb-4 p-2">
                {feature.icon}
              </div>
              <h3 className="text-2xl text-white font-semibold mb-4">{feature.title}</h3>
              <p className="text-white text-md mb-6">{feature.description}</p>
              <div className="mt-6">
                <button
                  className="inline-block hover:cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeFeature !== null && (
            <motion.div
              key={activeFeature}
              className="fixed top-0 right-0 w-96 h-full bg-blue-900 p-6 shadow-xl z-50"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{features[activeFeature].title}</h3>
                <button
                  className="text-white hover:text-gray-300"
                  onClick={() => setActiveFeature(null)}
                >
                  ✖️
                </button>
              </div>
              <p className="text-lg opacity-80">{features[activeFeature].description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Features;
