"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const StartWebProject = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "website",
        budget: "",
        timeline: "",
        description: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-white">
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your App Project</h1>
                        <p className="text-xl text-gray-300">
                            Tell us about your project and we'll help bring your vision to life.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                                <input
                                    id="company"
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type</label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none"
                                    >
                                        <option value="website">Website</option>
                                        <option value="webapp">Web Application</option>
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="cms">Custom CMS</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none"
                                    >
                                        <option value="">Select Budget Range</option>
                                        <option value="5k-10k">$5,000 - $10,000</option>
                                        <option value="10k-25k">$10,000 - $25,000</option>
                                        <option value="25k-50k">$25,000 - $50,000</option>
                                        <option value="50k+">$50,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="timeline" className="block text-sm font-medium mb-2">Timeline</label>
                                <select
                                    id="timeline"
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none"
                                >
                                    <option value="">Select Timeline</option>
                                    <option value="1-2months">1-2 Months</option>
                                    <option value="2-3months">2-3 Months</option>
                                    <option value="3-6months">3-6 Months</option>
                                    <option value="6+months">6+ Months</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium mb-2">Project Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none"
                                    placeholder="Tell us about your project goals, requirements, and any specific features you'd like to include..."
                                />
                            </div>

                            <div className="flex justify-center gap-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                                >
                                    Submit Project
                                </button>
                                <Link
                                    href="/services/app-development"
                                    className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                                >
                                    Go Back
                                </Link>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default StartWebProject; 