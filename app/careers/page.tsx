"use client";
import React from "react";

const Careers = () => {
    const jobListings = [
        {
            title: "Frontend Developer",
            location: "Remote",
            type: "Full-Time",
            description: "Build modern user interfaces and optimize performance.",
            requirements: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
            salary: "$90,000 - $120,000",
            icon: "💻"
        },
        {
            title: "UI/UX Designer",
            location: "New York, USA",
            type: "Contract",
            description: "Design user-friendly interfaces and collaborate with developers.",
            requirements: ["Figma", "Adobe XD", "User Research", "Prototyping"],
            salary: "$80,000 - $100,000",
            icon: "🎨"
        },
        {
            title: "Backend Developer",
            location: "San Francisco, USA",
            type: "Full-Time",
            description: "Implement server-side logic and data security.",
            requirements: ["Node.js", "Python", "AWS", "Database Design"],
            salary: "$100,000 - $130,000",
            icon: "⚙️"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white">
            {/* Hero Section with Parallax */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center bg-fixed"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/80 via-[#0A0F1C]/90 to-[#0A0F1C]"></div>
                <div className="relative z-10 text-center max-w-4xl px-4">
                    <h1 className="text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Join Our Journey
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        We're not just building products, we're crafting experiences that shape the future of technology.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="group relative px-8 py-4 hover:cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 rounded-full overflow-hidden">
                            <span className="relative z-10 text-white font-semibold">Explore Roles</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                        <button className="px-8 py-4 border-2 hover:cursor-pointer border-white/20 rounded-full hover:bg-white/10 transition-all duration-300">
                            Our Values
                        </button>
                    </div>
                </div>
            </section>

            {/* Floating Stats */}
            <section className="relative -mt-32 mb-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "50+", label: "Team Members", color: "from-blue-500 to-blue-600" },
                            { value: "15+", label: "Countries", color: "from-purple-500 to-purple-600" },
                            { value: "100+", label: "Projects", color: "from-blue-500 to-blue-600" },
                            { value: "24/7", label: "Support", color: "from-purple-500 to-purple-600" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#1A1F2E] rounded-2xl p-6 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                    {stat.value}
                                </div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Listings with Timeline */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Open Positions
                    </h2>
                    <div className="max-w-5xl mx-auto">
                        {jobListings.map((job, index) => (
                            <div key={index} className="mb-8 last:mb-0">
                                <div className="relative group">
                                    <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                                    <div className="ml-6 bg-[#1A1F2E] rounded-xl p-6 hover:bg-[#212737] transition-all duration-300 border border-white/5 hover:border-white/10">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-4">
                                                <div className="text-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-lg">{job.icon}</div>
                                                <div>
                                                    <h3 className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{job.title}</h3>
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-gray-400 flex items-center gap-1 text-sm">
                                                            <span className="text-base">📍</span> {job.location}
                                                        </p>
                                                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                                        <p className="text-gray-400 text-sm">{job.salary}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
                                                {job.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-300 text-base mb-4 leading-relaxed">{job.description}</p>
                                        <div className="mb-4">
                                            <h4 className="text-base font-semibold mb-2 text-white">Requirements</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {job.requirements.map((req, idx) => (
                                                    <span key={idx} className="px-3 py-1.5 bg-[#2B3244] rounded-full text-sm font-medium text-gray-300 border border-white/5 hover:border-blue-500/20 transition-colors">
                                                        {req}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                            <div className="flex items-center gap-2 text-blue-400">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                                <span className="font-medium text-sm">Fast-track application</span>
                                            </div>
                                            <button className="group relative px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full overflow-hidden">
                                                <span className="relative z-10 text-white font-semibold text-sm">Apply Now</span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture Section with Cards */}
            <section className="py-32 bg-[#10141F]">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Life at Datascape
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🌱",
                                title: "Growth & Learning",
                                text: "Continuous learning opportunities and career development paths",
                                gradient: "from-green-500 to-blue-500"
                            },
                            {
                                icon: "🎯",
                                title: "Innovation",
                                text: "Work on cutting-edge projects and shape the future of tech",
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                icon: "🤝",
                                title: "Collaboration",
                                text: "Work with talented individuals in a supportive environment",
                                gradient: "from-blue-500 to-purple-500"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group relative">
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
                                <div className="relative bg-[#1A1F2E] p-8 rounded-2xl">
                                    <div className="text-5xl mb-6">{item.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
