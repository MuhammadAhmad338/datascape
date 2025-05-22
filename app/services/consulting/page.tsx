"use client"
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const EnterpriseConsulting = () => {
    const router = useRouter();
    const services = [
        {
            title: "Digital Transformation",
            description: "Guide your organization through digital transformation with strategic planning and implementation.",
            icon: "🔄"
        },
        {
            title: "Cloud Strategy",
            description: "Develop and implement cloud strategies to optimize your infrastructure and reduce costs.",
            icon: "☁️"
        },
        {
            title: "Process Optimization",
            description: "Streamline your business processes with data-driven insights and automation solutions.",
            icon: "⚡"
        },
        {
            title: "Technology Assessment",
            description: "Evaluate your current technology stack and recommend improvements for better efficiency.",
            icon: "🔍"
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Enterprise Consulting</h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Drive your business forward with expert consulting services. 
                            We help organizations optimize operations, implement new technologies, and achieve digital transformation.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
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
                        <button
                            onClick={() => router.push('/contactus')}
                            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Schedule a Consultation
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default EnterpriseConsulting; 