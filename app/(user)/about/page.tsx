'use client';
import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import Link from "next/link";
import {FaBullseye, FaFacebook, FaTelegram, FaYoutube} from "react-icons/fa";
import {IoCall, IoEyeSharp, IoLocation} from "react-icons/io5";
import {SiGmail} from "react-icons/si";
import {BiWorld} from "react-icons/bi";
import AOS from "aos";
import 'aos/dist/aos.css';
import {CarouselSize} from "@/components/card/CarouselCardComponent";

const Page = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={"white-s"}>


            {/* banner start here */}
            <div className="relative lg:h-[580px] md:h-96 sm:h-68 h-[500px] overflow-hidden">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                {/* Item 1 */}
                <div className="shadow-sm">
                    <Image
                        src="/about-image.png"
                        className="absolute block w-full h-full object-cover"
                        width={1920}
                        height={1080}
                        alt="banner image"
                    />
                </div>
                <div
                    className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-4 md:p-6 lg:p-8">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-center">
                        About us
                    </h2>
                    <div className="h-2 w-40 bg-error bg-left my-2">

                    </div>
                    <p className="text-lg sm:text-base md:text-lg lg:text-lg mt-4 md:mt-6 lg:mt-8 text-center">
                        CSTAD is a noteworthy science and technology center in Cambodia
                    </p>

                </div>
            </div>
            {/* banner end here */}

            {/*introduction start here */}
            <div className="container my-12 py-12">
                <div className={"text-3xl font-bold mb-16 text-error "}>
                    ABOUT US
                </div>
                <div>
                    <h2 className={"text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold sm:leading-tight md:leading-snug lg:leading-snug text-start text-primary"}>
                        WHAT IS CENTER OF SCIENCE AND<br/>
                        TECHNOLOGY ADVANCED<br/>
                        DEVELOPMENT?
                    </h2>
                </div>
            </div>
            {/*introduction end here */}

            {/* Description 1 Start Here */}
            <div className="container flex items-center flex-wrap justify-center my-12 py-12">
                <div data-aos-duration="1000" data-aos="zoom-in" className="w-full md:w-1/2 p-4">
                    <div className="border-l-4 border-error pl-4 ml-20">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start text-primary ml-8">
                            CSTAD
                        </h1>
                        <p className="text-lg sm:text-base md:text-lg lg:text-lg mt-4 md:mt-6 lg:mt-8 text-start text-gray-80 tracking-wide ml-8">
                            CSTAD is a noteworthy science and technology <br/>
                            center in Cambodia. CSTAD has routed Cambodian <br/>
                            students to advanced science and technology, <br/>
                            research, and develop digital skills and our <br/>
                            graduates have been guaranteed excellent job <br/>
                            opportunities with the Top IT company.
                        </p>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="zoom-in-up" className="w-full md:w-1/2 p-4">
                    {/* Responsive Image */}
                    <Image
                        src="/about/about-image-1.png"
                        width={600}
                        height={600}
                        alt="Description of the image"
                        className="mx-auto w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                    />
                </div>
            </div>
            {/* Description 1 End Here */}

            {/* Description 2 Start Here */}
            <div className="container flex items-center flex-wrap justify-center my-12 py-12">
                <div data-aos-duration="1000" data-aos="zoom-in-right" className="w-full md:w-1/2 p-4">
                    {/* Responsive Image */}
                    <Image
                        src="/about/about-image-2.png"
                        width={600}
                        height={600}
                        alt="Description of the image"
                        className="mx-auto w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                    />
                </div>
                <div data-aos-duration="1000" data-aos="zoom-out-left" className="w-full md:w-1/2 p-4">
                    <div className=" border-l-4 border-error pl-4 ml-20">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start text-primary ml-8">
                            CSTAD
                        </h1>
                        <p className="text-lg sm:text-base md:text-lg lg:text-lg mt-4 md:mt-6 lg:mt-8 text-start text-gray-80 tracking-wide ml-8">
                            CSTAD will continue to provide high-quality <br/>
                            training with the latest methodology, and roadmap <br/>
                            as well as the best choice for those who want to <br/>
                            be an IT expert in Cambodia.

                        </p>
                    </div>
                </div>
            </div>
            {/* Description 2 End Here */}

            {/*our mission and vision start here*/}
            <section className="my-12 py-12">
                <div className="container flex flex-col md:flex-row md:space-x-6 ">
                    <div data-aos-duration="1000" data-aos="zoom-in-right"
                         className="flex-1 mb-6 md:mb-0 bg-white p-6 rounded-lg shadow-sm text-gray-80 tracking-wide h-auto md:h-96 w-full md:w-1/2">
                        <h2 className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start ml-8 text-primary">
                            <IoEyeSharp className="w-16 h-16 mr-3"/>Vision</h2>
                        <p className={"text-lg sm:text-base md:text-lg lg:text-lg mt-4 md:mt-6 lg:mt-8 text-start text-gray-80 tracking-wide ml-8"}>To
                            become the leading IT institute in Cambodia,
                            empowering individuals with cutting-edge technological
                            skills, fostering innovation, and contributing to
                            the digital transformation of the nation.
                        </p>
                    </div>
                    <div data-aos-duration="1000" data-aos="zoom-out"
                         className="flex-1 bg-white p-6 rounded-lg shadow-sm text-gray-80 tracking-wide h-auto md:h-96 w-full md:w-1/2">
                        <h2 className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start text-primary ml-8">
                            <FaBullseye className="w-16 h-16 mr-3"/> Mission</h2>
                        <ul className="list-disc list-inside text-4xl sm:text-base md:text-lg lg:text-lg mt-4 md:mt-6 lg:mt-8 text-start text-gray-80 tracking-wide ml-8">
                            <li>Provide the latest methodology with high quality training and mentoring</li>
                            <li>Build up the capacity and career of IT experts in Cambodia</li>
                            <li>Consult and connect CSTAD trainees to top IT careers</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*our mission and vision end here*/}

            {/*    our partners start here*/}
            <CarouselSize/>
            {/*    our partners start here*/}

            <section className="container text-start bg-white-80 tracking-wide my-24">
                <h2 className="text-2xl font-bold mb-4 text-error ">Connect with CSTAD</h2>
                <p className="text-4xl font-bold mb-4 text-primary">If you have any questions, please feel free to
                    contact us.</p>
                <div className="grid grid-cols-1 gap-2 text-base tracking-wide mt-8">
                    <Link href="#" className="flex items-center text-primary"> <IoLocation
                        className="w-5 h-5 mr-2"/> No. 24, St. 562, Sangkat Boeung Kak I, Khan Toul Kork, Phnom Penh,
                        Cambodia</Link>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className={"gap-2"}>
                            <Link href="#" className="flex items-center text-primary mt-3"> <FaFacebook
                                className="w-5 h-5 mr-2"/> Facebook</Link>
                            <Link href="#" className="flex items-center text-primary mt-4"><FaYoutube
                                className="w-5 h-5 mr-2"/>YouTube</Link>
                            <Link href="mailto:info.istad@gmail.com"
                                  className="flex items-center text-primary mt-4"><SiGmail
                                className="w-5 h-5 mr-2"/> info.istad@gmail.com</Link>
                            <Link href="tel:+85595990910" className="flex items-center text-primary mt-4"> <IoCall
                                className="w-5 h-5 mr-2"/> (+855) 95 990 910 | (+855) 93 990 910</Link>
                            <Link href="https://t.me/istadkh" className="flex items-center text-primary mt-4">
                                <FaTelegram
                                    className="w-5 h-5 mr-2"/> Telegram</Link>
                            <Link href="https://www.istad.co" className="flex items-center text-primary mt-4"> <BiWorld
                                className="w-5 h-5 mr-2"/> www.istad.co</Link>
                        </div>
                        <div className="ml-18">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.2894046150174!2d104.90168557579511!3d11.578326445405018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2skh!4v1717637726829!5m2!1sen!2skh"
                                width="500"
                                height="300"
                                style={{border: 0}}
                                loading="lazy"
                                aria-hidden="false"
                                className="rounded-lg shadow-md mx-auto"
                                referrerPolicy="no-referrer-when-downgrade">

                            </iframe>
                        </div>
                    </div>

                </div>


            </section>
            {/*    our partners end here*/}

        </div>
    );
};

export default Page;