import React from 'react';
import Image from "next/image";

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-white rounded-sm shadow-sm tracking-wide font-semibold space-y-4">
                <div className="flex flex-wrap items-center">
                    <p className="text-[16px]">News & Events</p>
                    <span className="px-2 text-[16px]">&gt;</span>
                    <h5 className="text-[16px] font-semibold text-primary">Tags of this article</h5>
                </div>

                {/*head and image */}
                <h1 className="text-center text-xl sm:text-2xl font-bold my-4">
                    ការប្រកាសផ្តល់អាហារូបករណ៍ដល់និស្សិតអភិវឌ្ឍន៍កម្មវិធី តួកនវិទ្យាស្ថាន ១០០%
                </h1>
                <div className="flex justify-center mb-8">
                    <Image src="/scholarship3.png" alt="ISTAD Logo" width={500} height={500} className="w-full sm:w-auto h-auto"/>
                </div>
                {/*head and image */}

                <h2 className="text-center text-lg sm:text-xl font-semibold text-red-600 mb-6">
                    អាហារូបករណ៍ ១០០% ចំនួន ៥០ កន្លែង សម្រាប់ឆ្នាំសិក្សា ២០២៣
                </h2>

                <h1 className="text-start text-md sm:text-lg font-bold my-4">
                    វិទ្យាស្ថានអភិវឌ្ឍន៍វិទ្យាសាស្រ្ត និង បច្ចេកវិទ្យាកម្រិតខ្ពស់បាននឹងកំពុងផ្តល់អាហារូបករណ៍ ចំនួន 50
                    កន្លែង សម្រាប់ឆ្នាំសិក្សា 2023។
                </h1>

                {/* number 1*/}
                <div className="my-4 space-y-2">
                    <h2 className="font-semibold">1. មុខវិជ្ជាដែលសិស្សជាស្ថាពរគួររៀន:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Java programming</li>
                        <li>Web Design</li>
                        <li>Database</li>
                        <li>Spring</li>
                        <li>Git and Deployment</li>
                        <li>UX/UI Concept and Design</li>
                        <li>Project Management</li>
                    </ul>
                </div>

                {/* number 2*/}
                <div className="my-4 space-y-2">
                    <h2 className="font-semibold">2. មុខវិជ្ជាដែលត្រូវរួមផ្សំជាមួយមុខវិជ្ជាដទៃ:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Blockchain</li>
                        <li>Cyber Security</li>
                        <li>Data Analytics</li>
                        <li>DevOps</li>
                    </ul>
                </div>

                {/* number 3*/}
                <div className="my-4 space-y-2">
                    <h2 className="font-semibold">3. លក្ខណនៃការចុះឈ្មោះ</h2>
                    <p>ជាបេក្ខជនទាំងពីរភេទដែលកំពុងសិក្សា ឬ បានបញ្ចប់ការសិក្សាផ្នែកព័ត៌មានវិទ្យា</p>
                </div>

                {/* number 4*/}
                <div className="my-4 space-y-2">
                    <h2 className="font-semibold">4. កាលបរិច្ឆេទ និងការទទួលពាក្យចាប់ពីការផ្សាយជូនដំណឹងនេះតទៅរហូតដល់ថ្ងៃទី ៣០ ខែ មករា ឆ្នាំ ២០២៣</h2>
                </div>

                {/* number 5*/}
                <div className="my-4 space-y-2">
                    <h2 className="font-semibold">5. កាលបរិច្ឆេទនៃការប្រលង</h2>
                    <p>បប្រលងសរសេរ នៅថ្ងៃទី ៤ ខែ កុម្ភៈ ឆ្នាំ ២០២៣</p>
                    <p>សម្ភាស៍ នៅថ្ងៃទី ១១ ខែ កុម្ភៈ ឆ្នាំ ២០២៣</p>
                    <p>ចូលរៀននៅថ្ងៃទី ២០ ខែ កុម្ភៈ ឆ្នាំ ២០២៣</p>
                </div>

                {/* number 6*/}
                <div className="my-4 space-y-2">
                    <h2 className="font-semibold">6.វិញ្ញាសាប្រលង</h2>
                    <p>IT និង ភាសាអង់គ្លេស</p>
                </div>

                {/* number 7*/}
                <div className="my-4 space-y-2">
                    <h2 className="font-semibold">7. អត្ថប្រយោជន៍ដែលទទួលបាន:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>សិក្សាដោយឥតគិតថ្លៃទទួលបានអាហារូបករណ៍ពេញ ១០០%</li>
                        <li>ទទួលបានអាជីពច្បាស់លាស់លើជំនាញនីមួយៗ</li>
                        <li>ទទួលបានឱកាសទទួលនូវការចែករំលែកបទពិសោធ របស់វាគ្មិនល្អៗ និងមានគំនិតបែបអាជីវកម្ម និងដឹកនាំ</li>
                        <li>ទទួលបានឱកាសការងារទាំងក្នុងវិស័យរដ្ឋនិងឯកជន</li>
                        <li>ទទួលបានឱកាសទៅសិក្សាបន្តថ្នាក់អនុបណ្ឌិត និង បណ្ឌិតនៅក្រៅប្រទេស</li>
                    </ul>
                    <p> ព័ត៌មានលម្អិតសូមទាក់ទងមកកាន់វិទ្យាស្ថាន ISTAD តាមរយៈ៖ 093-990-910 / 095-990-910 ឬ
                        t.me/istadkh ឬនៅទីតាំងសាលាផ្ទាល់ដែលមានអាសយដ្ឋានស្ថិតនៅ ផ្ទះលេខ 24, ផ្លូវលេខ 562, សង្កាត់បឹងកក់ ១,
                        ខណ្ឌទួលគោក, រាជធានីភ្នំពេញ។</p>
                    <p>ចំណាំ៖ ករណីដែលមានការកែប្រែនៅចំណុចលេខ V ស្តីអំពីកាលបរិច្ឆេទនៃការប្រលង សាលានឹងជូនដំណឹងតាមពេលក្រោយ។
                        សូមអរគុណ !</p>
                </div>

            </div>
        </div>
    );
};

export default Page;
