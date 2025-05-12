import React from "react";

const Process = () => {
    const steps = [
        {
            title: "Discovery",
            description: "Understanding your business goals, target audience, and project requirements to align our strategy effectively.",
            icon: "🔍",
        },
        {
            title: "Design",
            description: "Crafting user-centric designs that are visually appealing and intuitive to use.",
            icon: "🎨",
        },
        {
            title: "Development",
            description: "Building robust and scalable digital solutions using the latest technologies.",
            icon: "💻",
        },
        {
            title: "Deployment",
            description: "Launching the solution while ensuring optimal performance and security.",
            icon: "🚀",
        },
        {
            title: "Support",
            description: "Providing ongoing support and maintenance to keep your solution running smoothly.",
            icon: "🔧",
        },
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-20">Our Process</h2>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center md:items-start text-center md:text-left"
                        >
                            <div className="text-5xl mb-4 text-indigo-600">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600 max-w-xs">{step.description}</p>
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block w-16 h-px bg-gray-300 mt-6"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
