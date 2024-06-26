import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Container from './Container';
import { FaCaretDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { logout } from '../../reducers/user';
import { emptyCart } from '../../reducers/cart';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const cart = useSelector((store) => store.cart);
    const user = useSelector((store) => store.user);
    const dispatcher = useDispatch();
    const items = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Store",
            url: "/store"
        },
        {
            name: "Iphone",
            url: "/iphone"
        },
        {
            name: "Ipad",
            url: "/ipad"
        },
        {
            name: "Macbook",
            url: "/macbook"
        },
        {
            name: "Accessories",
            url: "accessories"
        }
    ]
    return (
        <>
            <div className='w-[full] header-bg md:block hidden sticky top-0 z-50 bg-white'>
                <Container classes="flex justify-between">
                    <div className='flex gap-4 items-center'>
                        <span>EN</span>
                        <FaCaretDown />
                        <span>$</span>
                        <FaCaretDown />
                    </div>
                    <div className='flex gap-4 items-center'>
                        <FaRegUser />
                        {
                            user.data == null
                                ? <Link to={"/login"}> <span>Login</span> </Link>
                                : <>
                                    <Link to={"/my-profile"}> <span>My Profile</span></Link>
                                    <span onClick={
                                        () => {
                                            dispatcher(logout())
                                            dispatcher(emptyCart());
                                        }
                                    } className='cursor-pointer'>Logout</span>
                                </>
                        }
                        <IoBag />
                        <Link to={"/cart"}>
                            <span>{cart.data.length} Items</span>
                        </Link>
                        <span className='text-[grey]'>${cart.total}</span>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="mt-[25px] px-3 flex md:justify-center justify-between">
                    <img className='' src="images/logo.svg" alt="" />
                    <IoMdMenu className='text-3xl md:hidden' onClick={() => setToggle(true)} />
                </div>
                <ul className='md:flex hidden justify-center mt-5 uppercase gap-7'>
                    {
                        items.map(
                            (item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.url}>{item.name}</Link>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
                {/* responsive menu */}
                <div className={`z-[999999] duration-100 md:hidden reponsive-menu ${toggle == false ? 'left-[-100%]' : 'left-0'}`}>
                    <ul className='text-white font-bold flex flex-col items-center justify-center mt-[100px] uppercase gap-7'>
                        {
                            items.map(
                                (item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.url}>{item.name}</Link>
                                        </li>
                                    )
                                }
                            )
                        }
                        <li>
                            <IoMdClose onClick={() => setToggle(false)} />
                        </li>
                    </ul>
                </div>
                {/* --------------- */}
            </Container >
        </>
    );
}

export default Header;
