// pages/admission-process.js
import Image from 'next/image';
import { BsPersonSquare} from "react-icons/bs";
import {PiCertificateFill} from "react-icons/pi";
import {FaSchoolCircleExclamation} from "react-icons/fa6";

export default function AdmissionProcess() {
    return (
        <section className="container min-h-screen bg-whiteSmoke">
            {/*banner start here*/}
            <div className="container flex items-start rounded-lg bg-primary text-white p-12 mt-8">
                <div className="text-start">
                    <h1 className="text-3xl font-semibold">Admission Process</h1>
                    <button className="text-white-80 hover:text-white border border-white-80 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-start me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 my-8">Register Now</button>
                </div>
            </div>
            {/*banner end here*/}

            {/*admission process start here*/}
            <div className="flex flex-row items-center flex-wrap bg-white bg-opacity-80 p-6">
                <div className="w-full md:w-1/2 p-4">
                    <Image
                        src="/admission-process.png"
                        alt="Admission Process"
                        width={800}
                        height={400}
                        className="rounded shadow mx-auto"
                    />
                </div>
                <div className=" w-full md:w-1/2 p-4 text-start">
                    <h1 className="text-2xl md:text-4xl text-red-600 font-bold">Admission Process</h1>
                    <p className="mt-6 text-xl md:text-2xl">
                        Before starting the application to the Center of Science and Technology Advanced Development,
                        please check out our Admissions Criteria for eligibility. Then you can get started with the
                        online application and take the following steps:
                    </p>
                </div>
            </div>
            {/*admission process end here*/}

            {/*step of icon start here*/}
            <div className="flex flex-row items-center h-[320px] bg-white-80 justify-center mt-10 ">
                <div className="flex flex-col items-center w-[290px] h-[235px] text-center tracking-wide">
                    <BsPersonSquare className={"text-primary w-[125px] h-[125px]"} />
                    <h5 className={"text-primary text-[16px] font-bold mt-2"}>Step 1</h5>
                    <p className="font-semibold text-primary mt-2">Personal Information</p>
                </div>
                <div className="flex flex-col items-center w-[290px] h-[235px] text-center tracking-wide">
                    <PiCertificateFill className={"text-primary w-[125px] h-[125px]"}/>
                    <h5 className={"text-primary text-[16px] font-bold mt-2"}>Step 2</h5>
                    <p className="font-semibold text-primary mt-2">Education Information</p>
                </div>
                <div className="flex flex-col items-center w-[290px] h-[235px] text-center tracking-wide">
                    <FaSchoolCircleExclamation className={"text-primary w-[125px] h-[125px]"}/>
                    <h5 className={"text-primary text-[16px] font-bold mt-2"}>Step 3</h5>
                    <p className="font-semibold text-primary mt-2">School Information</p>
                </div>
            </div>
            {/*step of icon end here*/}


            {/*admission process start here*/}
            <div className="mt-10 bg-white-80 shadow-sm">
                    <div className="p-6 tracking-wide">
                        <h2 className="text-[32px] font-bold text-error">1. First Step</h2>
                        <p className="mt-2 text-xl md:text-2xl font-semibold ">You complete your personal information as the field required:</p>
                        <ul className="ml-8 list-disc list-inside mt-2 text-xl md:text-2xl font-semibold ">
                            <li>Basic information</li>
                            <li>Upload formal profile image</li>
                            <li>Upload identity card, birth certificate, or passport</li>
                        </ul>
                    </div>

                    <div className="p-6 mt-6">
                        <h2 className="text-[32px] font-bold text-error">2. Second Step</h2>
                        <p className="mt-2 text-xl md:text-2xl font-semibold ">You complete your education information as the field required:</p>
                        <ul className="ml-8 list-disc list-inside mt-2 text-xl md:text-2xl font-semibold ">
                            <li>Basic information of high school</li>
                            <li>Upload BAC II certificate or valuable certificate for clarity</li>
                        </ul>
                    </div>

                    <div className="p-6 mt-6">
                        <h2 className="text-[32px] font-bold text-error">3. Third Step</h2>
                        <p className="mt-2 text-xl md:text-2xl font-semibold ">You complete your school information as the field required:</p>
                        <ul className="ml-8 list-disc list-inside mt-2 text-xl md:text-2xl font-semibold ">
                            <li>Complete form with specific shift, degree, and study program</li>
                        </ul>
                    </div>
                </div>
                {/*admission process end here*/}

                {/*application is complete start here*/}
            <div className="bg-white-80 rounded-sm p-6 mt-10 text-xl md:text-2xl tracking-wide mb-8 font-semibold ">
                <h2 className="text-start">Once your application is complete, you will receive
                    an admission offer via email. Take the following steps to ensure a successful CSTAD experience:</h2>
                <ol className="list-decimal list-inside mt-4 font-semibold ">
                    <li className={"mt-2"}>Accept the Offer</li>
                    <li className={"mt-2"}>Wait for course registration and tuition invoice</li>
                    <li className={"mt-2"}>Pay tuition</li>
                    <li className={"mt-2"}>Join orientation day and attend your first lesson as the first step to success!</li>
                </ol>
            </div>
            {/*application is complete end here*/}

        </section>
    );
}
