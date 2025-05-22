"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCode, FaMobile, FaPalette, FaCloud, FaChartLine } from "react-icons/fa";

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const services = [
        {
            title: "Web Development",
            description:
                "We specialize in building robust, fast, and responsive websites that are designed to meet your business needs. Our team leverages modern technologies like React and Node.js to create scalable and secure web applications.",
            icon: FaCode,
            color: "blue"
        },
        {
            title: "App Development",
            description:
                "Our mobile app development services deliver intuitive and high-performing applications for both iOS and Android, ensuring seamless user experiences and optimal performance.",
            icon: FaMobile,
            color: "indigo"
        },
        {
            title: "UI/UX Design",
            description:
                "We craft visually appealing and user-centric designs that enhance user experience and drive engagement. Our designs are both aesthetically pleasing and highly functional.",
            icon: FaPalette,
            color: "purple"
        },
        {
            title: "Cloud Computing",
            description:
                "Leverage the power of cloud computing to scale your business effortlessly. We offer cloud solutions including data storage, cloud migration, and server management to optimize your operations.",
            icon: FaCloud,
            color: "pink"
        },
        {
            title: "Enterprise Consulting",
            description:
                "Our experts provide strategic consulting to streamline business operations, implement scalable systems, and drive digital transformation to meet your business objectives.",
            icon: FaChartLine,
            color: "blue"
        },
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-blue-900 via-gray-800 to-gray-900 text-white overflow-hidden py-20">
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
                    <span className="text-blue-400 font-medium">What We Offer</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold mb-6 text-center"
                >
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Services</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto text-center"
                >
                    Comprehensive digital solutions to help your business thrive in the modern marketplace
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-${service.color}-500/30 transition-all duration-300`}
                        >
                            <div className={`w-12 h-12 rounded-xl bg-${service.color}-500/20 flex items-center justify-center mb-4`}>
                                <service.icon className={`w-6 h-6 text-${service.color}-400`} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-400 mb-6">{service.description}</p>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`bg-gradient-to-r from-${service.color}-600 to-${service.color}-700 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-${service.color}-500/25 transition-all duration-300`}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
