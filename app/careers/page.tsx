"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaRocket, FaUsers, FaLightbulb, FaGraduationCap, FaHeart } from "react-icons/fa";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const benefits: Benefit[] = [
    {
      icon: FaRocket,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement paths"
    },
    {
      icon: FaUsers,
      title: "Collaborative Culture",
      description: "Work with talented individuals in a supportive environment"
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Freedom to explore new ideas and technologies"
    },
    {
      icon: FaGraduationCap,
      title: "Learning & Development",
      description: "Regular training and skill development programs"
    },
    {
      icon: FaHeart,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options"
    }
  ];

  const jobOpenings: JobOpening[] = [
    {
      id: "senior-dev",
      title: "Senior Software Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced software developer to join our engineering team. You'll be responsible for designing and implementing scalable solutions.",
      requirements: [
        "5+ years of software development experience",
        "Strong knowledge of modern web technologies",
        "Experience with cloud platforms",
        "Excellent problem-solving skills"
      ]
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      department: "Data Science",
      location: "Hybrid",
      type: "Full-time",
      description: "Join our data science team to help build and improve our machine learning models and data analysis pipelines.",
      requirements: [
        "3+ years of experience in data science",
        "Strong background in statistics and machine learning",
        "Proficiency in Python and data analysis tools",
        "Experience with big data technologies"
      ]
    },
    {
      id: "product-manager",
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Lead product development initiatives and work closely with cross-functional teams to deliver exceptional products.",
      requirements: [
        "4+ years of product management experience",
        "Strong analytical and strategic thinking",
        "Excellent communication skills",
        "Experience with agile methodologies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build the Future with{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Datascape
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Join us in our mission to transform the digital landscape. We're looking for passionate individuals who want to make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Us?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive benefits package and a supportive work environment to help you thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors cursor-pointer"
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <FaBriefcase className="w-6 h-6 text-blue-400" />
                </div>

                <AnimatePresence>
                  {selectedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-white/10"
                    >
                      <p className="text-gray-400 mb-4">{job.description}</p>
                      <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-400 space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                      >
                        Apply Now
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Send Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
