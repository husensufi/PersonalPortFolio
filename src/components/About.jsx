import React from "react";
import husen from "../assets/husen_image.webp";

const skills = [
    { name: "Java", color: "bg-red-500" },
    { name: "C#", color: "bg-green-500" },
    { name: ".NET", color: "bg-blue-500" },
    { name: "React.js", color: "bg-yellow-500" },
    { name: "Spring Boot", color: "bg-indigo-500" },
    { name: "MySQL", color: "bg-purple-500" },
    { name: "Tailwind CSS", color: "bg-pink-500" },
];

const About = () => {
    return (
        <div className="bg-gray-900">
            <section className="bg-gray-900 py-16"> {/* Changed background color */}
                <h2 className="text-4xl font-bold text-center mb-8 text-white">About Me</h2>
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">

                    {/* Left Side - Profile Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={husen}
                            alt="Husen Basha"
                            className="rounded-lg shadow-lg w-80 h-80 object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Right Side - About Details */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <p className="text-white text-lg mb-4">
                            Hi, I’m <span className="text-blue-300 font-semibold">Husen Basha</span>, a passionate **Backend Engineer specializing in .NET technology with C#**.
                            I hold an **MCA from St. Joseph Engineering College, Mangaluru (VTU)**.
                        </p>
                        <p className="text-white text-lg mb-4">
                            Currently, I am an intern at <strong className="text-red-400">NexaInnov Solution, Mangalore</strong>, where I am improving my backend development skills.
                        </p>
                        <p className="text-white text-lg mb-4">
                            I have worked on projects like a <strong className="text-blue-400">Banking Enterprise System, Table Booking System, and Zomato Data Analysis using Python</strong>
                        </p>
                        <p className="text-white text-lg mb-6">
                            Apart from coding, I love solving complex problems and building scalable applications. I'm also working on side projects like **React-based games and e-commerce platforms**.
                        </p>

                        {/* Education Section */}
                        <div className="mt-6">
                            <h3 className="text-2xl font-bold text-white">🎓 Education</h3>
                            <ul className="mt-3 text-lg text-white">
                                <li><strong>MCA</strong> - St. Joseph Engineering College, Mangaluru (VTU) - <span className="text-red-600 font-semibold">8.06 CGPA</span></li>
                                <li><strong>BCA</strong> - Saka Autonomous College, Bagalkot -  <span className="text-red-600 font-semibold">85.43%</span></li>
                                <li><strong>PUC</strong> - <span className="text-red-600 font-semibold">87.16%</span></li>
                                <li><strong>SSLC</strong> - <span className="text-red-600 font-semibold">85.28%</span></li>
                            </ul>
                        </div>

                        {/* Animated Skills List */}
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-white">Skills</h3>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {skills.map((skill, index) => (
                                    <span key={index} className={`${skill.color} text-white px-4 py-2 rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-110 shadow-md`}>
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;
