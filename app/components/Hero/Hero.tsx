"use client";
import React, { useEffect, useState } from "react";

const HeroComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Triggering text fade-in effect after component mounts
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-28 px-8 lg:py-36 text-white">
            {/* Background Image with Mask */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage: "url('https://your-image-url.com')",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)", // Soft fade effect
                }}
            ></div>

            <div className="container mx-auto text-center relative z-10">
                {/* Hero Text with Fade-In Animation */}
                <h1
                    className={`text-5xl md:text-6xl font-bold mb-6 leading-snug transition-all duration-1000 ease-in-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    Transform Your Business with Cutting-Edge Solutions
                </h1>
                <p
                    className={`text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto transition-all duration-1000 ease-in-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    At Datascape, we specialize in web development, app development, and enterprise applications. Let us help you
                    build robust digital solutions to elevate your business.
                </p>

                {/* Button with Subtle Zoom and Shadow Effect */}
                <button className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:bg-indigo-700 hover:scale-105 transition-all duration-300 ease-in-out transform">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default HeroComponent;
