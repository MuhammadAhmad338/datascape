"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />
            </div>

            <div className="container mx-auto relative z-10 px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
                        >
                            Datascape
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-400 leading-relaxed"
                        >
                            Empowering businesses through tailored web development, mobile apps, and enterprise consulting solutions.
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex space-x-4"
                        >
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <FaGithub className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <FaTwitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                            </a>
                            <a href="mailto:contact@datascape.com" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <FaEnvelope className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Services */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h3 className="text-lg font-semibold">Services</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services/web-development" className="text-gray-400 hover:text-white transition-colors flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/app-development" className="text-gray-400 hover:text-white transition-colors flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>
                                    App Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/consulting" className="text-gray-400 hover:text-white transition-colors flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                                    Enterprise Consulting
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/aboutus" className="text-gray-400 hover:text-white transition-colors flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contactus" className="text-gray-400 hover:text-white transition-colors flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-lg font-semibold">Newsletter</h3>
                        <p className="text-gray-400">Subscribe to our newsletter for updates and insights.</p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors"
                            />
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400"
                >
                    <p>&copy; {currentYear} Datascape. All Rights Reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

