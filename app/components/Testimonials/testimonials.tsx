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
        <section className="bg-gray-900 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">What Our Clients Say</h2>
                <div className="relative flex flex-col md:flex-row md:justify-between md:space-x-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="relative mb-10 md:mb-0">
                            <div className="absolute left-1/2 transform -translate-x-1/2 -top-5 bg-indigo-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
                                {index + 1}
                            </div>
                            <div className="bg-indigo-800 p-8 rounded-lg shadow-lg text-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-white"
                                />
                                <h3 className="text-xl font-semibold text-white mb-2">{testimonial.name}</h3>
                                <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

