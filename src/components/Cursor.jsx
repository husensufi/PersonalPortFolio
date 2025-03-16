import React, { useState } from "react";

const images = [
    "/src/assets/image2.jpg",
    "/docs/images/carousel/carousel-2.svg",
    "/docs/images/carousel/carousel-3.svg",
    "/docs/images/carousel/carousel-4.svg",
    "/docs/images/carousel/carousel-5.svg",
];

const Cursor = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full">
            {/* Carousel Wrapper */}
            <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
                <img
                    src={images[currentIndex]}
                    className="absolute w-full h-full object-cover transition-opacity duration-500"
                    alt={`Slide ${currentIndex + 1}`}
                />
            </div>

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50 transition"
            >
                ❮
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50 transition"
            >
                ❯
            </button>
        </div>
    );
};

export default Cursor;
