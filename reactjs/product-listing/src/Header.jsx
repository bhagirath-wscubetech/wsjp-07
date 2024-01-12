import React, { useContext, useState } from 'react';
import { MainContext } from './Context/Main';

const Header = ({ products }) => {
    const { cart, removeFromCart } = useContext(MainContext);
    const [toggle, setToggle] = useState(false);
    let total = 0;
    products = products.filter(
        (prod) => {

            if (cart.includes(prod.id) == true) {
                total += prod.price;
                return true
            } else {
                return false;
            }
        }
    )
    return (
        <>
            <div className='p-3 text-xl text-center shadow sticky top-0 bg-white'>
                <button onClick={() => setToggle(true)}>
                    Cart: {cart.length}
                </button>
            </div>
            <div onClick={() => setToggle(false)} style={{ background: "rgba(0,0,0,0.7)" }} className={`${toggle == true ? 'block' : 'hidden'} w-full h-full fixed z-50 top-0`}>
                <div onClick={
                    (event) => {
                        event.stopPropagation();
                    }
                } className={`${toggle == true ? 'translate-x-0' : 'translate-x-[-100%]'} delay-200 duration-[1s] w-[400px] max-h-full bg-white shadow overflow-auto`}>
                    <div className='text-2xl text-center py-2'>Cart Listing</div>
                    {
                        products.map(
                            (prod) => {
                                return <div className='flex my-2 p-3 gap-4 relative'>
                                    <img src={prod.image} width={50} alt="" />
                                    <div>
                                        <h4>{prod.title}</h4>
                                        <h4>$ {prod.price}</h4>
                                    </div>
                                    <span onClick={() => removeFromCart(prod.id)} className='cursor-pointer absolute text-red-400 font-bold top-[50px] right-[30px]'>
                                        X
                                    </span>

                                </div>
                            }
                        )
                    }
                    <div className='fixed bg-white bottom-0 w-full p-3 shadow text-3xl text-center'>
                        Total: {total}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
