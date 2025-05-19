"use client"
import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function GetStartedPage() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/lightning.jpg"
            alt="Technology Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900"></div>
        </div>
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-8"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm">
                <span className="flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Welcome to Datascape
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              Transform Your Ideas into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                Digital Reality
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
            >
              Let's build something amazing together. Choose your path to digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button
                onClick={() => router.push('/contactus')}
                className="bg-white text-black hover:cursor-pointer px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </button>
              <button
                onClick={() => router.push('/services')}
                className="bg-transparent border-2 border-white hover:cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Services
              </button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Web Development Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/web.jpg"
                  alt="Web Development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Web Development</h2>
                <p className="text-gray-600 mb-6">
                  Create stunning, responsive web applications with modern technologies. We specialize in building scalable and performant web solutions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    React & Next.js Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Responsive Design
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Performance Optimization
                  </li>
                </ul>
                <button
                  onClick={() => router.push('/contactus')}
                  className="bg-white text-black hover:cursor-pointer px-4 py-2  rounded-lg font-semibold border border-black"
                >
                  Start Web Project
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Development Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile Development</h2>
                <p className="text-gray-600 mb-6">
                  Build powerful mobile applications for iOS and Android platforms. We create native and cross-platform solutions that deliver exceptional user experiences.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    React Native Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Native iOS & Android
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Cross-platform Solutions
                  </li>
                </ul>
                <button
                  onClick={() => router.push('/contactus')}
                  className="bg-white text-black hover:cursor-pointer px-4 py-2  rounded-lg font-semibold border border-black"
                >
                  Start Mobile Project
                </button>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden order-1 md:order-2">
                <Image
                  src="/flutter.jpg"
                  alt="Mobile Development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
              </div>
            </div>
          </div>

          {/* Cloud Solutions Section */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/cloud.jpg"
                  alt="Cloud Solutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Solutions</h2>
                <p className="text-gray-600 mb-6">
                  Leverage the power of cloud infrastructure for scalable and secure applications. We help you migrate, optimize, and manage your cloud presence.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    AWS & Azure Solutions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Cloud Migration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    DevOps & Automation
                  </li>
                </ul>
                <button
                  onClick={() => router.push('/contactus')}
                                    className="bg-white text-black hover:cursor-pointer px-4 py-2  rounded-lg font-semibold border border-black"

                >
                  Start Cloud Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className=" bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => router.push('/contactus')}
              className="bg-white text-black hover:cursor-pointer px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Schedule a Consultation
            </button>
            <button
              onClick={() => router.push('/services')}
              className="bg-transparent border-2 border-white hover:cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}