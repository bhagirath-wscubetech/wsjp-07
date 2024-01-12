import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menus = [
        {
            name: "Jobs",
            subMenu: [
                {
                    title: "Popular categories",
                    children: [
                        {
                            name: "IT Jobs",
                            url: "it-jobs"
                        },
                        {
                            name: "Sales Jobs",
                            url: "sales-jobs"
                        },
                        {
                            name: "Marketing Jobs",
                            url: "marketing-jobs"
                        },
                        {
                            name: "Data Science Jobs",
                            url: "data-science-jobs"
                        }
                    ]
                },
                {
                    title: "Jobs in demand",
                    children: [
                        {
                            name: "Freshers Jobs",
                            url: "it-jobs"
                        },
                        {
                            name: "MNC Jobs",
                            url: "sales-jobs"
                        },
                        {
                            name: "Remote Jobs",
                            url: "marketing-jobs"
                        },
                        {
                            name: "Work from home jobs",
                            url: "data-science-jobs"
                        }
                    ]
                },
                {
                    title: "Jobs by location",
                    children: [
                        {
                            name: "Jobs in Delhi",
                            url: "it-jobs"
                        },
                        {
                            name: "Jobs in Mumbai",
                            url: "sales-jobs"
                        },
                        {
                            name: "Jobs in Banglore",
                            url: "marketing-jobs"
                        },
                        {
                            name: "Jobs in Hydrabad",
                            url: "data-science-jobs"
                        }
                    ]
                },
                {
                    title: "Explore more jobs",
                    children: [
                        {
                            name: "Jobs by category",
                            url: "it-jobs"
                        },
                        {
                            name: "Jobs by skills",
                            url: "sales-jobs"
                        },
                        {
                            name: "Jobs by location",
                            url: "marketing-jobs"
                        },
                        {
                            name: "Jobs in Hydrabad",
                            url: "data-science-jobs"
                        }
                    ]
                }
            ]

        },
        {
            name: "Companies",
            subMenu: [
                {
                    title: "Popular categories",
                    children: [
                        {
                            name: "IT Jobs",
                            url: "it-jobs"
                        },
                        {
                            name: "Sales Jobs",
                            url: "sales-jobs"
                        },
                        {
                            name: "Marketing Jobs",
                            url: "marketing-jobs"
                        },
                        {
                            name: "Data Science Jobs",
                            url: "data-science-jobs"
                        }
                    ]
                },
                {
                    title: "Jobs in demand",
                    children: [
                        {
                            name: "Freshers Jobs",
                            url: "it-jobs"
                        },
                        {
                            name: "MNC Jobs",
                            url: "sales-jobs"
                        },
                        {
                            name: "Remote Jobs",
                            url: "marketing-jobs"
                        },
                        {
                            name: "Work from home jobs",
                            url: "data-science-jobs"
                        }
                    ]
                },
                {
                    title: "Jobs by location",
                    children: [
                        {
                            name: "Jobs in Delhi",
                            url: "it-jobs"
                        },
                        {
                            name: "Jobs in Mumbai",
                            url: "sales-jobs"
                        },
                        {
                            name: "Jobs in Banglore",
                            url: "marketing-jobs"
                        },
                        {
                            name: "Jobs in Hydrabad",
                            url: "data-science-jobs"
                        }
                    ]
                },
                {
                    title: "Explore more jobs",
                    children: [
                        {
                            name: "Jobs by category",
                            url: "it-jobs"
                        },
                        {
                            name: "Jobs by skills",
                            url: "sales-jobs"
                        },
                        {
                            name: "Jobs by location",
                            url: "marketing-jobs"
                        },
                        {
                            name: "Jobs in Hydrabad",
                            url: "data-science-jobs"
                        }
                    ]
                }
            ]
        },
        {
            name: "Services",
            subMenu: [
                {
                    title: "Popular categories",
                    children: [
                        {
                            name: "IT Jobs",
                            url: "it-jobs"
                        },
                        {
                            name: "Sales Jobs",
                            url: "sales-jobs"
                        },
                        {
                            name: "Marketing Jobs",
                            url: "marketing-jobs"
                        },
                        {
                            name: "Data Science Jobs",
                            url: "data-science-jobs"
                        }
                    ]
                },
                {
                    title: "Jobs in demand",
                    children: [
                        {
                            name: "Freshers Jobs",
                            url: "it-jobs"
                        },
                        {
                            name: "MNC Jobs",
                            url: "sales-jobs"
                        },
                        {
                            name: "Remote Jobs",
                            url: "marketing-jobs"
                        },
                        {
                            name: "Work from home jobs",
                            url: "data-science-jobs"
                        }
                    ]
                },
                {
                    title: "Jobs by location",
                    children: [
                        {
                            name: "Jobs in Delhi",
                            url: "it-jobs"
                        },
                        {
                            name: "Jobs in Mumbai",
                            url: "sales-jobs"
                        },
                        {
                            name: "Jobs in Banglore",
                            url: "marketing-jobs"
                        },
                        {
                            name: "Jobs in Hydrabad",
                            url: "data-science-jobs"
                        }
                    ]
                },
                {
                    title: "Explore more jobs",
                    children: [
                        {
                            name: "Jobs by category",
                            url: "it-jobs"
                        },
                        {
                            name: "Jobs by skills",
                            url: "sales-jobs"
                        },
                        {
                            name: "Jobs by location",
                            url: "marketing-jobs"
                        },
                        {
                            name: "Jobs in Hydrabad",
                            url: "data-science-jobs"
                        }
                    ]
                }
            ]
        },
    ]
    return (
        <div className='w-full bg-white shadow py-3'>
            <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="" />
                    <ul className='flex ml-[40px] gap-7'>
                        {
                            menus.map(
                                (menu, index) => {
                                    return (
                                        <li key={index} className='cursor-pointer top-menu'>
                                            {menu.name}
                                            <div className='sub-menu'>
                                                {
                                                    menu.subMenu.map(
                                                        (sub) => {
                                                            return (
                                                                <div>
                                                                    <h3 className='font-bold'>{sub.title}</h3>
                                                                    <ul className='text-gray-600 mt-2'>
                                                                        {
                                                                            sub.children.map(
                                                                                (child) => {
                                                                                    return (<li>
                                                                                        {child.name}
                                                                                    </li>)
                                                                                }
                                                                            )
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            )
                                                        }
                                                    )
                                                }

                                            </div>
                                        </li>
                                    )
                                }
                            )
                        }

                    </ul>
                </div>
                <div className='flex gap-5'>
                    <button className='border border-[#275df5] py-[10px] px-[20px] rounded-full'>Login</button>
                    <button className='border border-[#f05537] bg-[#f05537] py-[10px] px-[20px] text-white rounded-full'>Register</button>
                    <ul>
                        <li>For Employers</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
