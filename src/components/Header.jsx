import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
    return (
        <header className="header bg-gray-900 text-white fixed w-full top-0 left-0 z-50 shadow-md">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-xl font-bold cursor-pointer"
                >
                    Portfolio
                </ScrollLink>

                <ul className="flex space-x-6">
                    <li>
                        <ScrollLink to="home" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
                            Home
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="about" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
                            About 
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
                            Projects
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="skills" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
                            Skills
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
