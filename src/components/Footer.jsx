import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebookF,
    faYoutube,
    faInstagram,
    faLinkedinIn,
    faGithub,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-screen-lg mx-auto py-10 px-4 sm:px-6">
                {/* Top Section */}
                <div className="sm:flex justify-between border-b border-gray-700 pb-8">

                    {/* Menu */}
                    <div className="p-5 sm:w-2/12">
                        <h3 className="text-sm uppercase text-indigo-400 font-bold">Menu</h3>
                        <ul className="mt-3 space-y-2">
                            <li><a href="#home" className="hover:text-indigo-400 transition">Home</a></li>
                            <li><a href="#about" className="hover:text-indigo-400 transition">About</a></li>
                            <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
                            <li><a href="#skills" className="hover:text-indigo-400 transition">Skills</a></li>
                            <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* About Section */}
                    <div className="p-5 sm:w-7/12 text-center">
                        <h3 className="text-2xl font-bold text-indigo-400 mb-4">Portfolio</h3>
                        <p className="text-gray-400 text-sm leading-relaxed text-3xl">
                            I am a passionate Software Developer skilled in React, Java, Spring Boot, and DevOps. I love building scalable applications and solving complex problems with clean, efficient code. 🚀
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="p-5 sm:w-3/12">
                        <h3 className="text-sm uppercase text-indigo-400 font-bold">Contact Us</h3>
                        <ul className="mt-3 space-y-2">
                            <li><a className="hover:text-indigo-400 transition" href="https://www.google.co.in/maps/@12.9076437,74.9040584,13z?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank">Jeppu Mangalore Karnataka India 575002</a></li>
                            <li><a className="hover:text-indigo-400 transition" href="mailto:contact@company.com" target="_blank">23ca032.husen@sjec.ac.in</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="mt-8 flex justify-center space-x-4">
                    <SocialIcon href="https://www.linkedin.com/in/husensufi" icon={faLinkedinIn} color="text-blue-400" hover="hover:bg-blue-500" />
                    <SocialIcon href="https://twitter.com/" icon={faTwitter} color="text-blue-300" hover="hover:bg-blue-400" />
                    <SocialIcon href="https://github.com/husensufi" icon={faGithub} color="text-gray-400" hover="hover:bg-gray-500" />
                    <SocialIcon href="https://facebook.com/" icon={faFacebookF} color="text-blue-600" hover="hover:bg-blue-700" />
                    <SocialIcon href="https://wa.me/8867518213" icon={faWhatsapp} color="text-green-400" hover="hover:bg-green-500" />
                    <SocialIcon href="https://youtube.com/" icon={faYoutube} color="text-red-500" hover="hover:bg-red-600" />
                    <SocialIcon href="https://instagram.com/" icon={faInstagram} color="text-pink-400" hover="hover:bg-pink-500" />
                </div>

                {/* Copyright */}
                <div className="mt-6 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
                    © {new Date().getFullYear()} SJEC. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

// Reusable Social Icon Component
const SocialIcon = ({ href, icon, color, hover }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
        className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 ${color} ${hover} transition`}>
        <FontAwesomeIcon icon={icon} className="text-xl" />
    </a>
);

export default Footer;
