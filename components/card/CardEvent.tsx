import React from 'react';
import Image from "next/image";
import Link from "next/link";

const CardEvent = () => {
    return (
        <div className="w-full mb-8">
            <Link href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image
                    src="/news&event/new-image-1.png"
                    alt="Scholarship Announcement"
                    className="object-cover w-full md:w-auto md:max-w-96 md:h-96 md:rounded-none md:rounded-t-lg"
                    width={800}
                    height={800}
                />
                <div className="flex flex-col justify-between p-4 w-full leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                        សេចក្តីជូនដំណឹង <br/>
                        ស្តីអំពីអាហារូបករណ៍បច្ចេកវិទ្យាឌីជីថល​ <br/>
                        (អាយធី) <br/>
                    </h5>
                    <p className="mb-3 font-normal text-gray-80 dark:text-gray-400">
                        CSTAD ផ្តល់ជូនអាហារូបករណ៍ ​១០០%ចំនួន ៦០កន្លែង <br/>
                        អាហារូបករណ៍នេះជំនួយដល់និស្សិតដែលចង់ពង្រឹងមូលដ្ឋានគ្រឹះ <br/>
                        បច្ចេកវិទ្យាឌីជីថល(​អាយធី) ដែលមានវគ្គសិក្សា.............</p>

                    <div
                        className={"flex items-center text-sm mb-2 text-primary"}>
                        <span>phnom penh</span>
                        <span className="mx-2">|</span>
                        <span>October 22, 2023</span>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default CardEvent;