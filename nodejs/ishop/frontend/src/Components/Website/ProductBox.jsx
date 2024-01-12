import React from 'react';
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";


const ProductBox = (props) => {
    return (
        <div className='flex flex-col gap-5 text-center border-[3px] h-[349px] rounded-[4px] border-[#F6F7F8]'>
            <div className={`bg-[#FF4858] w-[40px] rounded-[2px] py-1 text-white 
            ${props.hot ? 'opacity-1' : 'opacity-0'}`}>Hot</div>
            <img className='block mx-auto' src={`images/${props.image}`} alt="" />
            <div>{props.name}</div>
            <div className='flex justify-center gap-3'>
                <Stars yellow={props.yellow} />
            </div>
            <div className='flex justify-center gap-2'>
                <span className='text-[#FF4858]'>${props.price}</span>
                <span className='text-[#C1C8CE] line-through'>${props.actual_price}</span>
            </div>
        </div>
    );
}

export default ProductBox;

function Stars({ yellow }) {
    let yellowStars = [];
    for (var i = 1; i <= (yellow > 5 ? 5 : yellow); i++) {
        yellowStars.push(<FaStar className='text-[#FFC600]' />)
    }
    let whiteStars = [];
    for (var i = 1; i <= (5 - yellow); i++) {
        whiteStars.push(<CiStar />)
    }

    return (
        <>
            {yellowStars}
            {whiteStars}
        </>
    )
}