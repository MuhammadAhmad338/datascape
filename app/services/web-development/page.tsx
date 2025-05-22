"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WebDevelopment = () => {
    const router = useRouter();
    const features = [
        {
            title: "Modern Web Applications",
            description: "Build responsive and scalable web applications using React, Next.js, and other cutting-edge technologies.",
            icon: "💻"
        },
        {
            title: "E-commerce Solutions",
            description: "Create powerful online stores with secure payment processing and inventory management.",
            icon: "🛒"
        },
        {
            title: "Progressive Web Apps",
            description: "Develop PWAs that work offline and provide native app-like experiences.",
            icon: "📱"
        },
        {
            title: "Custom CMS",
            description: "Build tailored content management systems for your specific business needs.",
            icon: "📝"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-white">
            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Web Development Services</h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Transform your digital presence with our cutting-edge web development solutions. 
                            We create responsive, scalable, and high-performance websites that drive business growth.
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center"
                    >
                        <button
                            onClick={() => router.push('/contactus')}
                            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Start Your Web Project
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopment; 