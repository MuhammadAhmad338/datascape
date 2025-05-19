"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex flex-col py-32 px-8 lg:py-44 text-white overflow-hidden relative bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20 blur-lg"
                style={{
                    backgroundImage: "url('https://your-background-image-url.com')",
                }}
            ></div>

            <div className="container mx-auto relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold mb-8 tracking-wide drop-shadow-lg"
                >
                    About Datascape
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto drop-shadow-lg"
                >
                    At Datascape, we harness the power of technology to transform businesses into digital leaders. Our team of experts delivers exceptional solutions in web development, mobile apps, and enterprise systems, driving success in the modern digital landscape.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {['Our Mission', 'Our Vision', 'Our Values'].map((title, index) => (
                        <motion.div
                            key={index}
                            className="bg-white bg-opacity-60 p-6 rounded-lg hover:cursor-pointer"
                        >
                            <h3 className="text-xl text-black font-semibold mb-4">{title}</h3>
                            <p className="text-gray-600 text-md mb-6">
                                {title === 'Our Mission' && 'Empower businesses to achieve digital excellence through cutting-edge solutions and strategic insights.'}
                                {title === 'Our Vision' && 'To be a global leader in digital transformation, redefining industries with innovative technology.'}
                                {title === 'Our Values' && 'Integrity, Innovation, and Impact – the core values that drive our every endeavor.'}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
