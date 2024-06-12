// pages/admission-criteria.js
import Image from 'next/image';

export default function AdmissionCriteria() {
    return (
        <section className="container min-h-screen bg-gray-100">
            {/*banner start here*/}
            <div className="container flex items-start rounded-lg bg-primary text-white p-12 mt-8">
                <div className="text-start ml-24">
                    <h1 className="text-3xl font-semibold">Admission Criteria</h1>
                    <button className="text-white-80 hover:text-white border border-white-80 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-start me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 my-8">Register Now</button>
                </div>
            </div>
            {/*banner end here*/}

            <div className="bg-white-80 mx-auto mt-10 px-4 shadow-sm my-12 py-12">
                <div className="text-start">
                    <p className="text-xl md:text-2xl font-semibold">
                        Upon submitting the online application and paying for the application fee, please collect and submit the required documentations to our office.
                    </p>
                </div>

                <div className="mt-4">

                    <div className="p-6 tracking-wide">
                        <h2 className="text-[32px] font-bold text-error">1. Profile Picture</h2>
                        <p className="mt-2 text-xl md:text-2xl font-semibold ">You must upload professional profile picture as format below:</p>
                        <ul className="ml-8 list-disc list-inside mt-2 text-xl md:text-2xl font-semibold ">
                            <li>Blue background</li>
                            <li>Formal clothes</li>
                        </ul>
                    </div>

                    <div className="p-6 tracking-wide">
                        <h2 className="text-[32px] font-bold text-error">2. Proof of Identity</h2>
                        <p className="mt-2 text-xl md:text-2xl font-semibold ">You must submit one of your identification documents as below:</p>
                        <ul className="ml-8 list-disc list-inside mt-2 text-xl md:text-2xl font-semibold ">
                            <li>Cambodia National Identity Card</li>
                            <li>Birth Certification</li>
                            <li>Passport</li>
                        </ul>
                    </div>

                    <div className="p-6 tracking-wide">
                        <h2 className="text-[32px] font-bold text-error">3. Proof of High School Graduation</h2>
                        <p className="mt-2 text-xl md:text-2xl font-semibold ">
                            The following are our high school graduation requirements based on the type of school from which you are graduating:
                        </p>
                        <div className="overflow-x-auto mt-4 pt-4">
                            <table className="min-w-full bg-white border">
                                <thead>
                                <tr className={"text-gray-600"}>
                                    <th className="text-xl px-4 py-4 border">Graduation Form</th>
                                    <th className="text-xl px-4 py-4 border">Required High School Graduation
                                        Documentation
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="px-4 py-4 border">Public School</td>
                                    <td className="px-4 py-4 border">
                                        <ul className="list-disc list-inside">
                                            <li>National Diploma</li>
                                            <li>High School Transcript/ Grade Report</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 border">Private School (Khmer program)</td>
                                    <td className="px-4 py-4 border">
                                        <ul className="list-disc list-inside">
                                            <li>National Diploma</li>
                                            <li>High School Transcript/ Grade Report</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 border">Private School (International program)</td>
                                    <td className="px-4 py-4 border">
                                        <ul className="list-disc list-inside">
                                            <li>High School is Official Certificate/ Diploma</li>
                                            <li>12th Grade Transcript/Grade Report OR National Diploma</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 border">International Student/ School Outside Cambodia</td>
                                    <td className="px-4 py-4 border">
                                        <ul className="list-disc list-inside">
                                            <li>Certified and Translated High School Diploma</li>
                                            <li>Certified and Translated High School Transcript</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 border">College or University (Transfer)</td>
                                    <td className="px-4 py-4 border">
                                        <ul className="list-disc list-inside">
                                            <li>High School National Diploma OR Equivalent</li>
                                            <li>Transcript (all courses attended)</li>
                                            <li>Syllabi (all courses attended)</li>
                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
