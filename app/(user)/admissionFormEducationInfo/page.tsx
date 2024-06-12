'use client'
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';
import {IoCloudUploadOutline} from "react-icons/io5";
import CustomFileInput from "@/components/admissionComponent/CustomFileInput";
import Link from "next/link";


const AdmissionFormEducationInfo = () => {
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
                        <div
                            className="border border-primary text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold">1
                        </div>
                        <div className="text-gray-500 mt-2">Personal Information</div>
                    </div>
                    <div className="border-t border-gray-300 flex-grow mx-4"></div>
                    <div className="flex flex-col items-center mx-2">
                        <div
                            className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">2
                        </div>
                        <div className="text-primary font-semibold mt-2">Education Information</div>
                    </div>
                    <div className="border-t border-gray-300 flex-grow mx-4"></div>
                    <div className="flex flex-col items-center mx-2">
                        <div
                            className="border border-primary text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold">3
                        </div>
                        <div className="text-gray-500 mt-2">School Information</div>
                    </div>
                </div>

                <h2 className="text-xl font-bold border-b border-gray-300 py-4 mb-6">Education Information</h2>

                <div className="grid grid-cols-1 gap-6">
                    {/*info*/}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/*Class Student*/}
                        <div>
                            <label className="block mb-1 font-semibold">Class Student</label>
                            <select {...register('classStudent')} className="input w-full">
                                <option value="socialScience">Social Science</option>
                                <option value="science">Science</option>
                            </select>
                        </div>
                        {/*Year of Completion*/}
                        <div>
                            <label className="block mb-1 font-semibold">Year of Completion</label>
                            <Input type="text" {...register('yearOfCompletion', {required: true})}
                                   placeholder="2023-2024"/>
                        </div>
                        {/*BacII Grade*/}
                        <div>
                            <label className="block mb-1 font-semibold">BacII Grade</label>
                            {/* Grade */}
                            <div className="flex">
                                <div className="mr-4">
                                    <input type="radio" {...register('bacIIGrade', {required: true})} value="A"/>
                                    <label className="ml-1">A</label>
                                </div>
                                <div className="mr-4">
                                    <input type="radio" {...register('bacIIGrade', {required: true})} value="B"/>
                                    <label className="ml-1">B</label>
                                </div>
                                <div className="mr-4">
                                    <input type="radio" {...register('bacIIGrade', {required: true})} value="C"/>
                                    <label className="ml-1">C</label>
                                </div>
                                <div className="mr-4">
                                    <input type="radio" {...register('bacIIGrade', {required: true})} value="D"/>
                                    <label className="ml-1">D</label>
                                </div>
                                <div className="mr-4">
                                    <input type="radio" {...register('bacIIGrade', {required: true})} value="E"/>
                                    <label className="ml-1">E</label>
                                </div>
                                <div className="mr-4">
                                    <input type="radio" {...register('bacIIGrade', {required: true})} value="Other"/>
                                    <label className="ml-1">Other/Wait for result</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*File upload*/}
                    <div className="flex flex-row justify-between">
                        <div className="border-dashed border-2 border-gray-300 p-4 mb-4">
                            <label className="text-center flex flex-col items-center">
                                <IoCloudUploadOutline className="w-8 h-8 mb-4 text-gray-400"/>
                                High School Certificate
                            </label>
                            <p className="text-sm text-center text-gray-500">JPG, PNG, or PDF. File size no more than
                                10MB</p>
                            <CustomFileInput register={register}/>
                        </div>
                        <div className="border-dashed border-2 border-gray-300 p-4 mb-4">
                            <label className="text-center flex flex-col items-center">
                                <IoCloudUploadOutline className="w-8 h-8 mb-4 text-gray-400"/>
                                Vocational Training II Certificate
                            </label>
                            <p className="text-sm text-center text-gray-500">JPG, PNG, or PDF. File size no more than
                                10MB</p>
                            <CustomFileInput register={register}/>
                        </div>
                        <div className="border-dashed border-2 border-gray-300 p-4">
                            <label className="text-center flex flex-col items-center">
                                <IoCloudUploadOutline className="w-8 h-8 mb-4 text-gray-400"/>
                                Additional Certificate
                            </label>
                            <p className="text-sm text-center text-gray-500">JPG, PNG, or PDF. File size no more than
                                10MB</p>
                            <CustomFileInput register={register}/>
                        </div>
                    </div>
                </div>


                <div className="flex justify-end mt-4 ">
                    <Link href={"/admissionFormSchoolInfo"}>
                        <Button type="submit" className="bg-primary">Next</Button>
                    </Link>

                </div>
            </form>
        </div>
    );
};

export default AdmissionFormEducationInfo;
