import Image from 'next/image'; // Import Image component from Next.js
import React from 'react';
import {FaFacebook, FaTelegram, FaYoutube} from "react-icons/fa";
import Link from "next/link";
import {IoCall} from "react-icons/io5";
import {SiGmail} from "react-icons/si";

export default function FooterComponent() {
    return (
        <footer className="  px-3 pt-4 bg-primary lg:px-9 border-t-2 text-start sm:text-start md:text-start">
            <div className="container mx-auto grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

                {/*Logo and description start here */}
                <div className="flex flex-col items-center mt-8">
                    <Link href="/" className="mb-2">
                        <Image
                            src="https://istad.co/resources/img/CSTAD_120.png" // change it later
                            alt="logo"
                            width={120}
                            height={120}
                            className="cstadlogo"
                        />
                    </Link>
                    <div className="text-lg font-bold tracking-wide text-white text-center">
                        Institute of Science and Technology Advanced Development
                    </div>
                </div>
                {/*Logo and description end here */}

                {/* column 1 start here */}
                <div className="flex flex-col gap-2 text-lg text-white-80">
                    <p className="text-base font-bold tracking-wide mt-3">EXPLORE</p>
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Academics</Link>
                    <Link href="/">Admission</Link>
                    <Link href="/">Short Course</Link>
                    <Link href="/">Scholarship</Link>
                    <Link href="/">News & Events</Link>
                    <Link href="/">Learning Porter</Link>
                </div>
                {/* column 1 end here */}

                {/*column 2 start here*/}
                <div className="text-white-80 text-lg mt-3 ">
                    {/*address start here*/}
                    <div>
                        <p className="text-base font-bold tracking-wide mb-2">ADDRESS</p>

                            <Link
                                className="text-base tracking-wide text-white-80"
                                href={"https://www.google.com/maps/dir/11.5762226,104.9272048/11.5784119,104.90279/@11.5682273,104.900408,14z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu"}>
                                No. 24, Street 562,Sangkat Boeung Kak<br/>
                                I,Khan Toul Kork,Phnom Penh,<br/>
                                Cambodia<br/>
                            </Link>

                    </div>
                    {/* address end here*/}

                    {/*contact start here*/}
                    <div className={"mt-3 "}>
                        <p className="text-base font-bold tracking-wide">
                            CONTACTS
                        </p>
                        <div className="flex flex-col items-start sm:items-start mt-3">
                            {/* email start here */}
                            <div className="flex items-start ">
                                <SiGmail className="mr-2 mt-1" />
                                <Link href="mailto:info.istad@gmail.com" title="send email" className="mr-2">
                                    info.istad@gmail.com
                                </Link>
                            </div>
                            {/* email end here */}

                            {/*phone start here*/}
                            <div className="flex flex-col">
                                <div className="flex items-start">
                                    <IoCall className="mr-2 mt-1"/>
                                    <Link href="tel:+85595990910">(+855) 95-990-910</Link>
                                </div>
                                <div className="flex items-start">
                                    <IoCall className="mr-2 mt-1"/>
                                    <Link href="tel:+85593990910">(+855) 93-990-910</Link>
                                </div>
                            </div>
                            {/*phone end here*/}

                            {/*social media start here*/}
                            <div className="flex space-x-3 text-2xl mt-3 items-start">
                                <Link href="https://www.facebook.com/istad.co/?ref=embed_page">
                                    <FaFacebook className="fa-brands fa-facebook"/>
                                </Link>
                                <Link href="https://www.youtube.com/@istad7665">
                                    <FaYoutube className="fa-brands fa-youtube"/>
                                </Link>
                                <Link href="https://t.me/istadkh">
                                    <i></i>
                                    <FaTelegram className="fa-brands fa-telegram"/>
                                </Link>
                            </div>
                            {/*social media end here*/}
                        </div>
                    </div>
                    {/*contact end here*/}
                </div>
                {/* column 2 end here */}

                {/* column 3 start here */}
                <div className="flex flex-col gap-2 text-lg text-white mt-3">

                    {/*alumni start here*/}
                    <div>
                        <Link href={"/"}>
                            <p className="text-base font-bold tracking-wide">VISIT OUR ALUMNI SITE</p>
                            <p className={"mt-3"}>alumni</p>
                        </Link>

                    </div>
                    {/*alumni end here*/}

                    {/* app start here */}
                    <div className="mt-3">
                        <p className="text-base font-bold tracking-wide text-white">
                            CSTAD APP
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-1 mt-3">
                            <Link
                                href="https://apps.apple.com/kh/app/cstad-mobile/id6463835798"
                                className="flex"
                            >
                                <Image
                                    src="https://social.webestica.com/assets/images/app-store.svg"
                                    alt="Appstore Button"
                                    width={120}
                                    height={40}
                                />
                            </Link>
                            <Link
                                href="https://play.google.com/store/apps/details?id=co.istad.mobile.istad_moblie&pcampaignid=web_share"
                                className="flex"
                            >
                                <Image
                                    src="https://social.webestica.com/assets/images/google-play.svg"
                                    alt="Playstore Button"
                                    width={120}
                                    height={40}
                                />
                            </Link>
                        </div>
                    </div>
                    {/* app end here */}


                </div>
                {/* column 3 here */}
            </div>

                {/*footer bottom start here*/}
            <div className="text-center pt-5 pb-5 border-t lg:flex-row">
                <p className="text-base text-white tracking-wide">
                    © 2023 Center of Science and Technology Advanced Development | All Rights Reserved
                </p>
            </div>
                {/*footer bottom end here*/}
        </footer>
    );
}
