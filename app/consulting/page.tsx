"use client"
import React from "react";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const Consulting = () => {
    const services = [
        {
            title: "Web & Mobile Development",
            description: "Building responsive and high-performance web and mobile applications.",
            icon: "📱",
        },
        {
            title: "Cloud Services",
            description: "Empowering businesses with scalable cloud solutions.",
            icon: "☁️",
        },
        {
            title: "Enterprise Applications",
            description: "Creating robust applications tailored for large-scale operations.",
            icon: "🏢",
        },
        {
            title: "UI/UX Design",
            description: "Designing user-centric interfaces for impactful digital experiences.",
            icon: "🎨",
        },
    ];

    return (
        <ProtectedRoute>
            <section className="bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900  text-white">
                <div className="container mx-auto px-6 text-center pt-10 pb-10">
                    <h2 className="text-4xl font-bold mb-12">Consulting Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 hover:cursor-pointer">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 shadow-lg rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl relative">
                                <div className="text-4xl mb-4 text-black">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white py-12 px-8 rounded-2xl shadow-lg mb-16">
                        <h3 className="text-3xl font-bold text-black mb-4">Why Choose Us?</h3>
                        <p className="text-gray-700">Our team of experts is dedicated to delivering high-quality solutions tailored to meet your unique business needs. We focus on innovation, scalability, and user experience to ensure that your digital solutions stand out in the competitive market.</p>
                    </div>

                    <div className="bg-white py-12 px-8 rounded-2xl shadow-lg mb-16">
                        <h3 className="text-3xl font-bold text-black mb-4">Our Approach</h3>
                        <p className="text-gray-700">We follow a strategic approach to consulting, starting with in-depth research and analysis, followed by actionable strategies, and concluding with implementation and continuous support.</p>
                    </div>

                    <div className="bg-white py-12 px-8 rounded-2xl shadow-lg mb-16">
                        <h3 className="text-3xl font-bold text-black mb-4">Client Success Stories</h3>
                        <p className="text-gray-700">Hear from our clients about how we have helped them achieve their digital transformation goals through tailored consulting services and strategic implementations.</p>
                    </div>

                    <div className="bg-white py-12 px-8 rounded-2xl shadow-lg">
                        <h3 className="text-3xl font-bold text-black mb-4">Get in Touch</h3>
                        <p className="text-gray-700">Ready to elevate your business? Contact us today to discuss your project requirements and let us provide you with the best consulting solutions.</p>
                    </div>
                </div>
            </section>
        </ProtectedRoute>
    );
};

export default Consulting;
