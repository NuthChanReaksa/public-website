'use client'
import { useState } from 'react';

const BannerTest = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const images = [
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    ];

    return (
        <div className="relative w-full">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Image */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${index === activeIndex ? 'block' : 'hidden'}
                           
                         duration-700 ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                    >
                        <img src={image} className="block max-w-full h-auto" alt="" />
                    </div>
                ))}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                {/* Previous icon */}
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                {/* Next icon */}
            </button>
        </div>
    );
};

export default BannerTest;
