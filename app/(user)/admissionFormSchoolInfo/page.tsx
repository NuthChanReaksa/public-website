'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';
import Link from "next/link";

const SchoolInformationForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data:any) => {
        // Handle form submission logic here
        console.log(data);
    };

    return (
        <div className="container mx-auto py-8 bg-white-80">
            <h2 className="text-4xl font-bold mb-6 text-center text-primary py-4">Application Form for Registration</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-sm border border-gray-200">
                {/* Step Indicator */}
                <div className="flex items-center justify-center py-4 mb-8">
                    <div className="flex flex-col items-center mx-2">
                        <div className="border border-primary text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold">1</div>
                        <div className="text-gray-500 mt-2">Personal Information</div>
                    </div>
                    <div className="border-t border-gray-300 flex-grow mx-4"></div>
                    <div className="flex flex-col items-center mx-2">
                        <div className="border border-primary text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold">2</div>
                        <div className="text-gray-500 mt-2">Education Information</div>
                    </div>
                    <div className="border-t border-gray-300 flex-grow mx-4"></div>
                    <div className="flex flex-col items-center mx-2">
                        <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">3</div>
                        <div className="text-primary font-semibold mt-2">School Information</div>
                    </div>
                </div>

                <h2 className="text-xl font-bold border-b border-gray-300 py-4 mb-6">School Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block mb-2 font-semibold">Shift</label>
                        <select {...register('shift')} className="input w-full border-y py-4">
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Degree</label>
                        <select {...register('degree')} className="input w-full border-y py-4">
                            <option value="bachelor">Bachelor Degree</option>
                            <option value="master">Master Degree</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Study Program</label>
                        <select {...register('studyProgram')} className="input w-full border-y py-4">
                            <option value="webDesign">Web Design</option>
                            <option value="softwareEngineering">Software Engineering</option>
                        </select>
                    </div>
                </div>

                <Link href={"/welcomePage"}>
                    <div className="flex justify-end mt-8">
                        <Button type="submit" className="bg-primary text-white">Register Now</Button>
                    </div>
                </Link>

            </form>
        </div>
    );
};

export default SchoolInformationForm;
