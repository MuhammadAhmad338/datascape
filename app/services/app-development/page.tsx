"use client"
import React from "react";
import { motion } from "framer-motion";
 import { FaMobile, FaCode, FaRobot, FaCloud, FaShieldAlt, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const AppDevelopment = () => {
    const features = [
        {
            title: "Native Mobile Apps",
            description: "Build high-performance iOS and Android applications using React Native and native technologies.",
            icon: FaMobile,
            color: "blue"
        },
        {
            title: "Cross-Platform Development",
            description: "Create apps that work seamlessly across multiple platforms with a single codebase.",
            icon: FaCode,
            color: "indigo"
        },
        {
            title: "AI & Machine Learning",
            description: "Integrate cutting-edge AI and ML features to make your app smarter and more intuitive.",
            icon: FaRobot,
            color: "purple"
        },
        {
            title: "Cloud Integration",
            description: "Seamlessly connect your app with cloud services for scalable and reliable performance.",
            icon: FaCloud,
            color: "pink"
        },
        {
            title: "Security & Compliance",
            description: "Implement robust security measures and ensure compliance with industry standards.",
            icon: FaShieldAlt,
            color: "blue"
        },
        {
            title: "Analytics & Insights",
            description: "Track user behavior and gather valuable insights to improve your app's performance.",
            icon: FaChartLine,
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
                        className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-[100px]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.15, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500 rounded-full filter blur-[100px]"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
                            App Development
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Build Powerful{" "}
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Mobile Experiences
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-8">
                            Transform your ideas into exceptional mobile applications. We create intuitive, 
                            feature-rich apps that users love and businesses trust.
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
                            Our App Development Services
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            From concept to launch, we deliver comprehensive mobile solutions that drive engagement and growth.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors"
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
                        className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Build Your App?
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                            Let's turn your app idea into reality. Our team of experts is ready to help you create 
                            the next big thing in mobile.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/services/app-development/start-app-project">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:cursor-pointer text-white px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                            >
                                Start Your Project
                            </motion.button>
                        </Link>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white/5 text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                            >
                                View Our Work
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AppDevelopment; 