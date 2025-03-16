import React from "react";
import BlogPost from "./BlogPost";
import { motion } from "framer-motion";

const blogPosts = [
    {
        id: 1,
        title: "Mastering React: Best Practices",
        date: "March 10, 2025",
        summary: "Learn the best practices for writing efficient React applications.",
        image: "https://tse2.mm.bing.net/th?id=OIP.GrH6P_BJ10DdckmGWOOA_gHaE8&pid=Api&P=0&h=220",
        link: "https://reactjs.org/docs/getting-started.html" // Add a valid blog URL
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
        <div className="max-w-6xl mx-auto px-6 py-12">
            <motion.h2
                className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Blog
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <BlogPost key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
