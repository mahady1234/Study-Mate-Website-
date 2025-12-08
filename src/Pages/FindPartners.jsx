import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FindPartners = () => {
    const [partners, setPartners] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] = useState("name");
    const navigate = useNavigate();

    // Fetch all partners from backend
    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const response = await axios.get("http://localhost:3000/partners"); // আপনার server port অনুযায়ী ঠিক করুন
                setPartners(response.data);
            } catch (error) {
                console.error("Error fetching partners:", error);
            }
        };

        fetchPartners();
    }, []);

    // Handle view profile button
    const handleViewProfile = (id) => {
        navigate(`/details/${id}`);
    };

    // Filter and sort partners dynamically
    const displayedPartners = partners
        .filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.subject.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortField === "experienceLevel") {
                // Custom order: Beginner < Intermediate < Expert
                const order = { "Beginner": 1, "Intermediate": 2, "Expert": 3 };
                return order[a.experienceLevel] - order[b.experienceLevel];
            }
            return a[sortField].localeCompare(b[sortField]);
        });

    return (
        <div className="max-w-6xl mx-auto p-6 mt-30">
            <h1 className="text-3xl font-bold mb-6 text-center">Find Study Partners</h1>

            {/* Search & Sort Controls */}
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                <input
                    type="text"
                    placeholder="Search by name or subject..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="border rounded px-3 py-2 flex-1"
                />

                <select
                    value={sortField}
                    onChange={e => setSortField(e.target.value)}
                    className="border rounded px-3 py-2"
                >
                    <option value="name">Sort by Name</option>
                    <option value="subject">Sort by Subject</option>
                    <option value="experienceLevel">Sort by Experience Level</option>
                </select>
            </div>

            {/* Partner Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPartners.map(partner => (
                    <div key={partner._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                        <img
                            src={partner.profileimage}
                            alt={partner.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h2 className="text-xl font-semibold text-center mb-2">{partner.name}</h2>
                        <p className="text-center mb-1"><strong>Subject:</strong> {partner.subject}</p>
                        <p className="text-center mb-1"><strong>Mode:</strong> {partner.studyMode}</p>
                        <p className="text-center mb-3"><strong>Experience:</strong> {partner.experienceLevel}</p>
                        <button
                            onClick={() => handleViewProfile(partner._id)}
                            className="block w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                        >
                            View Profile
                        </button>
                    </div>
                ))}
            </div>

            {displayedPartners.length === 0 && (
                <p className="text-center mt-6 text-gray-500">No partners found.</p>
            )}
        </div>
    );
};

export default FindPartners;
