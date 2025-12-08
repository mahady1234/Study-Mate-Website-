import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const MyConnections = () => {
    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        studyMode: ""
    });

    useEffect(() => {
        if (!user?.email) return;

        const fetchRequests = async () => {
            try {
                const res = await axios.get(`https://study-mate-server-eta.vercel.app/requests?userEmail=${user.email}`);
                setRequests(res.data);
            } catch (err) {
                console.error(err);
                toast.error("Failed to fetch connections");
            }
        };

        fetchRequests();
    }, [user]);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure?")) return;
        try {
            await axios.delete(`https://study-mate-server-eta.vercel.app/requests/${id}`);
            setRequests(prev => prev.filter(r => r._id !== id));
            toast.success("Deleted successfully");
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete");
        }
    };

    const handleOpenModal = (request) => {
        setSelectedRequest(request);
        setFormData({
            name: request.name,
            subject: request.subject,
            studyMode: request.studyMode
        });
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedRequest(null);
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://study-mate-server-eta.vercel.app/requests/${selectedRequest._id}`, formData);
            setRequests(prev =>
                prev.map(r => r._id === selectedRequest._id ? { ...r, ...formData } : r)
            );
            toast.success("Request updated successfully");
            handleCloseModal();
        } catch (err) {
            console.error(err);
            toast.error("Failed to update");
        }
    };

    return (
        <div className="min-h-screen p-4 sm:p-6 mt-20 bg-base-100 text-base-content transition-colors duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                My Connections
            </h2>

            {requests.length === 0 ? (
                <p className="text-center opacity-70 mt-10">
                    No connections found.
                </p>
            ) : (
                <div className="overflow-x-auto rounded-2xl shadow">
                    <table className="min-w-full bg-base-200 rounded-2xl overflow-hidden">
                        <thead className="bg-primary text-primary-content">
                            <tr>
                                <th className="py-3 px-2 sm:px-4 text-left">Profile</th>
                                <th className="py-3 px-2 sm:px-4 text-left">Subject</th>
                                <th className="py-3 px-2 sm:px-4 text-left">Mode</th>
                                <th className="py-3 px-2 sm:px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map(r => (
                                <tr
                                    key={r._id}
                                    className="border-t border-base-300 hover:bg-base-300/50 transition"
                                >
                                    <td className="flex items-center gap-2 py-2 sm:py-3 px-2 sm:px-4">
                                        <img
                                            src={r.profileimage}
                                            alt={r.name}
                                            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover"
                                        />
                                        <span className="text-sm sm:text-base font-medium">
                                            {r.name}
                                        </span>
                                    </td>
                                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base">
                                        {r.subject}
                                    </td>
                                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base">
                                        {r.studyMode}
                                    </td>
                                    <td className="py-2 sm:py-3 px-2 sm:px-4 flex flex-col sm:flex-row gap-2">
                                        <button
                                            onClick={() => handleOpenModal(r)}
                                            className="btn btn-success btn-sm"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(r._id)}
                                            className="btn btn-error btn-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={handleCloseModal}
                    ></div>

                    <div className="relative bg-base-100 p-6 rounded-2xl shadow-xl w-full max-w-md z-10">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
                            Update Request
                        </h2>
                        <form onSubmit={handleUpdate} className="flex flex-col gap-3">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="input input-bordered w-full bg-base-200"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="input input-bordered w-full bg-base-200"
                                required
                            />
                            <input
                                type="text"
                                name="studyMode"
                                value={formData.studyMode}
                                onChange={handleChange}
                                placeholder="Study Mode"
                                className="input input-bordered w-full bg-base-200"
                                required
                            />

                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="btn btn-outline"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyConnections;
