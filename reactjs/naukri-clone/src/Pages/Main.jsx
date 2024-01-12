import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Main;
