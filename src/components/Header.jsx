import React from 'react';
//import './Header.css';

const Header = () => {
    return (
        <header className="header bg-gray-900 text-white fixed w-full top-0 left-0 z-50 shadow-md">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

               
                <h1 className="text-xl font-bold">Portfolio</h1>

                
                <ul className="flex space-x-6">
                    <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-400">About Me</a></li>
                    <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                    <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                    <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                </ul>

            </nav>
        </header>
    );
};

export default Header;
