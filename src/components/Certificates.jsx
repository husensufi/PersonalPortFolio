import React from "react";

const certifications = [
    {
        title: "Java Programming Certification",
        platform: "Infosys Spring Board",
        year: "2024",
        link: "https://drive.google.com/file/d/172Gzf3y6VWqtmhEesn9-ApUP9sTlLnlH/view?usp=sharing" 
    },
    {
        title: "Python Programming",
        platform: "Infosys Spring Board",
        year: "2024",
        link: "https://drive.google.com/file/d/1qX-YmjUMjNPvNpgMaytjYFvsjPySvBw7/view?usp=sharing"
    },
    {
        title: "Internship Participation Certificate",
        platform: "Internship Studio",
        year: "2024",
        link: "https://drive.google.com/file/d/1maIvn70L6asKXfOzcJbprTlfyhzg1VRq/view?usp=sharing"
    },
    {
        title: "AWS For Adminstrators",
        platform: "Infosys Spring Board",
        year: "2024",
        link: "https://drive.google.com/file/d/1VdOfvUgflukDM09PSBp42_eEDE3z2baE/view?usp=sharing"
    },
    {
        title: "Cloud Computing",
        platform: "Infosys Spring Board",
        year: "2024",
        link: "https://drive.google.com/file/d/1w-MoLt53ic6ciq043OED9HUD99s9IZCx/view?usp=sharing"
    },
    {
        title: "Introduction To JavaScript",
        platform: "Meta via Coursera",
        year: "2024",
        link: "https://drive.google.com/file/d/1bKBPI7ZRtksR4qZKOMXZhc7j91pQ7yMP/view?usp=sharing"
    },
    {
        title: "Introduction to Web Development using HTML, CSS, and JavaScript",
        platform: "IBM via Coursera",
        year: "2024",
        link: "https://drive.google.com/file/d/18QOhQLXHqihzTKAlIJNtS34o-hm1A78i/view?usp=sharing"
    },
    {
        title: "Portfolio Developmemt",
        platform: "SJEC Foundation ",
        year: "2024",
        link: "https://drive.google.com/file/d/18QOhQLXHqihzTKAlIJNtS34o-hm1A78i/view?usp=sharing"
    },
];

const Certificates = () => {
    return (
        <section className="bg-gray-900 py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Certifications & Achievements
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-md w-80 text-center transition-transform duration-300 hover:scale-105">
                            <h3 className="text-lg font-semibold text-gray-700">{cert.title}</h3>
                            <p className="text-gray-500">{cert.platform}</p>
                            <span className="text-sm text-blue-600 font-semibold block mb-3">{cert.year}</span>
                            <a
                                href={cert.link} // Ensure this is a direct link to the file
                                download // Enables the download functionality
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                            >
                                View Certificate
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
