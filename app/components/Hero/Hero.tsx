import React from "react";

const HeroComponent = () => {
    return (
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 px-6">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Welcome to Our Platform
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-8">
                    Discover amazing content and connect with a vibrant community.
                </p>
                <button className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default HeroComponent;
