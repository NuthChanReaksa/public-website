'use client'
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';
import {IoCloudUploadOutline} from "react-icons/io5";
import CustomFileInput from "@/components/admissionComponent/CustomFileInput";
import Link from "next/link";

const PersonalInformationForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data:any) => {
        // Handle form submission logic here
        console.log(data);
    };

    return (
        <div className="container mx-auto py-8 bg-white-80">
            <h2 className="text-4xl font-bold mb-6 text-center text-primary py-4">Application Form for Registration</h2>

            <form onSubmit={handleSubmit(onSubmit)} className=" p-6 rounded shadow-sm border-t border-gray-80 py-2">
                {/*number*/}
                <div className="flex items-center justify-center py-8 px-16">
                    {/*number 1*/}
                    <div className="flex flex-col items-center">
                        <div
                            className="text-2xl font-bold step-number rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center">
                            <span>1</span>
                        </div>
                        <div className="step-label ml-2 text-primary font-semibold">Personal Information</div>
                    </div>
                    <div className="border-t border-gray-400 flex-grow mx-2"></div>

                    {/*number 2*/}
                    <div className="flex flex-col items-center ml-6 ">
                        <div
                            className="text-2xl font-bold step-number rounded-full border border-primary text-primary w-12 h-12 flex items-center justify-center">
                            <span>2</span>
                        </div>

                        <div className="step-label ml-2 text-gray-80">Education Information</div>
                    </div>
                    <div className="border-t border-gray-400 flex-grow mx-2"></div>
                    {/*number 3*/}
                    <div className="flex flex-col items-center ml-6">
                        <div
                            className="text-2xl font-bold step-number rounded-full border border-primary text-primary w-12 h-12 flex items-center justify-center">
                            <span>3</span>

                        </div>
                        <div className="step-label ml-2 text-gray-80">School Information</div>
                    </div>
                </div>

                <h2 className="text-xl font-bold border-t border-b border-gray-300 py-4 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-semibold">Full Name (EN)</label>
                            <Input type="text" {...register('fullNameEn', {required: true})} placeholder="Chan Tola"/>
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Full Name (KH)</label>
                            <Input type="text" {...register('fullNameKh', {required: true})} placeholder="ច័ន្ទ តុលា"/>
                        </div>
                        <div>
                            <label className="block mb-1 border font-semibold">Gender</label>
                            <select {...register('gender')} className="input w-full">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Date of Birth</label>
                            <Input type="date" {...register('dob', {required: true})} />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Contact Number</label>
                            <Input type="tel" {...register('contactNumber', {required: true})}
                                   placeholder="+855 12 345 678"/>
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Email</label>
                            <Input type="email" {...register('email', {required: true})}
                                   placeholder="student.istad@gmail.com"/>
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">High School</label>
                            <Input type="text" {...register('highSchool', {required: true})}
                                   placeholder="Chea Sim Takeo High School"/>
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Place of Birth</label>
                            <Input type="text" {...register('placeOfBirth', {required: true})}
                                   placeholder="Takeo Province"/>
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Current Address</label>
                            <Input type="text" {...register('currentAddress', {required: true})}
                                   placeholder="Chamkar Mon, Phnom Penh, Cambodia"/>
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Guardian Contact</label>
                            <Input type="tel" {...register('guardianContact', {required: true})}
                                   placeholder="+855 12 345 678"/>
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Guardian Relationship</label>
                            <Input type="text" {...register('guardianRelationship', {required: true})}
                                   placeholder="Mother, Father, Brother..."/>
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Get to know ISTD through:</label>
                            <Input type="text" {...register('source', {required: true})}
                                   placeholder="Social Media Announcement"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between py-16">
                        <div className="border-dashed border-2 border-gray-80 p-4 mb-4">
                            <label className="mb-1 text-center flex flex-col items-center">
                                <IoCloudUploadOutline className={"w-[34px] h-[28px] my-4 text-gray-80"}/>
                                Upload Formal Picture
                            </label>
                            <p className="text-sm text-center text-gray-80">JPG, PNG, or PDF. File size no more than 10MB</p>
                            <CustomFileInput register={register} />
                        </div>
                        <div className="border-dashed border-2 border-gray-80 p-4">

                            <label className="mb-1 text-center flex flex-col items-center">
                                <IoCloudUploadOutline className={"w-[34px] h-[28px] my-4 text-gray-80"}/>
                                Upload Identity
                            </label>
                            <p className="text-sm text-center text-gray-80">JPG, PNG, or PDF. File size no more than 10MB</p>
                            <CustomFileInput register={register} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-4 ">
                    <Link href={"/admissionFormEducationInfo"}>
                        <Button type="submit" className="bg-primary">Next</Button>
                    </Link>

                </div>
            </form>
        </div>
    );
};

export default PersonalInformationForm;
