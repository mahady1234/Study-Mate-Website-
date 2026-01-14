import React from "react";

const AboutSection = () => {
    return (
        <div className="mt-24 px-4 md:px-0 max-w-6xl mx-auto space-y-24 ">

            <section className="space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
                    About StudyMate
                </h2>

                <p className="text-center  text-lg max-w-3xl mx-auto leading-relaxed">
                    StudyMate is a student-focused platform built to help learners connect,
                    collaborate, and grow together through meaningful study partnerships.
                </p>

                <div className="max-w-4xl mx-auto space-y-4  text-md leading-relaxed text-center md:text-left">
                    <p>
                        Studying alone can often feel overwhelming and unproductive.
                        StudyMate removes this barrier by helping students discover
                        compatible study partners based on shared goals and interests.
                    </p>

                    <p>
                        Whether you are preparing for exams, improving academic skills,
                        or building consistency, StudyMate supports you through
                        focused peer-to-peer learning.
                    </p>
                </div>
            </section>

            <section className="grid md:grid-cols-2 gap-10">
                <div className=" border border-blue-100 rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold  mb-3">
                        Our Vision
                    </h3>
                    <p className=" leading-relaxed">
                        To build a trusted learning community where every student
                        can easily find the right study partner and succeed together.
                    </p>
                </div>

                <div className=" border border-blue-100 rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-black mb-3">
                        Our Mission
                    </h3>
                    <p className=" leading-relaxed">
                        To simplify study collaboration by connecting students instantly
                        and encouraging consistent, focused, and supportive learning.
                    </p>
                </div>
            </section>

            <section className=" border border-blue-100 rounded-2xl p-10 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                    Our Objectives
                </h3>

                <ul className="space-y-3  list-disc list-inside">
                    <li>Help students find suitable study partners effortlessly</li>
                    <li>Encourage collaborative and peer-based learning</li>
                    <li>Create a safe, respectful, and productive study environment</li>
                </ul>
            </section>
            
        </div>
    );
};

export default AboutSection;
