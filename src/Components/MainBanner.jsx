import React, { useState, useEffect } from 'react';

const slides = [
    {
        id: 1,
        title: "Study Together",
        description: "Connect with like-minded learners and grow together.",
        image: "https://plus.unsplash.com/premium_photo-1663957822454-b54ae92a27a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Plan Smarter",
        description: "Organize your study schedule efficiently with our tools.",
        image: "https://media.istockphoto.com/id/2202479252/photo/focused-diverse-multiracial-students-work-on-group-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=qi0j5QqgfAJfgAbm0U7lR37a46Q0G8MwqRg_VR80qgw=",
    },
    {
        id: 3,
        title: "Achieve More",
        description: "Stay motivated and track your progress effectively.",
        image: "https://plus.unsplash.com/premium_photo-1723874482938-6680336ca54c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHklMjBtYXRlfGVufDB8fDB8fHww",
    },
];

const ImageCarousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-screen flex justify-center items-center relative overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute w-11/12 sm:w-8/12 h-2/3 sm:h-3/4 rounded-xl shadow-2xl shadow-blue-700 transition-opacity duration-1000 flex flex-col justify-start items-center text-center
                        ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className={`mt-6 sm:mt-8 px-4 sm:px-0 transition-all duration-700 transform
                        ${index === current ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
                    >
                        <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-white drop-shadow-md">{slide.title}</h2>
                        <p className="text-sm sm:text-lg text-white drop-shadow-md">{slide.description}</p>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-8 sm:bottom-10 flex gap-2 sm:gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${index === current ? "bg-blue-500" : "bg-gray-400"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
