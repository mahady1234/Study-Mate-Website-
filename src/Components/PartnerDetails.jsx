// import React, { useContext, useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Auth/AuthProvider";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { FaStar, FaMapMarkerAlt, FaClock, FaUser } from "react-icons/fa";

// const PartnerDetails = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const { user } = useContext(AuthContext);

//     const [partner, setPartner] = useState(null);
//     const [loading, setLoading] = useState(false);

//     // Auth + data fetch
//     useEffect(() => {
//         if (!user) {
//             navigate("/authRoot/login");
//             return;
//         }

//         axios
//             .get(`https://study-mate-server-eta.vercel.app/partners/${id}`)
//             .then((res) => setPartner(res.data))
//             .catch((err) => console.log(err));
//     }, [id, user, navigate]);

//     const handleRequest = async () => {
//         if (!user?.email) {
//             toast.error("Please login to send a request");
//             return;
//         }

//         setLoading(true);
//         try {
//             await axios.post(
//                 `https://study-mate-server-eta.vercel.app/partners/${id}/request`,
//                 { userEmail: user.email }
//             );

//             setPartner((prev) => ({
//                 ...prev,
//                 partnerCount: (prev.partnerCount || 0) + 1,
//             }));

//             toast.success("Partner request sent!");
//         } catch (err) {
//             console.log(err);
//             toast.error("Failed to send request");
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!partner) {
//         return (
//             <div className="flex justify-center items-center h-screen text-gray-600 dark:text-gray-300">
//                 Loading...
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen py-10 px-4 ">
//             {/* Card */}
//             <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 
//                       p-8 rounded-2xl shadow-lg relative z-10
//                       text-gray-800 dark:text-gray-100">

//                 {/* Header */}
//                 <div className="flex flex-col items-center">
//                     <img
//                         src={partner.profileimage}
//                         alt={partner.name}
//                         className="w-36 h-36 rounded-full object-cover 
//                        border-4 border-blue-100 dark:border-blue-400"
//                     />

//                     <h2 className="text-3xl font-bold mt-4">
//                         {partner.name}
//                     </h2>

//                     <p className="mt-1 text-gray-500 dark:text-gray-400">
//                         {partner.subject} ({partner.studyMode})
//                     </p>
//                 </div>

//                 {/* Info grid */}
//                 <div className="mt-8 grid md:grid-cols-2 gap-6">
//                     <div className="border border-gray-200 dark:border-gray-700 
//                           p-5 rounded-xl flex items-center gap-2
//                           bg-white dark:bg-gray-700">
//                         <FaUser className="text-blue-500" />
//                         Partner Count: {partner.partnerCount || 0}
//                     </div>

//                     <div className="border border-gray-200 dark:border-gray-700 
//                           p-5 rounded-xl flex items-center gap-2
//                           bg-white dark:bg-gray-700">
//                         <FaUser className="text-blue-500" />
//                         Experience: {partner.experienceLevel}
//                     </div>

//                     <div className="border border-gray-200 dark:border-gray-700 
//                           p-5 rounded-xl flex items-center gap-2
//                           bg-white dark:bg-gray-700">
//                         <FaMapMarkerAlt className="text-blue-500" />
//                         Location: {partner.location}
//                     </div>

//                     <div className="border border-gray-200 dark:border-gray-700 
//                           p-5 rounded-xl flex items-center gap-2
//                           bg-white dark:bg-gray-700">
//                         <FaClock className="text-blue-500" />
//                         Availability: {partner.availabilityTime}
//                     </div>
//                 </div>

//                 {/* Rating */}
//                 {partner.rating && (
//                     <div className="flex justify-center items-center gap-2 mt-6">
//                         <FaStar className="text-yellow-400 text-xl" />
//                         <span className="text-lg font-semibold">
//                             {partner.rating} / 5
//                         </span>
//                     </div>
//                 )}

//                 {/* Actions */}
//                 <div className="mt-8 flex justify-center gap-4">
//                     <button
//                         onClick={handleRequest}
//                         disabled={loading}
//                         className={`px-6 py-2 rounded text-white transition
//               ${loading
//                                 ? "bg-blue-300 cursor-not-allowed"
//                                 : "bg-blue-500 hover:bg-blue-600"
//                             }`}
//                     >
//                         {loading ? "Sending..." : "Send Partner Request"}
//                     </button>

//                     <button
//                         onClick={() => navigate(-1)}
//                         className="px-6 py-2 rounded transition
//                        bg-gray-300 hover:bg-gray-400
//                        dark:bg-gray-600 dark:hover:bg-gray-500
//                        text-black dark:text-white"
//                     >
//                         Go Back
//                     </button>
//                 </div>
//             </div>

//             {/* Backdrop */}
//             <div className="fixed inset-0 backdrop-blur-sm 
//                       bg-black/10 dark:bg-black/40 z-0"></div>
//         </div>
//     );
// };

// export default PartnerDetails;






import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { FaStar, FaMapMarkerAlt, FaClock, FaUser } from "react-icons/fa";
import MyContainer from "../Components/MyContainer"; // Container like your Profile demo

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

        axios
            .get(`https://study-mate-server-eta.vercel.app/partners/${id}`)
            .then((res) => setPartner(res.data))
            .catch((err) => console.log(err));
    }, [id, user, navigate]);

    const handleRequest = async () => {
        if (!user?.email) {
            toast.error("Please login to send a request");
            return;
        }

        setLoading(true);
        try {
            await axios.post(
                `https://study-mate-server-eta.vercel.app/partners/${id}/request`,
                { userEmail: user.email }
            );

            setPartner((prev) => ({
                ...prev,
                partnerCount: (prev.partnerCount || 0) + 1,
            }));

            toast.success("Partner request sent!");
        } catch (err) {
            console.log(err);
            toast.error("Failed to send request");
        } finally {
            setLoading(false);
        }
    };

    if (!partner) {
        return (
            <MyContainer>
                <div className="text-center py-20 text-gray-600">
                    Loading...
                </div>
            </MyContainer>
        );
    }

    return (
        <MyContainer>
            <div className="max-w-4xl mx-auto mt-10 p-6 rounded-xl shadow-lg  relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center">
                    <img
                        src={partner.profileimage}
                        alt={partner.name}
                        className="w-36 h-36 rounded-full object-cover border-4 border-blue-200 dark:border-blue-400"
                    />
                    <h2 className="text-3xl font-bold mt-4">{partner.name}</h2>
                    <p className="mt-1 ">
                        {partner.subject} ({partner.studyMode})
                    </p>
                </div>

                {/* Info Grid */}
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <InfoCard icon={<FaUser className="text-blue-500" />} label="Partner Count" value={partner.partnerCount || 0} />
                    <InfoCard icon={<FaUser className="text-blue-500" />} label="Experience" value={partner.experienceLevel} />
                    <InfoCard icon={<FaMapMarkerAlt className="text-blue-500" />} label="Location" value={partner.location} />
                    <InfoCard icon={<FaClock className="text-blue-500" />} label="Availability" value={partner.availabilityTime} />
                </div>

                {/* Rating */}
                {partner.rating && (
                    <div className="flex justify-center items-center gap-2 mt-6">
                        <FaStar className="text-yellow-400 text-xl" />
                        <span className="text-lg font-semibold">{partner.rating} / 5</span>
                    </div>
                )}

                {/* Actions */}
                <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                    <button
                        onClick={handleRequest}
                        disabled={loading}
                        className={`px-6 py-2 rounded transition w-full md:w-auto
              ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
                    >
                        {loading ? "Sending..." : "Send Partner Request"}
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-2 rounded  transition w-full md:w-auto"
                    >
                        Go Back
                    </button>
                </div>
            </div>

            {/* Backdrop */}
            <div className="fixed inset-0 backdrop-blur-sm  z-0"></div>
        </MyContainer>
    );
};

// Reusable Info Card Component
const InfoCard = ({ icon, label, value }) => (
    <div className="border  p-5 rounded-xl flex items-center gap-3 ">
        {icon}
        <span className="font-medium">{label}: </span>
        <span className="ml-1">{value}</span>
    </div>
);

export default PartnerDetails;
