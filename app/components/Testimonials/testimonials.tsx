"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStart",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
            quote: "Working with this team has been transformative for our business. Their innovative approach and attention to detail have helped us achieve remarkable results.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "CTO, InnovateX",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
            quote: "The level of expertise and professionalism demonstrated by the team is outstanding. They delivered our project on time and exceeded our expectations.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "Marketing Director, GrowthCo",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
            quote: "Their creative solutions and technical expertise have been instrumental in our digital transformation journey. A truly exceptional team to work with.",
            rating: 5
        }
    ];

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden py-16">
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
                    className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 mx-auto"
                >
                    <span className="text-blue-400 font-medium">Client Stories</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                >
                    What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Clients Say</span>
                </motion.h2>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-blue-500/30">
                                <img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <FaQuoteLeft className="text-blue-400 text-xl mb-3" />
                            <p className="text-base text-gray-300 mb-4 italic">
                                "{testimonials[activeIndex].quote}"
                            </p>
                            <div className="flex gap-1 mb-3">
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" />
                                ))}
                            </div>
                            <h3 className="text-lg font-semibold mb-1">{testimonials[activeIndex].name}</h3>
                            <p className="text-blue-400 text-sm">{testimonials[activeIndex].role}</p>
                        </div>
                    </motion.div>

                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            onClick={prevTestimonial}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        index === activeIndex ? 'bg-blue-400' : 'bg-white/20'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextTestimonial}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
