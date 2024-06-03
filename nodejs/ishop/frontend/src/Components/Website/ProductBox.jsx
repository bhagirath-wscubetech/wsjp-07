import React from 'react';
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../reducers/cart';
import axios from 'axios';

const ProductBox = (props) => {
    const dispatcher = useDispatch();
    const user = useSelector(store => store.user);

    const addToDBCart = (product_id) => {
        if (user.data != null) {
            axios
                .post("http://localhost:5000/user/add-to-cart", { product_id, user_id: user.data._id })
                .then(
                    (success) => {

                    }
                ).catch(
                    (error) => {

                    }
                )

        }
    }

    return (
        <div className={`flex ${props.grid ? 'flex-col' : 'flex-row'}  gap-5 text-center border-[3px] pb-3 rounded-[4px] border-[#F6F7F8]`}>
            <div className={`bg-[#FF4858] w-[40px] rounded-[2px] py-1 text-white 
            ${props.hot ? 'opacity-1' : 'opacity-0'}`}>Hot</div>
            <img className={`h-[200px] ${props.grid == false ? 'w-[30%]' : ''}  block mx-auto`} src={`http://localhost:5000/images/products/${props.image}`} alt="" />
            {
                props.grid == false ?
                    <div className='w-[70%] shrink-0 mt-[40px] flex flex-col gap-3 items-start'>
                        <div>{props.name} - {props.category.name}</div>
                        <div className='flex justify-center gap-3'>
                            <Stars yellow={4} />
                        </div>
                        <div className={`flex ${props.grid ? `mx-auto` : ''} gap-4 text-xl`}>
                            <FaShoppingCart />
                            <FaHeart />
                        </div>
                        <div className='flex justify-center gap-2'>
                            <span className='text-[#FF4858]'>${props.discounted_price}</span>
                            <span className='text-[#C1C8CE] line-through'>${props.price}</span>
                        </div>
                    </div>
                    :
                    <>
                        <div>{props.name} - {props.category.name}</div>
                        <div className='flex justify-center gap-3'>
                            <Stars yellow={4} />
                        </div>
                        <div className='flex mx-auto justify-center gap-4 text-xl'>
                            <FaShoppingCart onClick={() => {
                                dispatcher(addToCart({ pId: props._id, price: props.discounted_price }));
                                addToDBCart(props._id);
                            }} />
                            <FaHeart />
                        </div>
                        <div className='flex justify-center gap-2'>
                            <span className='text-[#FF4858]'>${props.discounted_price}</span>
                            <span className='text-[#C1C8CE] line-through'>${props.price}</span>
                        </div>
                    </>
            }

        </div>
    );
}

export default ProductBox;

function Stars({ yellow }) {
    let yellowStars = [];
    for (var i = 1; i <= (yellow > 5 ? 5 : yellow); i++) {
        yellowStars.push(<FaStar key={i} className='text-[#FFC600]' />)
    }
    let whiteStars = [];
    for (var i = 1; i <= (5 - yellow); i++) {
        whiteStars.push(<CiStar key={i} />)
    }

    return (
        <>
            {yellowStars}
            {whiteStars}
        </>
    )
}