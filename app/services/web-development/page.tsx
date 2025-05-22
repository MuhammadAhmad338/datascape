"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaShoppingCart, FaMobile, FaDatabase, FaServer, FaTools } from "react-icons/fa";
import Link from "next/link";

const WebDevelopment = () => {
    const features = [
        {
            title: "Modern Web Applications",
            description: "Build responsive and scalable web applications using React, Next.js, and other cutting-edge technologies.",
            icon: FaCode,
            color: "blue"
        },
        {
            title: "E-commerce Solutions",
            description: "Create powerful online stores with secure payment processing and inventory management.",
            icon: FaShoppingCart,
            color: "indigo"
        },
        {
            title: "Progressive Web Apps",
            description: "Develop PWAs that work offline and provide native app-like experiences.",
            icon: FaMobile,
            color: "purple"
        },
        {
            title: "Custom CMS",
            description: "Build tailored content management systems for your specific business needs.",
            icon: FaDatabase,
            color: "pink"
        },
        {
            title: "Backend Development",
            description: "Robust server-side solutions with Node.js, Python, and cloud technologies.",
            icon: FaServer,
            color: "blue"
        },
        {
            title: "Maintenance & Support",
            description: "Ongoing technical support and maintenance to keep your applications running smoothly.",
            icon: FaTools,
            color: "indigo"
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: { [key: string]: string } = {
            blue: "text-blue-400 bg-blue-500/10",
            indigo: "text-indigo-400 bg-indigo-500/10",
            purple: "text-purple-400 bg-purple-500/10",
            pink: "text-pink-400 bg-pink-500/10"
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
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

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                            Web Development
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Transform Your Digital{" "}
                            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                                Presence
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-8">
                            We create responsive, scalable, and high-performance websites that drive business growth. 
                            Our expert team uses cutting-edge technologies to bring your vision to life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Web Development Services
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            From simple websites to complex web applications, we deliver solutions that meet your business needs.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors"
                            >
                                <div className={`w-12 h-12 rounded-xl ${getColorClasses(feature.color)} flex items-center justify-center mb-4`}>
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                            Let's discuss how we can help you achieve your digital goals. Our team is ready to bring your vision to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                            >
                                Start Your Project
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white/5 text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopment; 