'use client';
import Image from 'next/image';
import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Gallery() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="container mx-auto my-12 px-4 sm:px-6 lg:px-8 relative">

            <div className="absolute top-0 left-1/3 transform -translate-x-1/3 -translate-y-1/4 z-0 opacity-10  ">
                <h1 className="text-9xl font-bold text-error">CSTAD</h1>
            </div>
            <div className="relative z-10 grid lg:grid-cols-3 lg:grid-rows-1 gap-4">


                <div data-aos-duration="1200" data-aos="fade-up" className="lg:col-span-1 lg:row-span-2">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start text-primary">
                        CSTAD
                    </h1>
                    <p className="text-2xl sm:text-3xl font-bold mb-4 text-primary my-8">
                        OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT
                    </p>
                    <div className="text-lg sm:text-2xl tracking-wide border-t-4 border-error my-8">
                        <p className="mt-8 text-gray-800">
                            CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed
                            Cambodian
                            students to...
                        </p>
                    </div>
                    <div className="mt-8 sm:mt-12">
                        <button
                            className="text-white-80 bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            <a href="/" className="block">Register Now</a>
                        </button>
                    </div>
                </div>

                <div data-aos-duration="800" data-aos="fade-down-right" className="lg:col-span-1 lg:row-span-2 grid grid-rows-2 gap-4">
                    <div className="pl-0 sm:pl-12 pt-0 sm:pt-16">
                        <Image
                            className="h-auto max-w-full"
                            src="https://i.pinimg.com/564x/2d/1e/a2/2d1ea215d570756025b33dbb33540c0e.jpg"
                            alt=""
                            layout="responsive"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="pb-0 sm:pb-26 ">
                        <Image
                            className="h-auto max-w-full"
                            src="https://i.pinimg.com/564x/92/e0/76/92e07603f43eff97af0414a41dda8e3c.jpg"
                            alt=""
                            layout="responsive"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>

                <div data-aos-duration="800" data-aos="fade-down-left" className="lg:col-span-1 lg:row-span-2 pb-16 pl-8 small:hidden">
                    <Image
                        className="h-auto max-w-full"
                        src="https://i.pinimg.com/564x/4f/7d/a6/4f7da6db9326e0fe8638b81d10de76d4.jpg"
                        alt="picture 3"
                        layout="responsive"
                        width={250}
                        height={100}
                    />
                </div>


            </div>
        </div>
    );
}
