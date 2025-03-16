import React from "react";

const SkillBar = ({ skill, percentage, color }) => {
    return (
        <div className="mb-4">
            <span className="font-semibold">{skill}</span>
            <div className="w-64 bg-gray-300 h-4 rounded-md mt-1 relative">
                <div
                    className={`h-4 rounded-md ${color} flex items-center justify-end px-2 text-white font-bold text-xs`}
                    style={{ width: `${percentage}%`, minWidth: "25px" }} // Ensures text visibility
                >
                    {percentage}%
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    const skillSets = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML", percent: 90, color: "bg-red-500" },
                { name: "CSS", percent: 85, color: "bg-blue-500" },
                { name: "JavaScript", percent: 80, color: "bg-yellow-500" },
                { name: "Tailwind CSS", percent: 75, color: "bg-teal-500" },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Java", percent: 85, color: "bg-purple-500" },
                { name: "Python", percent: 80, color: "bg-green-500" },
                { name: "C#", percent: 75, color: "bg-indigo-500" },
                { name: "JavaScript", percent: 70, color: "bg-orange-500" },
            ],
        },
        {
            title: "Frameworks",
            skills: [
                { name: "Spring Boot", percent: 80, color: "bg-pink-500" },
                { name: "Node.js", percent: 75, color: "bg-lime-500" },
                { name: "React.js", percent: 85, color: "bg-cyan-500" },
            ],
        },
        {
            title: "Database",
            skills: [
                { name: "MySQL", percent: 90, color: "bg-emerald-500" },
                { name: "MongoDB", percent: 80, color: "bg-violet-500" },
            ],
        },
    ];

    return (
        <div className="p-6">
            {/* Main Heading for Skills */}
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
                My Technical Skills 💻
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
                {skillSets.map((set, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-72">
                        <h2 className="text-xl font-bold mb-4 text-gray-700">{set.title}</h2>
                        {set.skills.map((skill, idx) => (
                            <SkillBar key={idx} skill={skill.name} percentage={skill.percent} color={skill.color} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
