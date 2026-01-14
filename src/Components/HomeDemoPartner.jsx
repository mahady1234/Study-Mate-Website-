import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const HomeDemoPartner = () => {
    const [partners, setPartners] = useState([]);
    const navigate = useNavigate();
    const { user } = use(AuthContext);

    useEffect(() => {
        axios.get('https://study-mate-server-eta.vercel.app/partners')
            .then(res => {
                const sorted = res.data
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 4);
                setPartners(sorted);
            })
            .catch(err => console.log(err));
    }, []);

    const handleViewProfile = (id) => {
        if (!user) {
            navigate("/authRoot/login");
        } else {
            navigate(`/details/${id}`);
        }
    };

    return (
        <div className="max-w-6xl mx-auto my-16 px-4">
            <h2 className="text-4xl text-center font-bold mb-10 text-base-content">
                Top Study Partners
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
                {partners.map((partner, index) => (
                    <div
                        key={partner._id}
                        className="bg-base-100 p-6 rounded-2xl shadow-lg 
                        transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        style={{
                            animation: `fadeUp 0.5s ease ${index * 0.2}s forwards`,
                            opacity: 0
                        }}
                    >
                        <div className="flex justify-center">
                            <img
                                src={partner.profileimage}
                                className="w-28 h-28 rounded-full object-cover border-4 border-base-300"
                                alt={partner.name}
                            />
                        </div>

                        <h3 className="text-center font-semibold text-xl mt-4 text-base-content">
                            {partner.name}
                        </h3>

                        <p className="text-center h-15 mt-2 text-base-content/70">
                            {partner.subject} • {partner.skill}
                        </p>

                        <div className="flex justify-center items-center gap-1 mt-3 text-yellow-400">
                            <FaStar />
                            <span className="font-medium text-base-content">
                                {partner.rating}
                            </span>
                        </div>

                        <button
                            onClick={() => handleViewProfile(partner._id)}
                            className="w-full mt-6 py-2 rounded-xl bg-blue-900 text-primary-content font-medium 
                            hover:opacity-90 transition duration-300"
                        >
                            View Profile
                        </button>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default HomeDemoPartner;