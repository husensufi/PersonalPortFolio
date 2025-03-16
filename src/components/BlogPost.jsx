import React from "react";
import { motion } from "framer-motion";

const BlogPost = ({ post }) => {
    return (
        <motion.div
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Blog Post Image */}
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-xl"
            />

            {/* Blog Post Content */}
            <div className="p-5">
                <h3 className="text-2xl font-semibold text-blue-400 hover:text-blue-500 transition duration-200">
                    {post.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{post.date}</p>
                <p className="mt-3 text-gray-300">{post.summary}</p>

                {/* Read More Button */}
                <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200 shadow-md"
                >
                    Read More →
                </a>
            </div>
        </motion.div>
    );
};

export default BlogPost;
