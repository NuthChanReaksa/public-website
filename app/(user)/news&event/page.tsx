import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Page = () => {
    const newsEvent = [
        {
            id: 1,
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/new-image-1.png'
        },
        {
            id: 2,
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/news&event.png'
        },
        {
            id: 3,
            title: "កម្មវិធី សង្ក្រាន្តឆ្នាំថ្មី​ និង​ពិសាអាហារសាមគ្គីភាតរភាពរបស់គ្រួសារ CSTAD នាថ្ងៃព្រហស្បតិ៍  ទី១១ ខែមេសា​ ឆ្នាំ២០២៤",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/news3.png'
        },
        {
            id: 4,
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/new-image-1.png'
        },
        {
            id: 5,
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/new-image-1.png'
        },
        {
            id: 6,
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/new-image-1.png'
        },
    ];

    const getLocationColorClass = (location:string) => {
        if (location === "Phnom Penh") {
            return "text-primary";
        } else {
            return "text-blue-500";
        }
    };


    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-error mb-6">News & Events</h2>
            <h3 className="text-xl font-semibold text-primary mb-8">STAY UPDATED WITH THE LATEST NEWS & EVENTS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsEvent.map((item) => (
                    // href={`/newsEvent/${item.id}`}
                    <Link key={item.id} href={"/newsEvent/id}"}>
                        <div className="bg-white shadow-sm rounded-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="relative w-full h-48 md:h-auto">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-lg md:rounded-none md:rounded-l-lg"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className={`flex items-center text-sm ${getLocationColorClass(item.location)} mb-2`}>
                                        <span>{item.location}</span>
                                        <span className="mx-2">|</span>
                                        <span>{item.date}</span>
                                    </div>
                                    <h4 className="text-base tracking-wide text-gray-80 truncate-lines-3">{item.title}</h4>
                                    <span className="text-primary hover:text-blue-700 mt-4 inline-block">
                                        Read More
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-end mt-8">
                <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">View More</button>
            </div>
        </div>
    );
};

export default Page;