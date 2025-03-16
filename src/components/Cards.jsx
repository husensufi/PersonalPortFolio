import React from "react";

const projects = [
    {
        title: "Hospital Management System",
        description: "Hospital Management System streamlines patient records, appointments, billing, and staff management efficiently. 🚑💻.",
        github: "https://github.com/husensufi/",
        image: "https://hospitalnews.com/wp-content/uploads/2016/04/Legal-update.jpg",
    },
    {
        title: "Table Booking System",
        description: "Table Booking System enables users to reserve tables online, ensuring smooth restaurant management and convenience 🍽️✅.",
        github: "https://github.com/husensufi/",
        image: "https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/restaurant_reservations.jpg?ve=1&tl=1?ve=1&tl=1",
    },
    {
        title: "House Price Prediction In India",
        description: "House price prediction in India utilizes AI and data analytics to estimate property values based on market trends, location, and demand. 🏡📊",
        github: "https://github.com/husensufi/",
        image: "https://tse3.mm.bing.net/th?id=OIP.hDCu9AOY3BSoOKih4_9E4wHaE8&pid=Api&P=0&h=220",
    },
    {
        title: "Banking Enterprise System",
        description: "Banking Enterprise System automates transactions, account management, and security, ensuring efficient banking operations with enhanced customer experience and data security. 💳🏦",
        github: "https://github.com/husensufi/",
        image: "https://c8.alamy.com/comp/2BGP341/collage-with-businessman-word-banking-and-financial-pictograms-on-dark-background-2BGP341.jpg",
    },
    {
        title: "Zomato Data Analysis",
        description: "Zomato Data Analysis examines customer reviews, restaurant trends, and ratings to provide insights for better decision-making and business growth. 📊🍽️",
        github: "https://github.com/husensufi/",
        image: "https://user-images.githubusercontent.com/66274316/254715967-697a2508-fb25-4f8d-829b-803371175bf7.png",
    },
];

const Cards = () => {
    return (
        <section className="bg-gray-900 py-12" id="projects">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold p-4 text-white mb-8">Projects</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-400 hover:text-blue-500 transition duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mt-2">{project.description}</p>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cards;
