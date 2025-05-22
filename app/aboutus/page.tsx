"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaRocket, FaLightbulb, FaHeart } from "react-icons/fa";

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex flex-col py-20 lg:py-32 text-white overflow-hidden relative bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900">
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
                    <span className="text-blue-400 font-medium">Our Story</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold mb-6 text-center"
                >
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Datascape</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto text-center"
                >
                    At Datascape, we harness the power of technology to transform businesses into digital leaders. Our team of experts delivers exceptional solutions in web development, mobile apps, and enterprise systems, driving success in the modern digital landscape.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                            <FaRocket className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                        <p className="text-gray-400">
                            Empower businesses to achieve digital excellence through cutting-edge solutions and strategic insights.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                            <FaLightbulb className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                        <p className="text-gray-400">
                            To be a global leader in digital transformation, redefining industries with innovative technology.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                            <FaHeart className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                        <p className="text-gray-400">
                            Integrity, Innovation, and Impact – the core values that drive our every endeavor.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
                >
                    {[
                        { number: "500+", label: "Projects Completed" },
                        { number: "100+", label: "Team Members" },
                        { number: "50+", label: "Countries Served" },
                        { number: "99%", label: "Client Satisfaction" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <h4 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                                {stat.number}
                            </h4>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
