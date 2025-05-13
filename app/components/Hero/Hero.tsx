"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 py-32 px-8 lg:py-44 text-white overflow-hidden">
            {/* Background Image with Enhanced Mask */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage: "url('https://your-image-url.com')",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
                }}
            ></div>

            <div className="container mb-12 mx-auto relative z-10 text-center mt-[-60px] md:mt-[-80px] px-4">
                {/* Hero Text with Framer Motion for Smoother Animation */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold mb-10 leading-snug tracking-wide"
                >
                    Transform Your Business with Cutting-Edge Solutions
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    At Datascape, we specialize in web development, app development, and enterprise applications. Let us help you
                    build robust digital solutions to elevate your business.
                </motion.p>

                {/* Enhanced Button with Ripple Effect */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-indigo-600 hover:cursor-pointer text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
                >
                    Learn More
                </motion.button>
            </div>
        </section>
    );
};

export default HeroComponent;
