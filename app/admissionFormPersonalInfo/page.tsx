'use client'
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';

const PersonalInformationForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data:any) => {
        // Handle form submission logic here
        console.log(data);
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center text-primary">Application Form for Registration</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md">
                <div className="flex items-center justify-center">
                    {/*number 1*/}
                    <div className="flex flex-col items-center">
                        <div
                            className="text-2xl font-bold step-number rounded-full bg-primary text-white w-14 h-14 flex items-center justify-center">1
                        </div>
                        <div className="step-label ml-2 text-primary font-semibold">Personal Information</div>

                    </div>



                    {/*number 2*/}
                    <div className="flex flex-col items-center ml-6">
                        <div
                            className="text-2xl font-bold step-number rounded-full bg-gray-80 text-gray-600 w-14 h-14 flex items-center justify-center">2
                        </div>
                        <div className="step-label ml-2 text-primary">Education Information</div>
                    </div>
                    {/*number 3*/}
                    <div className="flex flex-col items-center ml-6">
                        <div
                            className="text-2xl font-bold step-number rounded-full bg-gray-300 text-gray-600 w-14 h-14 flex items-center justify-center">3
                        </div>
                        <div className="step-label ml-2 text-gray-600">School Information</div>
                    </div>
                </div>
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1">Full Name (EN)</label>
                            <Input type="text" {...register('fullNameEn', {required: true})} placeholder="Chan Tola"/>
                        </div>
                        <div>
                            <label className="block mb-1">Full Name (KH)</label>
                            <Input type="text" {...register('fullNameKh', {required: true})} placeholder="Chan Tol"/>
                        </div>
                        <div>
                            <label className="block mb-1">Gender</label>
                            <select {...register('gender')} className="input w-full">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Date of Birth</label>
                            <Input type="date" {...register('dob', {required: true})} />
                        </div>
                        <div>
                            <label className="block mb-1">Contact Number</label>
                            <Input type="tel" {...register('contactNumber', {required: true})}
                                   placeholder="+855 12 345 678"/>
                        </div>
                        <div>
                            <label className="block mb-1">Email</label>
                            <Input type="email" {...register('email', {required: true})}
                                   placeholder="student.istad@gmail.com"/>
                        </div>
                        <div>
                            <label className="block mb-1">High School</label>
                            <Input type="text" {...register('highSchool', {required: true})}
                                   placeholder="Chea Sim Takeo High School"/>
                        </div>
                        <div>
                            <label className="block mb-1">Place of Birth</label>
                            <Input type="text" {...register('placeOfBirth', {required: true})}
                                   placeholder="Takeo Province"/>
                        </div>
                        <div>
                            <label className="block mb-1">Current Address</label>
                            <Input type="text" {...register('currentAddress', {required: true})}
                                   placeholder="Chamkar Mon, Phnom Penh, Cambodia"/>
                        </div>
                        <div>
                            <label className="block mb-1">Guardian Contact</label>
                            <Input type="tel" {...register('guardianContact', {required: true})}
                                   placeholder="+855 12 345 678"/>
                        </div>
                        <div>
                            <label className="block mb-1">Guardian Relationship</label>
                            <Input type="text" {...register('guardianRelationship', {required: true})}
                                   placeholder="Mother, Father, Brother..."/>
                        </div>
                        <div>
                            <label className="block mb-1">Get to know ISTD through:</label>
                            <Input type="text" {...register('source', {required: true})}
                                   placeholder="Social Media Announcement"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="border-dashed border-2 border-gray-400 p-4 mb-4">
                            <label className="block mb-1 text-center">Upload Formal Picture</label>
                            <p className="text-sm text-center">JPG, PNG, or PDF. File size no more than 10MB</p>
                            <Input type="file" {...register('formalPicture', {required: true})}
                                   className="w-full mt-2"/>
                        </div>
                        <div className="border-dashed border-2 border-gray-400 p-4">
                            <label className="block mb-1 text-center">Upload Identity</label>
                            <p className="text-sm text-center">JPG, PNG, or PDF. File size no more than 10MB</p>
                            <Input type="file" {...register('identity', {required: true})} className="w-full mt-2"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <Button type="submit" className="btn-primary">Next</Button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInformationForm;
