"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ContactUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Message sent successfully! We will get back to you soon.'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    We'd love to hear from you. Fill out the form below or send us an email at contact@datascape.com.
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
                    className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows={4}
                    ></textarea>

                    {submitStatus.type && (
                        <div className={`p-4 rounded-md ${
                            submitStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                            {submitStatus.message}
                        </div>
                    )}

                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-indigo-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-all duration-300 ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
                        }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactUs;
