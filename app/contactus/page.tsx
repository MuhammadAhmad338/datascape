"use client"
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden py-20 pt-32">
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 mx-auto"
                >
                    <span className="text-blue-400 font-medium">Get in Touch</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold mb-6 text-center"
                >
                    Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Us</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto text-center"
                >
                    Have a question or want to work together? We'd love to hear from you.
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Email</h3>
                                        <p className="text-gray-400">contact@datascape.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                                        <FaPhone className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Phone</h3>
                                        <p className="text-gray-400">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Location</h3>
                                        <p className="text-gray-400">123 Innovation Street, Tech City, TC 12345</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors resize-none"
                                        required
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <FaPaperPlane className="w-4 h-4" />
                                    Send Message
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
