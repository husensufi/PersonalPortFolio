import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMongodb } from "react-icons/si";
//import csharpLogo from "./assets/csharp.png"; // Add your C# logo here

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  
];

const Skills = () => {
    return (
        <section className="bg-gray-900 py-12 text-white" id="skills">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">Skills</h2>
                <p className="text-gray-400 mb-8">
                    I specialize in full-stack development, working with a variety of modern technologies.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-lg p-6 w-40 h-40 flex flex-col items-center justify-center transform transition duration-500 hover:scale-110 hover:bg-gray-700"
                        >
                            <div className="text-5xl mb-2">{skill.icon}</div>
                            <p className="text-lg font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
