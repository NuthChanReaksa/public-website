import React from 'react';
import Image from "next/image";
import Link from "next/link";
import CardEvent from "@/components/card/CardEvent";

const EventComponent = () => {
    const news = [
        {
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/new-image-1.png'
        },
        {
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/news&event.png'
        },
        {
            title: "កម្មវិធី សង្ក្រាន្តឆ្នាំថ្មី​ និង​ពិសាអាហារសាមគ្គីភាតរភាពរបស់គ្រួសារ CSTAD នាថ្ងៃព្រហស្បតិ៍  ទី១១ ខែមេសា​ ឆ្នាំ២០២៤",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/news3.png'
        },
        {
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/new-image-1.png'
        },


    ];
    // Function to determine the class based on the location
    const getLocationColorClass = (location: string) => {
        // Define your logic to determine the color class based on the location
        if (location === "Phnom Penh") {
            return "text-primary"; // Example class for red text color
        } else {
            return "text-blue-500"; // Example class for blue text color
        }
    };

    return (
        <div>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
                <h2 className="text-3xl font-extrabold text-error mb-6">News & Events</h2>
                <h3 className="text-xl font-semibold text-primary mb-8">STAY UPDATED WITH THE LATEST NEWS & EVENTS</h3>
                    <CardEvent/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {news.map((item, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="relative w-full h-48 md:h-auto">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-lg"
                                    />
                                </div>
                                <div className="p-6">
                                    <div
                                        className={`flex items-center text-sm ${getLocationColorClass(item.location)} mb-2`}>
                                        <span>{item.location}</span>
                                        <span className="mx-2">|</span>
                                        <span>{item.date}</span>
                                    </div>
                                    <h4 className="text-base tracking-wide text-gray-80">{item.title}</h4>
                                    <Link href="#" passHref>
                                        <button className="text-primary hover:text-blue-700 mt-4 inline-block">Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-end mt-8">

                </div>
            </div>
        </div>

    );
};

export default EventComponent;