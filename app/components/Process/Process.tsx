"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaSearch, FaPalette, FaCode, FaRocket, FaTools } from "react-icons/fa";

const Process = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const steps = [
        {
            title: "Discovery",
            description: "Understanding your business goals, target audience, and project requirements to align our strategy effectively.",
            icon: FaSearch,
            color: "blue"
        },
        {
            title: "Design",
            description: "Crafting user-centric designs that are visually appealing and intuitive to use.",
            icon: FaPalette,
            color: "indigo"
        },
        {
            title: "Development",
            description: "Building robust and scalable digital solutions using the latest technologies.",
            icon: FaCode,
            color: "purple"
        },
        {
            title: "Deployment",
            description: "Launching the solution while ensuring optimal performance and security.",
            icon: FaRocket,
            color: "pink"
        },
        {
            title: "Support",
            description: "Providing ongoing support and maintenance to keep your solution running smoothly.",
            icon: FaTools,
            color: "blue"
        },
    ];

    const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' | 'shadow') => {
        const colorMap = {
            blue: {
                bg: 'bg-blue-500/20',
                text: 'text-blue-400',
                border: 'border-blue-500/30',
                shadow: 'shadow-blue-500/25'
            },
            indigo: {
                bg: 'bg-indigo-500/20',
                text: 'text-indigo-400',
                border: 'border-indigo-500/30',
                shadow: 'shadow-indigo-500/25'
            },
            purple: {
                bg: 'bg-purple-500/20',
                text: 'text-purple-400',
                border: 'border-purple-500/30',
                shadow: 'shadow-purple-500/25'
            },
            pink: {
                bg: 'bg-pink-500/20',
                text: 'text-pink-400',
                border: 'border-pink-500/30',
                shadow: 'shadow-pink-500/25'
            }
        };
        return colorMap[color as keyof typeof colorMap][type];
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden py-20">
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
                    <span className="text-blue-400 font-medium">How We Work</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold mb-6 text-center"
                >
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Process</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto text-center"
                >
                    A systematic approach to delivering exceptional digital solutions
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:${getColorClasses(step.color, 'border')} transition-all duration-300`}
                        >
                            <div className="relative">
                                <div className={`w-12 h-12 rounded-xl ${getColorClasses(step.color, 'bg')} flex items-center justify-center mb-4`}>
                                    <step.icon className={`w-6 h-6 ${getColorClasses(step.color, 'text')}`} />
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-white/10 to-transparent" />
                                )}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
