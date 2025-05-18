"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex flex-col  py-32 px-8 lg:py-44 text-black overflow-hidden relative">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage: "url('https://your-background-image-url.com')",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 100%)",
                }}
            ></div>

            <div className="container mb-12 mx-auto relative z-10 text-center mt-[-60px] md:mt-[-80px] px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight tracking-wide"
                >
                    About Datascape
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-800 mb-10 max-w-3xl mx-auto"
                >
                    At Datascape, we harness the power of technology to transform businesses into digital leaders. Our team of experts delivers exceptional solutions in web development, mobile apps, and enterprise systems, driving success in the modern digital landscape.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
                    <motion.div
                        className="bg-gray-800 hover:cursor-pointer p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl text-white font-bold mb-4">Our Mission</h3>
                        <p className="text-white">
                            Empower businesses to achieve digital excellence through cutting-edge solutions and strategic insights.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-800 hover:cursor-pointer p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl text-white font-bold mb-4">Our Vision</h3>
                        <p className="text-white">
                            To be a global leader in digital transformation, redefining industries with innovative technology.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-800 hover:cursor-pointer p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl text-white font-bold mb-4">Our Values</h3>
                        <p className="text-white">
                            Integrity, Innovation, and Impact – the core values that drive our every endeavor.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
