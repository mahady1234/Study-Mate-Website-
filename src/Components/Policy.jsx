import React from "react";

const Policy = () => {
    return (
        <div className="mt-24 px-4 md:px-0 max-w-6xl mx-auto space-y-24 ">

          
            <section className="space-y-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    StudyMate Policies
                </h2>

                <p className="text-center  text-lg max-w-3xl mx-auto">
                    Clear and transparent guidelines to ensure fairness,
                    safety, and trust for every StudyMate user.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className=" border border-blue-100 rounded-2xl p-8 shadow-sm">
                        <h4 className="font-semibold text-lg  mb-3">
                            Privacy Policy
                        </h4>
                        <p className=" leading-relaxed">
                            We respect user privacy and collect only essential information
                            required to improve study connections. Your data is protected.
                        </p>
                    </div>

                    <div className=" border border-blue-100 rounded-2xl p-8 shadow-sm">
                        <h4 className="font-semibold text-lg  mb-3">
                            Terms of Use
                        </h4>
                        <p className=" leading-relaxed">
                            Users must maintain respectful behavior.
                            Any misuse or false information may lead to restrictions.
                        </p>
                    </div>

                    <div className=" border border-blue-100 rounded-2xl p-8 shadow-sm">
                        <h4 className="font-semibold text-lg  mb-3">
                            User Responsibilities
                        </h4>
                        <p className=" leading-relaxed">
                            Users are expected to communicate professionally,
                            provide accurate details, and follow platform rules.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Policy;
