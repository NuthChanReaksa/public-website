import React from 'react';
import CardComponent from "@/components/admissionComponent/CardComponent";
import AdmissionProcess from "@/components/admissionComponent/AdmissionProcess";
import {FaPlayCircle} from "react-icons/fa";
import Link from "next/link";

const Page = () => {
    return (
        <div>
            {/* banner wrapper */}
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
                    <h2 className="text-[96px] sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-center">
                        Admission
                    </h2>
                    <div
                        className="flex text-[18px] items-center justify-center text-white-80 mt-4"
                    >
                        <div className="h-3 w-10 bg-error bg-left mr-4"></div>
                        <span className="button-text ">How to apply for admission at ISTAD?</span>
                        <div className="bg-white-80 shadow-md border-solid rounded-full ml-2">
                            <FaPlayCircle className="icon w-8 h-8 text-secondary  "/>
                        </div>



                    </div>
                    <Link href={"/admissionFormPersonalInfo"}>
                        <button
                            type="button"
                            className="text-white-80 hover:text-white border border-white-80 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mt-4"

                        >
                            <span className="button-text">Register Now</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div><CardComponent/></div>
            <div><AdmissionProcess/></div>

        </div>
    );
};

export default Page;