"use client"
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AppDevelopment = () => {
    const router = useRouter();
    const features = [
        {
            title: "Native iOS Development",
            description: "Build high-performance iOS applications using Swift and the latest Apple technologies.",
            icon: "🍎"
        },
        {
            title: "Native Android Development",
            description: "Create powerful Android apps with Kotlin and modern Android development practices.",
            icon: "🤖"
        },
        {
            title: "Cross-Platform Solutions",
            description: "Develop apps that work seamlessly across iOS and Android using React Native.",
            icon: "📱"
        },
        {
            title: "App Maintenance",
            description: "Ensure your app stays up-to-date with regular updates and performance optimization.",
            icon: "🔧"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-white">
            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Mobile App Development</h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Transform your ideas into powerful mobile applications. 
                            We create intuitive, high-performance apps that engage users and drive business growth.
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center"
                    >
                        <Link
                            href="/services/app-development/start-app-project"
                            className="bg-white text-gray-900 hover:cursor-pointer px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                        >
                            Start Your App Project
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AppDevelopment; 