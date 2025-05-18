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
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Process</h2>
                <div className="relative flex justify-between items-center space-x-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-5xl mb-2 text-indigo-600">{step.icon}</div>
                        
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
                            <p className="text-gray-600 text-sm max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
