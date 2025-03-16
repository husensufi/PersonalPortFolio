import React from "react";
import { motion } from "framer-motion";

const BlogPost = ({ post }) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{post.title}</h3>
                <p className="text-gray-500 text-sm">{post.date}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{post.summary}</p>

                {/* Read More Button - Opens Blog Post */}
                <a href={post.link} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
                    Read More →
                </a>
            </div>
        </motion.div>
    );
};

export default BlogPost;
