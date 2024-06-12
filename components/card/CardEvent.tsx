import React from 'react';
import Image from "next/image";
import Link from "next/link";

const CardEvent = () => {
    return (
        <div className="mb-8 max-w-full mx-auto">
            <Link href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image
                    src="/scholarship-image.png"
                    alt="Scholarship Announcement"
                    className="object-cover w-full md:w-1/2 rounded-t-lg md:rounded-none md:rounded-l-lg p-8"
                    width={960}
                    height={540}
                />
                <div className="flex flex-col justify-between p-8 leading-normal w-full md:w-1/2">
                    <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        សេចក្តីជូនដំណឹង <br/>
                        ស្តីអំពីអាហារូបករណ៍បច្ចេកវិទ្យាឌីជីថល​ <br/>
                        (អាយធី) <br/>
                    </h5>
                    <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
                        CSTAD ផ្តល់ជូនអាហារូបករណ៍ ​១០០%ចំនួន ៦០កន្លែងអាហារូបករណ៍ <br/>
                        នេះជំនួយដល់និស្សិតដែលចង់ពង្រឹងមូលដ្ឋានគ្រឹះបច្ចេកវិទ្យា <br/>
                        ឌីជីថល(​អាយធី) ដែលមានវគ្គសិក្សា.............</p>

                    <div className="flex items-center text-sm text-primary dark:text-gray-400">
                        <span>Phnom Penh</span>
                        <span className="mx-2">|</span>
                        <span>May 9, 2024</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CardEvent;
