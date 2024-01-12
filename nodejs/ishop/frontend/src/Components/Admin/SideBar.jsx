import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoIosColorPalette } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

const SideBar = () => {
    const [active, setActive] = useState(0);
    const items = [
        {
            name: "Dashboard",
            icon: <MdDashboard />,
            url: "/admin",
            children: []
        },
        {
            name: "Category",
            url: null,
            icon: <BiCategoryAlt />,
            children: [
                {
                    name: "Add",
                    url: "/admin/category/add"
                },
                {
                    name: "View",
                    url: "/admin/category/view"
                }
            ]
        },
        {
            name: "Product",
            url: null,
            icon: <FaSitemap />,
            children: [
                {
                    name: "Add",
                    url: "/admin/product/add"
                },
                {
                    name: "View",
                    url: "/admin/product/view"
                }
            ]
        },
        {
            name: "Color",
            url: null,
            icon: <IoIosColorPalette />,
            children: [
                {
                    name: "Add",
                    url: "/admin/product/add"
                },
                {
                    name: "View",
                    url: "/admin/product/view"
                }
            ]
        },
        {
            name: "Account Setting",
            icon: <IoIosSettings />,
            url: "/admin/account-setting",
            children: []
        },
        {
            name: "Logout",
            icon: <CiLogout />,
            url: "/admin/logout",
            children: []
        }
    ]
    return (
        <div className='h-[100vh] bg-gradient-to-r from-violet-600 to-indigo-600 p-2'>
            <div className='text-3xl text-white p-3 text-center font-bold'>Admin Panel</div>
            <hr />

            <ul className='flex flex-col gap-2 mt-5 px-2 text-[18px]'>
                {
                    items.map(
                        (item, index) => {
                            return <ListItem index={index} activeHandler={setActive} active={active} data={item} key={index} />
                        }
                    )
                }
            </ul>
        </div>
    );
}

export default SideBar;


const ListItem = ({ data, activeHandler, active, index }) => {
    return (
        <>
            {
                data.children.length == 0
                    ? <Link to={data.url}>
                        <li onClick={() => activeHandler(index)} className={`text-gray-400 hover:text-white flex items-center gap-3 ${active == index ? 'text-white' : ''}`}>
                            {data.icon} {data.name}
                        </li>
                    </Link>
                    :
                    <>
                        <li onClick={
                            () => {
                                if (index == active) {
                                    activeHandler(null);
                                } else {
                                    activeHandler(index);
                                }
                            }
                        } className={`select-none text-gray-400 hover:text-white relative flex-wrap flex items-center gap-3 cursor-pointer ${active == index ? 'text-white' : ''}`}>
                            {data.icon} {data.name}
                            <FaCaretDown className={`duration-300 absolute top-[5px] right-[20px] ${index == active ? 'rotate-180' : 'rotate-0'}`} />
                            <ul className={`w-full bg-white text-black p-3 rounded 
                            ${index == active ? 'block' : 'hidden'}`}>
                                {
                                    data.children.map(
                                        (child, index) => {
                                            return (
                                                <Link onClick={(e) => e.stopPropagation()} key={index} to={child.url}>
                                                    <li>{child.name}</li>
                                                </Link>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </li>
                    </>
            }
        </>

    )
}