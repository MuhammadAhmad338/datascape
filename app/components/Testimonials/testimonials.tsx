import React from "react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            feedback: "Working with this team has been a game changer for our business. Highly recommended!",
            image: "/user.png",
        },
        {
            name: "Jane Smith",
            feedback: "Their attention to detail and commitment to excellence is unparalleled.",
            image: "/user.png",
        },
        {
            name: "Mike Johnson",
            feedback: "They delivered a fantastic solution that exceeded our expectations.",
            image: "/user.png",
        },
    ];

    return (
        <section className="bg-gray-900 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8 text-white">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg text-white">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mx-auto mb-4"
                            />
                            <p className="italic mb-2">"{testimonial.feedback}"</p>
                            <h3 className="font-semibold">- {testimonial.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
