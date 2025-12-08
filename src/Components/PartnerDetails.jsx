import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { FaStar, FaMapMarkerAlt, FaClock, FaUser } from "react-icons/fa";

const PartnerDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [partner, setPartner] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user) {
            navigate("/authRoot/login");
            return;
        }
        axios.get(`http://localhost:3000/partners/${id}`)
            .then(res => setPartner(res.data))
            .catch(err => console.log(err));
    }, [id, user, navigate]);

    const handleRequest = async () => {
        if (!user?.email) {
            toast.error("Please login to send a request");
            return;
        }
        setLoading(true);
        try {
            await axios.post(`http://localhost:3000/partners/${id}/request`, { userEmail: user.email });

            setPartner(prev => ({ ...prev, partnerCount: (prev.partnerCount || 0) + 1 }));

            toast.success("Partner request sent!");
        } catch (err) {
            console.log(err);
            toast.error("Failed to send request");
        } finally {
            setLoading(false);
        }
    };

    if (!partner) return <div className="flex justify-center items-center h-screen">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg relative z-10">
                <div className="flex flex-col items-center">
                    <img
                        src={partner.profileimage}
                        alt={partner.name}
                        className="w-36 h-36 rounded-full object-cover border-4 border-blue-100"
                    />
                    <h2 className="text-3xl font-bold mt-4 text-gray-800">{partner.name}</h2>
                    <p className="text-gray-500 mt-1">{partner.subject} ({partner.studyMode})</p>
                </div>

                {/* Details Grid */}
                <div className="mt-8 grid md:grid-cols-2 gap-6 text-gray-800">
                    <div className="border p-5 rounded-xl flex items-center gap-2">
                        <FaUser className="text-blue-500" />
                        Partner Count: {partner.partnerCount || 0}
                    </div>
                    <div className="border p-5 rounded-xl flex items-center gap-2">
                        <FaUser className="text-blue-500" />
                        Experience: {partner.experienceLevel}
                    </div>
                    <div className="border p-5 rounded-xl flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-500" />
                        Location: {partner.location}
                    </div>
                    <div className="border p-5 rounded-xl flex items-center gap-2">
                        <FaClock className="text-blue-500" />
                        Availability: {partner.availabilityTime}
                    </div>
                </div>

                {/* Rating */}
                {partner.rating && (
                    <div className="flex justify-center items-center gap-2 mt-6 text-gray-800">
                        <FaStar className="text-yellow-400 text-xl" />
                        <span className="text-lg font-semibold">{partner.rating} / 5</span>
                    </div>
                )}

                {/* Buttons */}
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        onClick={handleRequest}
                        disabled={loading}
                        className={`px-6 py-2 rounded text-white transition ${loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                    >
                        {loading ? "Sending..." : "Send Partner Request"}
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                    >
                        Go Back
                    </button>
                </div>
            </div>

            {/* Optional background blur */}
            <div className="fixed inset-0 backdrop-blur-sm bg-black/10 z-0"></div>
        </div>
    );
};

export default PartnerDetails;
