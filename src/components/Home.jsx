import React from "react";
import { motion } from "framer-motion";
import image3 from '../assets/husen_image.webp'

const PortfolioHome = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                {/* Left Side (Text Section) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-7/12 text-center md:text-left"
                >
                    <p className="text-red-400 text-lg font-semibold">HELLO!</p>
                    <h1 className="text-5xl font-bold mt-2">
                        I'm <span className="text-red-500">Husen Basha</span>
                    </h1>
                    <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                        Passionate Software Developer skilled in React, Java, and backend technologies. I love building user-friendly, scalable applications.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                        <a href="#projects" className="bg-red-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-red-600 transition">
                            View Work
                        </a>
                        <a href="#contact" className="bg-gray-700 px-6 py-3 rounded-md text-white font-semibold hover:bg-gray-600 transition">
                            Hire Me
                        </a>
                    </div>
                </motion.div>

                {/* Right Side (Image Section) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-5/12 flex justify-center"
                >
                    <img
                        src={image3}  // Replace with your image URL
                        alt="Profile"
                        className="rounded-lg shadow-lg w-96 h-96 object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default PortfolioHome;
