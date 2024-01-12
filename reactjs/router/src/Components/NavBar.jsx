import React from 'react';
import { useEffect } from "react";

import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    useEffect(
        () => {
            window.scrollTo(0,0);
            // x:0 y:0
        },
        [location]
    )
    const menus = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About",
            url: "/about-us"
        },
        {
            name: "Gallery",
            url: "/gallery"
        },
        {
            name: "Contact Us",
            url: "/contact-us"
        }
    ]
    return (
        <div className='w-full shadow sticky top-0 bg-white'>
            <nav className='max-w-[1200px] mx-auto py-4 flex justify-between items-center'>
                <img src="images/logo.jpg" className='w-[150px]' alt="" />
                <ul className='flex gap-5'>
                    {
                        menus.map(
                            (item, i) => {
                                return (
                                    <li key={i} className='hover:text-blue-500'>
                                        <Link to={item.url}>{item.name}</Link >
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
