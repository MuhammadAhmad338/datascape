import React from "react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            feedback: "Working with this team has been a game changer for our business. Highly recommended!",
            image: "https://via.placeholder.com/80",
        },
        {
            name: "Jane Smith",
            feedback: "Their attention to detail and commitment to excellence is unparalleled.",
            image: "https://via.placeholder.com/80",
        },
        {
            name: "Mike Johnson",
            feedback: "They delivered a fantastic solution that exceeded our expectations.",
            image: "https://via.placeholder.com/80",
        },
    ];

    return (
        <section className="bg-gradient-to-r to-blue-900 via-gray-800 from-gray-900 py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12 text-white">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 shadow-lg rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl relative"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-indigo-500"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-black">{testimonial.name}</h3>
                            <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
                            <div className="absolute -top-4 -right-4 bg-indigo-500 text-white p-2 rounded-full shadow-lg">
                                ⭐️
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
