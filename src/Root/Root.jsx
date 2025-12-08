import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';

const Root = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;