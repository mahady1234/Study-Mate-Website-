import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const CreateProfile = () => {
    const { user } = useContext(AuthContext);

    const initialState = {
        name: "",
        profileimage: "",
        subject: "",
        studyMode: "Online",
        availabilityTime: "",
        location: "",
        experienceLevel: "Beginner",
        skills: "",
        rating: 0,
        partnerCount: 0,
        email: user?.email || "",
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const submitData = {
                ...formData,
                skills: formData.skills.split(",").map(s => s.trim()),
            };

            await axios.post("https://study-mate-server-eta.vercel.app/partners", submitData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            toast.success("Profile created successfully!");
            setFormData(initialState);
        } catch (error) {
            console.error("Error creating profile:", error);
            toast.error("Failed to create profile. Try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-24 p-6 bg-base-100 rounded-2xl shadow-xl">
            <h1 className="text-2xl font-bold mb-6 text-center text-base-content">
                Create Study Partner Profile
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full input input-bordered bg-base-200 text-base-content"
                />

                <input
                    type="text"
                    name="profileimage"
                    value={formData.profileimage}
                    onChange={handleChange}
                    placeholder="Profile Image URL"
                    required
                    className="w-full input input-bordered bg-base-200 text-base-content"
                />

                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject (e.g. Math, English)"
                    required
                    className="w-full input input-bordered bg-base-200 text-base-content"
                />

                <select
                    name="studyMode"
                    value={formData.studyMode}
                    onChange={handleChange}
                    className="w-full select select-bordered bg-base-200 text-base-content"
                >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>

                <input
                    type="text"
                    name="availabilityTime"
                    value={formData.availabilityTime}
                    onChange={handleChange}
                    placeholder="Availability Time (e.g. 6-9 PM)"
                    required
                    className="w-full input input-bordered bg-base-200 text-base-content"
                />

                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location (City / Area)"
                    required
                    className="w-full input input-bordered bg-base-200 text-base-content"
                />

                <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    className="w-full select select-bordered bg-base-200 text-base-content"
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                </select>

                <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="Skills (comma separated)"
                    className="w-full input input-bordered bg-base-200 text-base-content"
                />

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    readOnly
                    className="w-full input input-bordered bg-base-200 text-base-content opacity-60 cursor-not-allowed"
                />

                <button
                    type="submit"
                    className="w-full btn btn-primary text-white"
                >
                    Create Profile
                </button>
            </form>
        </div>
    );
};

export default CreateProfile;
