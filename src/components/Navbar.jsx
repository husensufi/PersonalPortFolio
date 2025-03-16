import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white p-5 fixed top-0 w-full z-50 shadow-md"> {/* Increased padding for height */}
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Left Side - Portfolio Name */}
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-3xl font-bold cursor-pointer" {/* Increased font size */}
                >
                    Portfolio
                </ScrollLink>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Nav Links */}
                <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block mt-4 md:mt-0 text-lg`}> {/* Increased font size */}
                    <li>
                        <ScrollLink to="home" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
                            Home
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="about" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
                            About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="skills" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
                            Skills
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="certificates" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
                            Certificates
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
                            Projects
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
                            Contact Us
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
