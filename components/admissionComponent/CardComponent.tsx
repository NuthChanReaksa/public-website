import React from 'react';
import Image from "next/image";

const CardComponent = () => {

    const programs2 = [
        { title: 'Software Development', degree: 'Bachelor of computer science', image: '/program/cyber-security.png' },
        { title: 'Data Science', degree: 'Bachelor of computer science', image: '/program/data-science.png' },
        { title: 'Cyber Security', degree: 'Bachelor of computer science', image: '/program/software-program.png' },
    ];

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-error mb-2">New Academic Year’s Information</h2>
            <h3 className="text-6xl font-bold tracking-wide text-primary mb-8">Essential Information for the New <br/>
                Academic Year</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs2.map((program, index) => (
                    <div key={index} className="relative h-full transition hover:scale-105">
                        <Image src={program.image} alt={program.title}
                               width={500}
                               height={600}
                               className="w-full h-full object-cover rounded-lg"/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                            <div className="flex flex-col items-start text-white">
                                <h2 className="text-3xl font-bold">{program.title}</h2>
                                <div className="h-1 w-24 bg-error bg-left my-2"></div>
                                <p className="text-md tracking-wide">{program.degree}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardComponent;













