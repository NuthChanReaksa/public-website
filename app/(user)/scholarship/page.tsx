import React from 'react';
import {FaPlayCircle} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";


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
                    className="absolute inset-0 flex flex-col justify-center items-start text-white z-20 p-4 md:p-6 lg:p-8 ml-24">
                    <h2 className="text-[96px] sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start">
                        Scholarship
                    </h2>
                    <div
                        className="flex text-[18px] items-center justify-center text-white-80 mt-4"
                    >
                        <div className="h-3 w-10 bg-error bg-left mr-4"></div>
                        <span className="button-text ">How to apply?</span>
                        <div className="bg-white-80 shadow-md border-solid rounded-full ml-2">
                            <FaPlayCircle className="icon w-8 h-8 text-secondary  "/>
                        </div>
                    </div>
                </div>
            </div>

            {/*    description */}
            <div className="min-h-screen ">
                {/*overview*/}
                <div className="rounded-sm shadow-sm p-6  h-[630px] bg-primary">
                    <h3 className="text-2xl font-bold text-secondary pl-16 mt-4">OVERVIEW</h3>
                    <h1 className="text-[64px] font-bold text-white-80 pl-16 ">TYPES OF SCHOLARSHIP</h1>
                    <table className="w-[1345px] tracking-wide mx-auto mt-4">
                        <thead>
                        <tr className="text-[24px] border-b text-white-80">
                            <th className="text-start py-2 px-4">Name</th>
                            <th className="py-2 px-4 text-end">Duration</th>
                        </tr>
                        </thead>
                        <tbody className={"text-[20px]"}>
                        <tr className="text-white-80 border-b">
                            <td className="py-4 px-4">Merit Scholarship</td>
                            <td className="py-4 px-4 text-end">4 Years</td>
                        </tr>
                        <tr className={"text-white-80 border-b"}>
                            <td className="py-4 px-4">IT Expert Scholarship</td>
                            <td className="py-4 px-4 text-end">9 Months</td>
                        </tr>
                        <tr className="text-white-80 border-b">
                            <td className="py-4 px-4">Foundation Scholarship</td>
                            <td className="py-4 px-4 text-end">4 Months</td>
                        </tr>
                        <tr className={"text-white-80 border-b"}>
                            <td className="py-4 px-4 border-b">Pre University Scholarship</td>
                            <td className="py-4 px-4 text-end">2-3 Months</td>
                        </tr>
                        <tr className="text-white-80 border-b">
                            <td className="py-4 px-4">Short Course Scholarship</td>
                            <td className="py-4 px-4 text-end">2-3 Months</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {/*overview*/}

                {/*apply scholarship start here*/}
                <div className="container bg-white rounded-sm shadow-sm p-6 mt-6">
                    <h5 className="text-[28px] font-bold text-error">APPLY FOR SCHOLARSHIPS</h5>
                    <h1 className="text-[64px] font-bold tracking-wide text-primary">SCHOLARSHIP OPPORTUNITIES AT ISTAD</h1>
                    <nav className="flex bg-whiteSmoke space-x-8 py-2 mt-4">
                        <Link href="#merit" className="bg-whiteSmoke text-gray-80 hover:underline">
                            Merit Scholarship
                        </Link>
                        <Link href="#it-expert" className="text-gray-80 hover:underline">
                            IT Expert Scholarship
                        </Link>
                        <Link href="#foundation" className="text-gray-80 hover:underline">
                            Foundation Scholarship
                        </Link>
                        <Link href="#pre-university" className="text-gray-80 hover:underline">
                            Pre University Scholarship
                        </Link>
                        <Link href="#short-course" className="text-gray-80 hover:underline">
                            Short Course Scholarship
                        </Link>
                    </nav>
                    <div className="relative w-full h-[470px] mt-4">
                        <Image
                            src="/scholarship3C.png"
                            alt="Scholarship Banner"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-sm aspect-square"
                        />
                    </div>
                </div>
                {/*apply scholarship end here*/}

                {/*Merit Scholarship*/}
                <div className="container bg-white rounded-sm shadow-md p-6 mt-6 tracking-wide">
                    <p className="text-[20px] text-error font-semibold mt-2">Closed</p>
                    <h1 id="it-expert" className="text-[64px] font-bold text-primary">IT Expert Scholarship</h1>
                    <p className="text-[20px]">Institute of Science and Technology Advanced Development currently
                        provide a
                        100%
                        scholarship opportunity for 60 places in 2024.</p>
                    <h4 className="text-xl font-semibold mt-4">Foundation Courses</h4>
                    <ul className="list-disc list-inside mt-2 text-[20px]">
                        <li>Java Programming</li>
                        <li>Web Design</li>
                        <li>Database</li>
                        <li>Spring</li>
                        <li>Git and Deployment</li>
                        <li>UX/UI Concept and Design</li>
                        <li>Project Management</li>
                    </ul>
                    <h4 className="text-xl font-semibold mt-4">Advanced Courses</h4>
                    <ul className="list-disc list-inside mt-2 text-[20px]">
                        <li>Blockchain Development</li>
                        <li>Cyber Security</li>
                        <li>Data Analytics</li>
                        <li>DevOps</li>
                        <li>Spring Advanced</li>
                        <li>Flutter Mobile Development</li>
                    </ul>
                    <Link href={"/admissionFormPersonalInfo"}>
                        <Button className="bg-primary text-white-80 font-bold w-full sm:w-auto my-6">
                            Register Now
                        </Button>
                    </Link>
                </div>
                {/*Merit Scholarship*/}


            </div>
        </div>
    );
};

export default Page;