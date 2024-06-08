'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";

const HomeBanner2 = () => {
    const [currentImage, setCurrentImage] = React.useState(0);
    const images = [
        "/banner-image.png",
        "/banner2.png",
        "/admission-image.png"
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevImage => (prevImage + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const goToImage = (index:any) => {
        setCurrentImage(index);
    };

    const goToPrevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    const goToNextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    return (
        <div className={"my-24 relative"}>
            {/* Carousel wrapper */}
            <div className="lg:h-[580px] md:h-96 sm:h-68 h-[500px] overflow-hidden relative">
                {/* Background overlay */}
                <div className="absolute inset-0 z-10"></div>
                {/* Item */}
                <div className="shadow-sm">
                    <Image
                        src={images[currentImage]}
                        className="absolute block w-full h-full object-cover transition-opacity duration-500"
                        width={1920}
                        height={1080}
                        alt="banner image"
                    />
                </div>
                <div className="absolute inset-0 flex items-center justify-start text-white z-20 p-4 md:p-6 lg:p-8 ml-4 sm:ml-6 md:ml-8 lg:ml-12">
                    <div className="flex flex-col items-start space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-success">
                            Real Professional
                        </h2>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug">
                            Start your IT journey with us
                        </h2>
                        <Link href="">
                            <button
                                type="button"
                                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4"
                            >
                                Explore Now
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Navigation buttons */}
                <button onClick={goToPrevImage} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white focus:outline-none z-20">
                    &lt;
                </button>
                <button onClick={goToNextImage} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white focus:outline-none z-20">
                    &gt;
                </button>
                {/* Navigation circles */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`w-4 h-4 rounded-full ${currentImage === index? 'bg-primary' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeBanner2;
