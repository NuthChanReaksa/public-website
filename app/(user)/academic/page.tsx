import React from 'react';
import Image from "next/image";
import ProgramComponent from "@/components/ProgramComponent";
import { IoEyeSharp } from "react-icons/io5";
import { FaBullseye } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
    return (
        <div>
            {/* banner wrapper */}
            <div className="relative lg:h-[580px] md:h-96 sm:h-68 h-[500px] overflow-hidden">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                {/* Item 1 */}
                <div className="shadow-sm">
                    <Image
                        src="/academic-image.png"
                        className="absolute block w-full h-full object-cover"
                        width={1920}
                        height={1080}
                        alt="banner image"
                    />
                </div>
                <div
                    className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-4 md:p-6 lg:p-8">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-center ">
                        ACADEMICS
                    </h2>
                    <div className="h-2 w-40 bg-error mx-auto"></div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-lg mt-4 md:mt-6 lg:mt-8 text-center mb-2 ">
                        ISTAD offers BA degrees in IT field to preparing <br />
                        students for their IT career in the future.
                    </p>

                </div>
            </div>

            {/* program description start here */}
            <div>
                <ProgramComponent />
            </div>
            {/* program description end here */}

            <section className="container my-12 px-4 mx-auto">

                {/*card student start here*/}
                <div className={"bg-white-80 py-4"}>
                    <h4 className={"text-2xl font-semibold text-start text-error pl-5"}>TESTIMONIALS</h4>
                    <h2 className="text-4xl font-bold text-start text-primary mb-8 pl-5">HEAR FROM OUR STUDENTS</h2>
                    <div className="flex flex-col sm:flex-row gap-4 container">
                        <div
                            className="cursor-pointer flex flex-col sm:flex-row border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-4 transition hover:scale-105 text-sm w-full sm:w-1/2">
                            <div className="flex flex-col items-center w-full sm:w-1/2 gap-1">
                                <div className="aspect-square overflow-hidden relative w-full">
                                    <Image
                                        fill
                                        src={"/academicImage/academic.png"}
                                        alt={""}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center w-full sm:w-1/2 pl-4">
                                <h3 className="text-[24px] font-bold leading-tight text-start text-primary">
                                    Chan Dany
                                </h3>
                                <p className="text-[14px] text-gray-80">Software developer at P.T.C</p>
                                <p className="text-[14px] text-gray-80">
                                    My experience at Sharda University is great and memorable. The mentors at Sharda
                                    University helped us enhance my academic and interpersonal skills. I am thankful
                                    to Training & Placement cell for providing a platform to enhance my skills and
                                    an opportunity to showcase them. In the last I am saying that The World is here
                                    at Sharda University.
                                </p>
                            </div>
                        </div>
                        <div
                            className="cursor-pointer flex flex-col sm:flex-row border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-4 transition hover:scale-105 text-sm w-full sm:w-1/2">
                            <div className="flex flex-col items-center w-full sm:w-1/2 gap-1">
                                <div className="aspect-square overflow-hidden relative w-full">
                                    <Image
                                        fill
                                        src={"/academicImage/academic.png"}
                                        alt={""}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center w-full sm:w-1/2 pl-4">
                                <h3 className="text-[24px] font-bold leading-tight text-start text-primary">
                                    Chan Dany
                                </h3>
                                <p className="text-[14px] text-gray-80">Software developer at P.T.C</p>
                                <p className="text-[14px] text-gray-80">
                                    My experience at Sharda University is great and memorable. The mentors at Sharda
                                    University helped us enhance my academic and interpersonal skills. I am thankful
                                    to Training & Placement cell for providing a platform to enhance my skills and
                                    an opportunity to showcase them. In the last I am saying that The World is here
                                    at Sharda University.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*card student end here*/}

                {/* video start here */}
                <div className="mx-auto mt-12 bg-white-80 py-8">
                    <h4 className="text-2xl font-semibold text-center text-error my-4">ALUMNI MAKING IMPACT</h4>
                    <h2 className="text-4xl font-bold text-center text-primary mb-8">HEAR FROM OUR STUDENTS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm w-full">
                            <iframe
                                className="object-cover rounded-t-lg w-full"
                                width="100%"
                                height="250"
                                src="https://www.youtube.com/embed/qqWbFUYsHVI"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <h3 className="mt-4 text-2xl font-bold">Ms. Yeng Sokroza</h3>
                            <p className="text-[14px] mt-2 text-gray-80">Software developer at P.T.C</p>
                            <p className="text-gray-80 mt-4">Working as a software developer at P.T.C has helped
                                develop a system for Indwell with new technology.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm w-full">
                            <iframe
                                className="object-cover rounded-t-lg w-full"
                                width="100%"
                                height="250"
                                src="https://www.youtube.com/embed/L0as5Xf8q8M?si=it4fZvqkJX5Byp2V"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <h3 className="mt-4 text-2xl font-bold">SurveyBox</h3>
                            <p className="text-[14px] mt-2 text-gray-80">Software developer at P.T.C</p>
                            <p className="text-gray-80 mt-4">My experience at Sharda University is great and memorable. The mentors at Sharda University helped us enhance my academic and interpersonal skills. I am thankful to Training & Placement cell for providing a platform to enhance my skills and an opportunity to showcase them. In the last I am saying that The World is here at Sharda University.</p>
                        </div>

                        <div className="bg-white p-6 rounded-sm shadow-sm w-full">
                            <iframe
                                className="object-cover rounded-t-lg w-full"
                                width="100%"
                                height="250"
                                src="https://www.youtube.com/embed/RCUYz9__FtU?si=AwM_9BrVbpQk2VY5"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <h3 className="mt-4 text-2xl font-bold">PhotoSTAD</h3>
                            <p className="text-[14px] mt-2 text-gray-80">Software developer at P.T.C</p>
                            <p className="text-gray-80 mt-4">My experience at Sharda University is great and memorable. The mentors at Sharda University helped us enhance my academic and interpersonal skills. I am thankful to Training & Placement cell for providing a platform to enhance my skills and an opportunity to showcase them. In the last I am saying that The World is here at Sharda University.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm w-full">
                            <iframe
                                className="object-cover rounded-t-lg w-full"
                                width="100%"
                                height="250"
                                src="https://www.youtube.com/embed/SQy5sUmK_OQ?si=pxYvsxyNYguJVze3"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <h3 className="mt-4 text-2xl font-bold"> Ms. Hoeng Linghor</h3>
                            <p className="text-[14px] mt-2 text-gray-80">Software developer at P.T.C</p>
                            <p className="text-gray-80 mt-4">My experience at Sharda University is great and memorable. The mentors at Sharda University helped us enhance my academic and interpersonal skills. I am thankful to Training & Placement cell for providing a platform to enhance my skills and an opportunity to showcase them. In the last I am saying that The World is here at Sharda University.</p>
                        </div>
                    </div>
                </div>
                {/* video end here */}
            </section>
        </div>
    );
};

export default Page;
