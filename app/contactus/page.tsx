"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ContactUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 py-32 px-8 lg:py-44 text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage: "url('https://your-background-image-url.com')",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
                }}
            ></div>

            <div className="container mx-auto relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold mb-6 leading-snug tracking-wide"
                >
                    Get in Touch
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    We’d love to hear from you. Fill out the form below or send us an email at contact@datascape.com.
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
                    className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows={4}
                    ></textarea>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-indigo-600 hover:cursor-pointer text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactUs;
