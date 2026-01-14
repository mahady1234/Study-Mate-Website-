import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import VolunteerDashboardHome from './VolunteerDashboardHome';
import UserDashBoard from './UserDashBoard';
import AdminDashboardHome from './AdminDashboardHome';


const DashBoardHome = () => {
    const { role } = useContext(AuthContext);

    if (role === "Admin") {
        return <AdminDashboardHome />;
    }

    if (role === "user") {
        return <UserDashBoard/>;
    }

    if (role === "volunteer") {
        return <VolunteerDashboardHome />;
    }
};

export default DashBoardHome;