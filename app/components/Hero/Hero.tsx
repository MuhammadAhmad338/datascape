"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRocket, FaCode, FaServer, FaDatabase, FaCloud, FaMobile } from "react-icons/fa";

const HeroComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
                    
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden">
            {/* Main Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/image.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-10"
                    priority
                />
            </div>

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

            {/* Content Container */}
            <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
                        >
                            <span className="text-blue-400 font-medium">Welcome to Datascape</span>
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Transform Your Business with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                                Cutting-Edge
                            </span>{" "}
                            Solutions
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                            At Datascape, we specialize in web development, app development, and enterprise applications. Let us help you build robust digital solutions to elevate your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
                            >
                                <FaRocket className="w-5 h-5" />
                                Get Started
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                            >
                                <FaCode className="w-5 h-5" />
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Hero Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                                    <FaCloud className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
                                <p className="text-gray-400 text-sm">Scalable and secure cloud infrastructure for your business needs</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                            >
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                                    <FaMobile className="w-6 h-6 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                                <p className="text-gray-400 text-sm">Native and cross-platform mobile applications</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                            >
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                                    <FaServer className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                                <p className="text-gray-400 text-sm">Modern and responsive web applications</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                            >
                                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
                                    <FaDatabase className="w-6 h-6 text-pink-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
                                <p className="text-gray-400 text-sm">Powerful insights from your business data</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroComponent;
