import React from "react";

const Services = () => {
    const services = [
        {
            title: "Web Development",
            description:
                "We specialize in building robust, fast, and responsive websites that are designed to meet your business needs. Our team leverages modern technologies like React and Node.js to create scalable and secure web applications.",
            icon: "🌐",
        },
        {
            title: "App Development",
            description:
                "Our mobile app development services deliver intuitive and high-performing applications for both iOS and Android, ensuring seamless user experiences and optimal performance.",
            icon: "📱",
        },
        {
            title: "UI/UX Design",
            description:
                "We craft visually appealing and user-centric designs that enhance user experience and drive engagement. Our designs are both aesthetically pleasing and highly functional.",
            icon: "🎨",
        },
        {
            title: "Cloud Computing",
            description:
                "Leverage the power of cloud computing to scale your business effortlessly. We offer cloud solutions including data storage, cloud migration, and server management to optimize your operations.",
            icon: "☁️",
        },
        {
            title: "Enterprise Consulting",
            description:
                "Our experts provide strategic consulting to streamline business operations, implement scalable systems, and drive digital transformation to meet your business objectives.",
            icon: "💼",
        },
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6 text-center">
                <div className="text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">What We Offer</h2>
                    <h3 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Our Services</h3>
                    <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
                        Comprehensive digital solutions to help your business thrive in the modern marketplace
                    </p>
                </div>
                <div className="grid grid-cols-1 pt-4 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg transition-transform transform hover:scale-105 hover:translate-y-4 hover:shadow-xl duration-300"
                        >
                            <div className="text-6xl mb-6 text-indigo-600 transition-all duration-300 transform hover:scale-125">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                            <p className="text-gray-600 text-md mb-6">{service.description}</p>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-110 hover:bg-indigo-700 transition-all duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
