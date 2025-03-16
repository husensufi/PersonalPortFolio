import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Left Side - Portfolio Name */}
                <Link to="/" className="text-2xl font-bold">Portfolio</Link>

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
                <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}>
                    <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
                    <li><Link to="/skills" className="hover:text-gray-400">Skills</Link></li>
                    <li><Link to="/certificates" className="hover:text-gray-400">Certificates</Link></li>
                    <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
