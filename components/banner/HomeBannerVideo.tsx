import React from 'react';

const HomeBannerVideo = () => {
    return (
        <div>
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
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        {/* Ensure the src attribute points to the correct location of your video file */}
                        <source src="/images/video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div
                    className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-4 md:p-6 lg:p-8">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-center">
                        About us
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-lg mt-4 md:mt-6 lg:mt-8 text-center">
                        CSTAD is a noteworthy science and technology center in Cambodia
                    </p>
                </div>
            </div>



        </div>
    );
};

export default HomeBannerVideo;