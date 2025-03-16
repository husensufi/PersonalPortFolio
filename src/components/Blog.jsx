import React from "react";
import BlogPost from "./BlogPost";
import { motion } from "framer-motion";

const blogPosts = [
    {
        id: 1,
        title: "Mastering java: Best Practices",
        date: "March 10, 2025",
        summary: "Learn the best practices for writing efficient React applications.",
        image: "https://tse3.mm.bing.net/th?id=OIP.p7ZV9EU4Q31-_kPaQGH8MgHaEK&pid=Api&P=0&h=220",
        link: "https://docs.oracle.com/en/java/"
    },
    {
        id: 2,
        title: "Understanding JavaScript Closures",
        date: "February 25, 2025",
        summary: "A deep dive into closures and their real-world applications.",
        image: "https://tse1.mm.bing.net/th?id=OIP.NLxdynC1YbdhUEYYXRG3TgHaFN&pid=Api&P=0&h=220",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
    },
    {
        id: 3,
        title: "Why TypeScript is the Future of JavaScript",
        date: "February 15, 2025",
        summary: "An overview of TypeScript’s benefits and why you should use it.",
        image: "https://miro.medium.com/v2/resize:fit:1200/1*_tgiH-E_w2IKaWLl5CSLvQ.jpeg",
        link: "https://www.typescriptlang.org/docs/"
    },
];

const Blog = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-900">
            {/* Blog Heading */}
            <motion.h2
                className="text-4xl font-bold text-center mb-10 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Blog
            </motion.h2>

            {/* Blog Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <motion.div
                        key={post.id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                    >
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-blue-400 hover:text-blue-500 transition duration-300">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">{post.date}</p>
                            <p className="text-gray-300 mt-2">{post.summary}</p>
                            <a
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 shadow-md"
                            >
                                Read More
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
