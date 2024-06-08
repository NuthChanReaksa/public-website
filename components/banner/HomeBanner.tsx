import React from 'react';
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const HomeBanner = () => {
    return (
        <div className="relative lg:h-[580px] md:h-96 sm:h-68 h-[500px] overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            {/* Video instead of Image */}
            <div className="relative w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute block w-full h-full object-cover"
                >
                    {/* Ensure the src attribute points to the correct location of your video file */}
                    <source src="/images/video-home.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-start text-white z-20 p-4 md:p-6 lg:p-8 ml-4 sm:ml-6 md:ml-8 lg:ml-12">
                <div className="flex flex-col items-start space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-2">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug">
                        Center of Science and <br/>
                        Technology Advanced <br/>
                        Development
                    </h2>
                    <Link href="">
                        <button
                            type="button"
                            className="flex text-2xl font-bold items-center justify-center text-white-80 mt-4"
                        >
                            <div className="h-3 w-20 bg-error bg-left mr-4"></div>
                            <span className="button-text">WATCH THE VIDEO</span>
                            <div className="bg-white-80 shadow-md border-solid rounded-full ml-2">
                                <FaPlayCircle className="icon w-8 h-8 text-secondary  "/>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
