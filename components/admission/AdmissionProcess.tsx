import React from 'react';
import {Button} from "@/components/ui/button";

const AdmissionProcess = () => {
    return (
        <div className="bg-white-80 p-4 sm:p-8 md:p-12 lg:p-4 mb-4">
            <div className="grid place-content-center">
                <h1 className="text-4xl font-bold mb-4 text-start">Admissions Criteria And Processes</h1>

                <p className="mb-8 ml-8 text-start text-[24px]  tracking-wide space-x-4 text-black">
                    Welcome to our Admissions page! Here, you will find all the necessary information to guide you
                    through <br/> the
                    application process for our undergraduate and graduate programs. Our goal is to make your <br/>
                    application
                    experience as straightforward and transparent as possible. Please review the criteria
                    and <br/> steps
                    below to
                    ensure you meet all requirements and submit a complete application.
                </p>
                <div className="flex flex-row items-start justify-start space-x-8">
                    <Button className="bg-primary text-white-80 font-bold w-full sm:w-auto">
                        Admission Process
                    </Button>
                    <Button className="bg-primary text-white-80 font-bold w-full sm:w-auto">
                        Admission Criteria
                    </Button>
                </div>
            </div>


        </div>
    );
};

export default AdmissionProcess;
