import React, { useState, useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import MyContainer from '../Components/MyContainer';

const Profile = () => {
    const { user, setUser, updateUser, logOut } = useContext(AuthContext);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        displayName: user?.displayName || "",
        photoURL: user?.photoURL || ""
    });

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully"))
            .catch(err => toast.error(err.message));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser({ displayName: formData.displayName, photoURL: formData.photoURL })
            .then(() => {
                setUser({ ...user, displayName: formData.displayName, photoURL: formData.photoURL });
                toast.success("Profile updated successfully!");
                setEditMode(false);
            })
            .catch(() => toast.error("Failed to update profile!"));
    };

    if (!user) {
        return (
            <MyContainer>
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold mb-4">You are not logged in.</h2>
                    <Link to="/authRoot/login" className="btn bg-blue-500 text-white">
                        Login / Register
                    </Link>
                </div>
            </MyContainer>
        );
    }

    return (
        <MyContainer>
            <div className="max-w-md mx-auto mt-24 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={user.photoURL || "https://img.icons8.com/?size=128&id=Ib9FADThtmSf&format=png"}
                        alt={user.displayName || "User"}
                        className="w-24 h-24 rounded-full border-4 border-blue-300 object-cover"
                    />
                    <h2 className="text-xl font-bold">{user.displayName || "No Name"}</h2>
                    <p className="text-gray-600">{user.email}</p>

                    <div className="flex flex-col gap-3 w-full mt-4">
                        <button
                            onClick={() => setEditMode(!editMode)}
                            className="btn btn-outline btn-primary w-full"
                        >
                            {editMode ? "Cancel" : "Update Profile"}
                        </button>
                        <button
                            onClick={handleLogout}
                            className="btn bg-red-500 text-white w-full"
                        >
                            Logout
                        </button>
                        <Link to="/" className="btn bg-blue-500 text-white w-full">
                            Back To Home
                        </Link>
                    </div>
                </div>

                {editMode && (
                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 flex flex-col gap-3 bg-blue-50 p-4 rounded-lg"
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full"
                            value={formData.displayName}
                            onChange={(e) =>
                                setFormData({ ...formData, displayName: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered w-full"
                            value={formData.photoURL}
                            onChange={(e) =>
                                setFormData({ ...formData, photoURL: e.target.value })
                            }
                        />
                        <button type="submit" className="btn btn-primary w-full mt-2">
                            Save Changes
                        </button>
                    </form>
                )}
            </div>
        </MyContainer>
    );
};

export default Profile;
