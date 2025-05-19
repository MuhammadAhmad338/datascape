import React from "react";

const Careers = () => {
    const jobListings = [
        {
            title: "Frontend Developer",
            location: "Remote",
            type: "Full-Time",
            description: "Build modern user interfaces and optimize performance."
        },
        {
            title: "UI/UX Designer",
            location: "New York, USA",
            type: "Contract",
            description: "Design user-friendly interfaces and collaborate with developers."
        },
        {
            title: "Backend Developer",
            location: "San Francisco, USA",
            type: "Full-Time",
            description: "Implement server-side logic and data security."
        }
    ];

    return (
        <section className="bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Join Our Team</h2>
                <div className="space-y-8">
                    {jobListings.map((job, index) => (
                        <div 
                            key={index} 
                            className="relative bg-gray-800 p-6 pl-10 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition duration-300 flex items-start"
                        >
                            <div className="absolute left-0 top-6 w-1 h-12 bg-indigo-500"></div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">{job.title}</h3>
                                <p className="text-gray-400 mb-1">{job.location} - {job.type}</p>
                                <p className="text-gray-300">{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Careers;
