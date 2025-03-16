import React from "react";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">My Resume</h2>
            <p className="text-gray-600 text-lg mb-6">
                Click below to download my latest resume.
            </p>
            <a
                href="https://drive.google.com/file/d/15mnbfi-1SsyfxlOF-AEjmfbhoiLfkZns/view?usp=drive_link"
                download="Husen_Resume.pdf" target="_blank"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
            >
                <FaDownload className="text-xl" />
                Download Resume
            </a>
        </div>
    );
};

export default Resume;
