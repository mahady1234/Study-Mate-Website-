import React, { useContext, useEffect, useState } from 'react';
import MyContainer from './MyContainer';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDark, setIsDark] = useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setIsDark(savedTheme === 'dark');
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    // Theme toggle handler
    const handleThemeChange = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        const themeStr = newTheme ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', themeStr);
        localStorage.setItem('theme', themeStr);
    };

    const handleLogout = () => {
        logOut()
            .then(() => toast.success('Logged out successfully'))
            .catch((error) => toast.error(error.message));
    };

    return (
        <div className='text-white bg-blue-900 shadow-xl  py-3 fixed top-0 left-0 w-full z-50'>
            <MyContainer>
                <div className="flex items-center justify-between">

                    {/* Left section */}
                    <div className="flex items-center gap-2">
                        {/* Mobile menu */}
                        <div className="lg:hidden dropdown">
                            <label tabIndex={0} className="btn btn-ghost p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-black font-bold">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/authRoot/findPartners'>Find Partners</NavLink></li>
                                <li><NavLink to='/about'>About</NavLink></li>
                                <li><NavLink to='/policy'>Policy</NavLink></li>
                                {user && <li><NavLink to='/authRoot/createProfile'>Create A Profile</NavLink></li>}
                                {user && <li><NavLink to='/authRoot/myConnections'>My Connections</NavLink></li>}
                            </ul>
                        </div>

                        {/* Logo */}
                        <Link to='/' className='flex items-center gap-1'>
                            <img
                                className='w-10 h-10 bg-white p-1 rounded-full object-cover transition-transform duration-500 hover:scale-110'
                                src="https://i.ibb.co/TMm65kNT/icons8-study-94.png"
                                alt="logo"
                            />
                            <h3 className='text-sm md:text-2xl font-bold'>StudyMate</h3>
                        </Link>
                    </div>

                    {/* Center menu */}
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal gap-1 font-semibold text-[16px]">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/authRoot/findPartners'>Find Partners</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/policy'>Policy</NavLink></li>
                            {user && <li><NavLink to='/authRoot/createProfile'>Create A Profile</NavLink></li>}
                            {user && <li><NavLink to='/authRoot/myConnections'>My Connections</NavLink></li>}
                        </ul>
                    </div>

                    <div className="flex items-center gap-3">
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL || "https://img.icons8.com/?size=128&id=Ib9FADThtmSf&format=png"} alt="profile" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content mt-3 p-2 shadow bg-white rounded-box w-40 text-black font-bold">
                                    <li><Link to="/profile" className="px-3 py-2 block hover:bg-gray-200 rounded">Profile</Link></li>
                                    <li><Link to="/dashboard" className="px-3 py-2 block hover:bg-gray-200 rounded">Dashboard</Link></li>
                                    <li><button onClick={handleLogout} className="w-full text-left px-3 py-2 hover:bg-gray-200 rounded">Logout</button></li>
                                </ul>
                            </div>
                        ) : (
                            <Link to='/authRoot/login' className="btn bg-blue-100 text-black">Login / Register</Link>
                        )}

                        {/* Theme toggle */}
                        <div className="bg-blue-50 p-1 rounded-full text-black">
                            <label className="flex items-center cursor-pointer gap-1">
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                </svg>

                                <input
                                    type="checkbox"
                                    checked={isDark}
                                    onChange={handleThemeChange}
                                    className="toggle toggle-xs"
                                />

                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default Navbar;







