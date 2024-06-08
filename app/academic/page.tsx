import React from 'react';
import Image from "next/image";
import ProgramComponent from "@/components/ProgramComponent";
import {IoEyeSharp} from "react-icons/io5";
import {FaBullseye} from "react-icons/fa";
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
                        ISTAD offers BA degrees in IT field to preparing <br/>
                        students for their IT career in the future.
                    </p>

                </div>
            </div>

            {/*  program description start here  */}
            <div>
                <ProgramComponent/>
            </div>
            {/*  program description start here  */}

            <section className="my-24">
                <div className="container flex flex-col md:flex-row md:space-x-6 ">
                    <div
                        className="flex-1 mb-6 md:mb-0 bg-white p-6 rounded-lg shadow-md text-gray-80 tracking-wide h-auto md:h-96 w-full md:w-1/2">
                        <h2 className="flex items-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start text-primary ml-8">
                            Chan Dany

                        </h2>
                        <p className={"ml-8"}>Software developer at P.T.C </p>
                        <p className={"text-lg sm:text-base md:text-lg lg:text-lg mt-4 md:mt-6 lg:mt-8 text-start text-gray-80 tracking-wide ml-8"}>To
                            My experience at Sharda University is great and memorable. The mentors at Sharda University
                            helped us enhance my academic and interpersonal skills. I am thankful to Training &
                            Placement cell for providing a platform to enhance my skills and an opportunity to showcase
                            them. In the last I am saying that The World is here at Sharda University.
                        </p>
                    </div>


                    <a href="#"
                       className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src="https://i.pinimg.com/236x/33/e5/be/33e5be425cec11321cbff95cffe9b822.jpg" alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                                technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest
                                enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </a>


                </div>
            </section>
        </div>


    );
};

export default Page;