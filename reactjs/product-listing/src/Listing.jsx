import React, { useContext } from 'react';
import { MainContext } from './Context/Main';

const Listing = ({ products, selectedCat, range }) => {
    const { addToCart } = useContext(MainContext);

    if (selectedCat != null) {
        products = products.filter(
            (prod) => {
                if (prod.category == selectedCat) return true;
                else return false;
            }
        )
    }
    if (range.to != 0 && (range.to > range.from)) {
        // logic
        products = products.filter(
            (prod) => {
                // from: 10
                // to: 100
                if (prod.price >= range.from && prod.price <= range.to) {
                    return true;
                } else {
                    return false;
                }
            }
        )
    }
    return (
        <div className='col-span-3 grid grid-cols-3 gap-2 pt-2'>
            {
                products.map(
                    (prod) => {
                        return <div className='shadow-xl p-3'>
                            <img src={prod.image} alt="" className='h-[300px] w-full' />
                            <hr className='my-3' />
                            <div className='text-xl text-center'>{prod.title}</div>
                            <div className='text-center text-gray-500'>$ {prod.price}</div>
                            <div>
                                {prod.rating.rate} ⭐ ({prod.rating.count})
                            </div>
                            <button onClick={() => addToCart(prod.id)} className='py-2 text-center block w-full bg-gray-400 text-white'>Add To Cart</button>
                        </div>
                    }
                )
            }
        </div>
    );
}

export default Listing;
