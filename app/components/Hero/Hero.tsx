"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
                    
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden shadow-2xl">
            {/* Main Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/image.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"
                />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 py-32 lg:py-44 relative z-10 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                            Transform Your Business with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                Cutting-Edge
                            </span>{" "}
                            Solutions
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                            At Datascape, we specialize in web development, app development, and enterprise applications. Let us help you build robust digital solutions to elevate your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:cursor-pointer"
                            >
                                Get Started
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:cursor-pointer"
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full h-[400px]">
                            {/* <Image
                                src="/images/hero-main.png"
                                alt="Hero Illustration"
                                fill
                                className="object-contain"
                                priority
                            /> */}
                        </div>
                        {/* Floating Elements */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute top-10 right-10 w-20 h-20"
                        >
                            {/* <Image
                                src="/images/tech-icon-1.png"
                                alt="Technology Icon"
                                fill
                                className="object-contain"
                            /> */}
                        </motion.div>
                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                            className="absolute bottom-10 left-10 w-20 h-20"
                        >
                            {/* <Image
                                src="/images/tech-icon-2.png"
                                alt="Technology Icon"
                                fill
                                className="object-contain"
                            /> */}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroComponent;
