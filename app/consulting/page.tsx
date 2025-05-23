"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCloud, FaBuilding, FaPalette, FaChartLine, FaHandshake } from "react-icons/fa";
import Link from "next/link";

const Consulting = () => {
    const services = [
        {
            title: "Web & Mobile Development",
            description: "Building responsive and high-performance web and mobile applications.",
            icon: FaLaptopCode,
            color: "blue"
        },
        {
            title: "Cloud Services",
            description: "Empowering businesses with scalable cloud solutions.",
            icon: FaCloud,
            color: "indigo"
        },
        {
            title: "Enterprise Applications",
            description: "Creating robust applications tailored for large-scale operations.",
            icon: FaBuilding,
            color: "purple"
        },
        {
            title: "UI/UX Design",
            description: "Designing user-centric interfaces for impactful digital experiences.",
            icon: FaPalette,
            color: "pink"
        },
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
                        className="absolute top-20 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-[100px]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.15, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px]"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6">
                            Consulting Services
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Transform Your{" "}
                            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                Digital Future
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-8">
                            Expert consulting services to help your business thrive in the digital age. 
                            From web development to cloud solutions, we've got you covered.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Services
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Comprehensive solutions tailored to your business needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-colors"
                            >
                                <div className={`w-12 h-12 rounded-xl ${getColorClasses(service.color)} flex items-center justify-center mb-4`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                            Why Choose Us?
                        </h2>
                        <p className="text-gray-400 max-w-3xl mx-auto text-center mb-8">
                            Our team of experts is dedicated to delivering high-quality solutions tailored to meet your unique business needs. 
                            We focus on innovation, scalability, and user experience to ensure that your digital solutions stand out in the competitive market.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Start Project Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Start Your Project
                        </h2>
                        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                            <Link href="/services/web-development">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:cursor-pointer px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                                >
                                    Start Web Project
                                </motion.button>
                            </Link>
                            <Link href="/services/app-development">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:cursor-pointer px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                                >
                                    Start App Project
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Consulting;
