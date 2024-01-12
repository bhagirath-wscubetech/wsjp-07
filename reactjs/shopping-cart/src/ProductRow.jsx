import React, { useEffect, useState } from 'react';

const ProductRow = ({ title, image, price, subTotalHandler }) => {
    const [qty, setQty] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(
        () => {
            setTotal((qty * price).toFixed(2));
        },
        [qty]
    )

    return (
        <tr>
            <td width={"30%"}>{title}</td>
            <td>
                <img src={image} alt="" width="100" />
            </td>
            <td>
                $ {price}
            </td>
            <td>
                <button className='btn mx-2' onClick={() => setQty(qty - 1)}>-</button>
                {qty}
                <button className='btn mx-2' onClick={() => setQty(qty + 1)}>+</button>
            </td>
            <td>
                $ {total}
            </td>
        </tr>
    );
}

export default ProductRow;
